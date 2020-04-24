import React from 'react'
import { useTransition } from 'react-spring'

import Toast from './Toast'
import { ToastMessageData } from '../../hooks/toast'
import { Container } from './styles'

interface ToastContainerProps {
  messages: ToastMessageData[]
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWidthTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  )
  return (
    <Container>
      {messagesWidthTransitions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  )
}

export default ToastContainer
