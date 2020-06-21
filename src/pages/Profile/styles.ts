/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  height: 100vh;
  > header {
    height: 144px;
    background: #28262e;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    /* justify-content: center; */
    div {
      max-width: 930px;
      width: 100%;
      margin: 0 auto;
      svg {
        width: 24px;
        height: 24px;
        color: #999591;
      }
    }
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -96px auto 0;
  width: 100%;
  form {
    /* margin: 80px 0; */
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
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
    input[name='old_password'] {
      margin-top: 24px;
    }
  }
  > a {
    color: #f4ede8;
    display: flex;
    align-items: center;
    margin-top: 24px;
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
export const AvatarInput = styled.div`
  position: relative;
  margin-bottom: 32px;
  align-self: center;
  img {
    width: 192px;
    height: 192px;
    border-radius: 50%;
    object-fit: cover;
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

// const appearFromRight = keyframes`
//   from {
//     opacity:0;
//     transform: translateY(100px)
//   }
//   to{
//     opacity:1;
//     transform: translateY(0px)
//   }
// `
// export const AnimationContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   animation: ${appearFromRight} 1s;
//   form {
//     margin: 80px 0;
//     width: 340px;
//     text-align: center;
//     h1 {
//       margin-bottom: 24px;
//     }
//     a {
//       color: #f4ede8;
//       display: block;
//       margin-top: 24px;
//       text-decoration: none;
//       transition: color 0.2s;
//       &:hover {
//         color: ${shade(0.2, '#f4ede8')};
//       }
//     }
//   }
//   > a {
//     color: #f4ede8;
//     display: flex;
//     align-items: center;
//     margin-top: 24px;
//     text-decoration: none;
//     transition: color 0.2s;
//     &:hover {
//       color: ${shade(0.2, '#f4ede8')};
//     }
//     svg {
//       margin-right: 16px;
//     }
//   }
// `
