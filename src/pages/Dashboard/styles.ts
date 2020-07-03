import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

import signInBackgroundImg from '../../assets/sign-in-background.png'

export const Container = styled.div``

export const Header = styled.header`
  padding: 32px 0;
  @media (max-width: 930px) {
    padding: 16px 0;
  }
  background: #28262e;
`
export const HeaderContent = styled.div`
  max-width: 930px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media (max-width: 930px) {
    max-width: 768px;
  }
  > img {
    height: 80px;
    @media (max-width: 930px) {
      margin-left: 8px;
      height: 48px;
    }
  }
  button {
    margin-left: auto;
    @media (max-width: 930px) {
      margin-right: 16px;
    }
    background: transparent;
    padding: 8px;
    border: 0;
  }
  svg {
    color: #999591;
    width: 24px;
    height: 24px;
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;
  @media (max-width: 928px) {
    margin-left: 16px;
    max-width: 444px;
  }
  img {
    width: 64px;
    height: 64px;
    @media (max-width: 928px) {
      width: 48px;
      height: 48px;
    }
    border-radius: 50%;
    object-fit: cover;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
    span {
      color: #f4ede8;
    }
    a {
      text-decoration: none;
      color: #ff9000;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`
export const Content = styled.main`
  display: flex;
  max-width: 930px;
  margin: 64px auto;
  flex-direction: row;
  @media (max-width: 930px) {
    flex-direction: column;
    max-width: 444px;
    margin: 8px 0;
  }
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const Schedule = styled.div`
  flex: 1;
  margin: 16px;
  @media (max-width: 768px) {
    margin: 0 12px;
  }
  h1 {
    font-size: 36px;
  }
  p {
    margin-top: 8px;
    color: #ff9000;
    display: flex;
    font-weight: 500;
    span {
      display: flex;
      align-items: center;
    }
    span + span::before {
      content: ' ';
      width: 2px;
      height: 12px;
      background: #ff9000;
      margin: 0 8px;
    }
  }
`

export const NextAppointment = styled.div`
  margin-top: 64px;
  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }
  div {
    display: flex;
    position: relative;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    background: #3e3b47;
    &::before {
      position: absolute;
      height: 80%;
      width: 2px;
      left: 0;
      top: 10%;
      content: '';
      background: #ff9000;
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
    }
    strong {
      margin-left: 24px;
    }
    span {
      display: flex;
      align-items: center;
      margin-left: auto;
      color: #999591;
      svg {
        color: #ff9000;
        margin-right: 8px;
      }
    }
  }
`
export const Section = styled.section`
  margin-top: 48px;
  > strong {
    display: block;
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
  > p {
    color: #999591;
  }
`
export const Appointment = styled.div`
  display: flex;
  align-items: center;
  & + div {
    margin-top: 16px;
  }
  span {
    display: flex;
    align-items: center;
    margin-left: auto;
    color: #f4ede8;
    width: 70px;
    svg {
      color: #ff9000;
      margin-right: 8px;
    }
  }
  div {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;
    background: #3e3b47;
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      object-fit: cover;
    }
    strong {
      margin-left: 24px;
      font-size: 20px;
    }
  }
`

export const Calendar = styled.aside`
  width: 380px;
  @media (max-width: 768px) {
    width: 304px;
    margin: 32px 0;
  }
  .DayPicker {
    background: #28262e;
    border-radius: 8px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 8px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 8px;
    color: #232129 !important;
  }
`

const appearFromRight = keyframes`
  from {
    opacity:0;
    transform: translateX(80px)
  }
  to{
    opacity:1;
    transform: translateX(0px)
  }
`

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;
  form {
    margin: 80px 0;
    width: 380px;

    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color: #ff9000;
    display: flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
    svg {
      margin-right: 16px;
    }
  }
`
