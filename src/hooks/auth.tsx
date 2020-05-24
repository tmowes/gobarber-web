import React, { createContext, useState, useCallback, useContext } from 'react'
import api from '../services/api'

interface User {
  id: string
  name: string
  email: string
  avatar_url: string
}

interface AuthStateData {
  token: string
  user: User
}

interface SignCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: User
  signIn(credentials: SignCredentials): Promise<void>
  signOut(): void
  updateUser(user: User): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthStateData>(() => {
    const token = localStorage.getItem('@Gobarber: token')
    const user = localStorage.getItem('@Gobarber: user')
    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`
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
    api.defaults.headers.authorization = `Bearer ${token}`
    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@Gobarber: token')
    localStorage.removeItem('@Gobarber: user')
    setData({} as AuthStateData)
  }, [])

  const updateUser = useCallback(
    (user: User) => {
      setData({
        token: data.token,
        user,
      })
      localStorage.setItem('@Gobarber: user', JSON.stringify(user))
    },

    [setData, data.token],
  )

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
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
