import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

import signInBackgroundImg from '../../assets/sign-in-background.png'

export const Container = styled.div`
  @media (max-width: 930px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Header = styled.header`
  padding: 32px 48px;
  width: 100%;
  @media (max-width: 930px) {
    padding: 16px 0;
    max-width: 444px;
  }
  background: #28262e;
  z-index: 999;
`
export const HeaderContent = styled.div`
  max-width: 930px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    height: 80px;
    @media (max-width: 930px) {
      margin: 0 8px;
      height: 48px;
    }
    @media (max-width: 320px) {
      display: none;
    }
  }
  button {
    margin-left: auto;
    @media (max-width: 930px) {
      margin: 0 16px;
    }
    background: #28262e;
    padding: 16px;
    border: 0;
  }
  svg {
    background: #28262e;
    color: #999591;
    width: 24px;
    height: 24px;
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;
  @media (max-width: 930px) {
    margin-left: 16px;
    max-width: 444px;
  }
  img {
    width: 64px;
    height: 64px;
    @media (max-width: 930px) {
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
    justify-content: center;
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
  @media (max-width: 930px) {
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
const appearFromBotton = keyframes`
  from {
    opacity:0;
    transform: translateY(80px)
  }
  to{
    opacity:1;
    transform: translateY(0px)
  }
`
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;
  @media (max-width: 930px) {
    animation: ${appearFromBotton} 1s;
  }
`
export const Calendar = styled.aside`
  max-width: 380px;
  width: 115%;
  @media (max-width: 930px) {
    margin: 32px 0;
  }
  @media (max-width: 424px) {
    width: 115%;
  }
  @media (max-width: 320px) {
    width: 100%;
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
    border-spacing: 6px;
    margin: 8px;
  }
  .DayPicker-Day {
    width: 40px;
    height: 40px;
    @media (max-width: 424px) {
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
