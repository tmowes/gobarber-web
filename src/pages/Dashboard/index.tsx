/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useCallback, useState, useEffect, useMemo } from 'react'
import { isToday, format, parseISO, isAfter } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import DayPicker, { DayModifiers } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { FiPower, FiClock } from 'react-icons/fi'

import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import logoImg from '../../assets/logo.svg'

import {
  Container,
  Content,
  Schedule,
  NextAppointment,
  Calendar,
  AnimationContainer,
  Background,
  Header,
  HeaderContent,
  Profile,
  Section,
  Appointment,
} from './styles'
import api from '../../services/api'

interface AppointmentItem {
  id: string
  date: string
  formattedHour: string
  user: {
    name: string
    avatar_url: string
  }
}
interface MonthAvailabilityItem {
  day: number
  available: boolean
}

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth()
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [monthAvailability, setMonthAvailability] = useState<
    MonthAvailabilityItem[]
  >([])

  const [appointments, setAppointments] = useState<AppointmentItem[]>([])

  const handleDayChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day)
    }
  }, [])

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month)
  }, [])

  const disabledDays = useMemo(() => {
    const dates = monthAvailability
      .filter(monthDay => monthDay.available === false)
      .map(monthDay => {
        const year = currentMonth.getFullYear()
        const month = currentMonth.getMonth()
        return new Date(year, month, monthDay.day)
      })
    return dates
  }, [currentMonth, monthAvailability])

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia ' dd ' de 'MMMM", {
      locale: ptBr,
    })
  }, [selectedDate])

  const selectedWeekDay = useMemo(() => {
    const dayOfWeek = format(selectedDate, 'cccc', {
      locale: ptBr,
    })
    if (dayOfWeek !== 'sábado' && dayOfWeek !== 'domingo') {
      return `${dayOfWeek}-feira`
    }
    return dayOfWeek
  }, [selectedDate])

  const morningAppointments = useMemo(() => {
    return appointments.filter(appointment => {
      return parseISO(appointment.date).getHours() < 12
    })
  }, [appointments])

  const afternoonAppointments = useMemo(() => {
    return appointments.filter(appointment => {
      return parseISO(appointment.date).getHours() >= 12
    })
  }, [appointments])

  const nextAppointment = useMemo(() => {
    return appointments.find(appointment =>
      isAfter(parseISO(appointment.date), new Date()),
    )
  }, [appointments])

  useEffect(() => {
    async function loadMonthAvailability(): Promise<void> {
      const response = await api.get(
        `/providers/${user.id}/month-availability`,
        {
          params: {
            year: currentMonth.getFullYear(),
            month: currentMonth.getMonth() + 1,
          },
        },
      )
      setMonthAvailability(response.data)
    }
    loadMonthAvailability()
  }, [user.id, currentMonth])

  useEffect(() => {
    async function loadAppointments(): Promise<void> {
      const response = await api.get<AppointmentItem[]>(
        '/appointments/schedule',
        {
          params: {
            year: selectedDate.getFullYear(),
            month: selectedDate.getMonth() + 1,
            day: selectedDate.getDate(),
          },
        },
      )
      const formattedAppointments = response.data.map(appointment => {
        return {
          ...appointment,
          formattedHour: format(parseISO(appointment.date), 'HH:mm'),
        }
      })
      setAppointments(formattedAppointments)
    }
    loadAppointments()
  }, [selectedDate])

  return (
    <>
      <Container>
        <Header>
          <HeaderContent>
            <img src={logoImg} alt="GoBarber" />
            <Profile>
              <img src={user.avatar_url} alt={user.name} />
              <div>
                <span>Bem-vindo,</span>
                <Link to="/profile">
                  <strong>{user.name}</strong>
                </Link>
              </div>
            </Profile>
            <button type="button" onClick={signOut}>
              <FiPower />
            </button>
          </HeaderContent>
        </Header>
        <Content>
          <Schedule>
            <h1>Horarios Agendados</h1>
            <p>
              {isToday(selectedDate) && <span> Hoje</span>}
              <span>{selectedDateAsText}</span>
              <span>{selectedWeekDay}</span>
            </p>
            {isToday(selectedDate) && nextAppointment && (
              <NextAppointment>
                <strong>Agendamento a seguir</strong>
                <div>
                  <img
                    src={nextAppointment?.user.avatar_url}
                    alt={nextAppointment?.user.name}
                  />
                  <strong>{nextAppointment?.user.name}</strong>
                  <span>
                    <FiClock />
                    {nextAppointment?.formattedHour}
                  </span>
                </div>
              </NextAppointment>
            )}
            <Section>
              <strong>Manhã</strong>
              {morningAppointments.length === 0 && (
                <p>Nenhum agendamento de manhã</p>
              )}
              {morningAppointments.map(appointment => (
                <Appointment key={appointment.id}>
                  <span>
                    <FiClock />
                    {appointment.formattedHour}
                  </span>
                  <div>
                    <img
                      src={appointment.user.avatar_url}
                      alt={appointment.user.name}
                    />
                    <strong>{appointment.user.name}</strong>
                  </div>
                </Appointment>
              ))}
            </Section>
            <Section>
              <strong>Tarde</strong>
              {afternoonAppointments.length === 0 && (
                <p>Nenhum agendamento de manhã</p>
              )}
              {afternoonAppointments.map(appointment => (
                <Appointment key={appointment.id}>
                  <span>
                    <FiClock />
                    {appointment.formattedHour}
                  </span>
                  <div>
                    <img
                      src={appointment.user.avatar_url}
                      alt={appointment.user.name}
                    />
                    <strong>{appointment.user.name}</strong>
                  </div>
                </Appointment>
              ))}
            </Section>
          </Schedule>
          <AnimationContainer>
            <Calendar>
              <DayPicker
                weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
                fromMonth={new Date()}
                disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
                modifiers={{ available: { daysOfWeek: [1, 2, 3, 4, 5] } }}
                onMonthChange={handleMonthChange}
                onDayClick={handleDayChange}
                selectedDays={selectedDate}
                months={[
                  'Janeiro',
                  'Fevereiro',
                  'Março',
                  'Abril',
                  'Maio',
                  'Junho',
                  'Julho',
                  'Agosto',
                  'Setembro',
                  'Outubro',
                  'Novembro',
                  'Dezembro',
                ]}
              />
            </Calendar>
          </AnimationContainer>
        </Content>
        <Background />
      </Container>
    </>
  )
}

export default Dashboard
