import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

import signUpBackgroundImg from '../../assets/sign-up-background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`
export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 320px;
  width: 100%;
  @media (max-width: 930px) {
    width: 320px;
  }
`
const appearFromRight = keyframes`
  from {
    opacity:0;
    transform: translateX(50px)
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
    width: 288px;
    text-align: center;
    @media (max-width: 930px) {
      margin: 16px 0;
      width: 288px;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 16px;
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 16px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > img {
    @media (max-width: 930px) {
      margin-left: 8px;
      height: 128px;
    }
  }
  > a {
    color: #f4ede8;
    display: flex;
    align-items: center;
    margin-top: 16px;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
    svg {
      margin-right: 16px;
    }
  }
`
