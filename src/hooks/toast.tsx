import React, { createContext, useState, useCallback, useContext } from 'react'
import { uuid } from 'uuidv4'
import ToastContainer from '../components/ToastContainer'

export interface ToastMessageData {
  id: string
  title: string
  type?: 'success' | 'error' | 'info'
  description?: string
}

interface ToastContextData {
  addToast(message: Omit<ToastMessageData, 'id'>): void
  removeToast(id: string): void
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessageData[]>([])

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessageData, 'id'>) => {
      const id = uuid()

      const toast = {
        id,
        title,
        type,
        description,
      }
      setMessages(oldMessages => [...oldMessages, toast])
    },
    [],
  )

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  )
}

export function useToast(): ToastContextData {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
