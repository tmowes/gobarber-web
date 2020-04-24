import React, { createContext, useState, useCallback, useContext } from 'react'
import api from '../services/api'

interface AuthStateData {
  token: string
  user: object
}

interface SignCredencials {
  email: string
  password: string
}

interface AuthContextData {
  user: object
  signIn(credentials: SignCredencials): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthStateData>(() => {
    const token = localStorage.getItem('@Gobarber: token')
    const user = localStorage.getItem('@Gobarber: user')
    if (token && user) {
      return { token, user: JSON.parse(user) }
    }
    return {} as AuthStateData
  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    })
    const { token, user } = response.data
    localStorage.setItem('@Gobarber: token', token)
    localStorage.setItem('@Gobarber: user', JSON.stringify(user))
    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@Gobarber: token')
    localStorage.removeItem('@Gobarber: user')
    setData({} as AuthStateData)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('Auth must be used within a AuthProvider')
  }
  return context
}
