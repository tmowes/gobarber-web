/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  height: 100vh;
  > header {
    max-width: 930px;
    width: 100%;
    height: 128px;
    background: #28262e;
    display: flex;
    align-items: center;
    margin: 0 auto;
    z-index: 2;
    @media (max-width: 930px) {
      height: 96px;
      width: 100%;
    }
    div {
      padding: 16px;
      z-index: 9999;
      svg {
        background: #28262e;
        color: #999591;
        width: 24px;
        height: 24px;
      }
    }
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -80px auto 0;
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 340px;
    h1 {
      font-size: 20px;
      text-align: left;
      margin-bottom: 24px;
      @media (max-width: 930px) {
        margin-bottom: 8px;
      }
    }
  }
  > a {
    color: #f4ede8;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-top: 24px;
    @media (max-width: 930px) {
      margin-top: 0;
    }
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
    svg {
      margin-right: 16px;
    }
  }
`
export const AvatarInput = styled.div`
  position: relative;
  align-self: center;
  z-index: 999;
  margin-bottom: 32px;
  @media (max-width: 930px) {
    margin-bottom: 0;
  }
  img {
    width: 192px;
    height: 192px;
    border-radius: 50%;
    object-fit: cover;
    @media (max-width: 930px) {
      width: 128px;
      height: 128px;
    }
  }
  label {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 0;
    background: #ff9000;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    input {
      display: none;
    }
    svg {
      width: 24px;
      height: 24px;
      color: #312e38;
    }
    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`

const appearFromBotton = keyframes`
  from {
    opacity:0;
    transform: translateY(100px)
  }
  to{
    opacity:1;
    transform: translateY(0px)
  }
`
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 15;
  animation: ${appearFromBotton} 1s;
`
