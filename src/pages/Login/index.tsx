import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import {
  CopyrightLink,
  LoginContainer,
  LoginCard,
  LoginHeader,
  RegisterLink,
} from '../../components/Login'
import TextField from '../../components/TextField'
import useStyles from './styles'

interface LoginDTO {
  login: string
  dateBirth: string
  password: string
}

const Login: React.FC = () => {
  const classes = useStyles()
  const route = useHistory()

  const [form, setForm] = useState<LoginDTO>({
    login: '',
    dateBirth: '',
    password: '',
  })

  return (
    <LoginContainer>
      <LoginCard>
        <LoginHeader />
        <form className={classes.form} noValidate>
          <TextField
            id="login"
            label="Login"
            name="login"
            type="text"
            size="small"
            required={true}
            autoFocus={true}
            variant="filled"
            value={form.login}
            onChange={(e) => setForm({ ...form, login: e.target.value })}
          />
          <TextField
            id="dateBirth"
            label="Data de Nascimento"
            name="dateBirth"
            type="text"
            size="small"
            required={true}
            variant="filled"
            value={form.dateBirth}
            onChange={(e) => setForm({ ...form, dateBirth: e.target.value })}
          />
          <TextField
            id="password"
            label="Password"
            name="password"
            type="password"
            size="small"
            required={true}
            variant="filled"
            autoComplete="current-password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <Button
            type="submit"
            text="Fazer Login"
            className={classes.btn}
            onClick={() => route.push('/app/dashboard')}
          />
          <RegisterLink />
        </form>
        <CopyrightLink />
      </LoginCard>
    </LoginContainer>
  )
}

export default Login
