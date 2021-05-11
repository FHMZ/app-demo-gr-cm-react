import { Box, CssBaseline, Grid, Link, Typography } from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import clsx from 'clsx'
import React from 'react'
import useStyles from './styles'

interface Props {
  children?: React.ReactNode
}

export const CopyrightLink = () => (
  <Box mt={4}>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">App</Link> {new Date().getFullYear()}
      {'.'}
    </Typography>
  </Box>
)

export const LoginCard: React.FC<Props> = ({ children }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={4} className={classes.card}>
        {children}
      </Grid>
    </React.Fragment>
  )
}

export const LoginContainer: React.FC<Props> = ({ children }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={clsx(classes.container, classes.background)}
    >
      {children}
    </Grid>
  )
}

export const LoginHeader = () => {
  const classes = useStyles()

  return (
    <Grid
      item
      container
      justify="center"
      direction="column"
      alignItems="center"
    >
      <AccountCircleOutlinedIcon className={classes.icon} />
      <Typography component="h6" variant="h6">
        GR Canis Majoris
      </Typography>
    </Grid>
  )
}

export const RegisterLink = () => (
  <Grid container item justify="center" alignItems="center">
    <Link href="#" variant="body2">
      {'Esqueceu sua Senha?  Clique Aqui!!'}
    </Link>
  </Grid>
)
