import React, { useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'
import { useToast } from '../../hooks/toast'
import getValidationErrors from '../../utils/getValidationErrors'
import logoImg from '../../assets/logo.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, AnimationContainer, Background } from './styles'

interface SignInFormData {
  email: string
  password: string
}

const Dashboad: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { signIn } = useAuth()
  const { addToast } = useToast()

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({})
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail valido'),
          password: Yup.string().required('Senha obrigatória'),
        })
        await schema.validate(data, {
          abortEarly: false,
        })
        await signIn({
          email: data.email,
          password: data.password,
        })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
          return
        }
        addToast({
          type: 'error',
          title: 'Acho que não foi possivel, Julius',
          description: 'Não sabendo que era impossivel, foi lá e fez.',
        })
      }
    },
    [signIn, addToast],
  )
  return (
    <>
      <Container>
        <Content>
          <AnimationContainer>
            <img src={logoImg} alt="GoBarber" />
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>DASHBOARD</h1>
              <Input name="email" icon={FiMail} placeholder="E-mail" />
              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
              />
              <Button type="submit">Entrar</Button>
              <a href="forgot">Esqueci minha senha</a>
            </Form>
            <Link to="/signup">
              <FiLogIn size={20} />
              Criar conta
            </Link>
          </AnimationContainer>
        </Content>
        <Background />
      </Container>
    </>
  )
}

export default Dashboad
