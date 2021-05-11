import {
  Card,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core'
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined'
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined'
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined'
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined'
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import clsx from 'clsx'
import React, { useState } from 'react'
import DashboardLayout from '../../layouts/Dashboard'
import useStyles from './styles'

const Dashboard: React.FC = () => {
  const classes = useStyles()
  const [amountValue, setAmountValue] = useState('1.000,00')
  const [showAmount, setShowAmount] = useState(true)
  return (
    <DashboardLayout>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} xl={12} xs={12}>
          <Card className={clsx(classes.card, classes.orange)}>
            <CardHeader
              avatar={<AccountBalanceOutlinedIcon fontSize="large" />}
              action={
                <IconButton
                  aria-label="hideValue"
                  onClick={() => setShowAmount(!showAmount)}
                >
                  {showAmount ? (
                    <VisibilityOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </IconButton>
              }
              title={
                <React.Fragment>
                  {showAmount ? (
                    <Typography variant="h6">R$ {amountValue}</Typography>
                  ) : (
                    <Typography variant="h6">R$ ---------</Typography>
                  )}
                </React.Fragment>
              }
              subheader={
                <Typography variant="overline">Saldo em conta</Typography>
              }
            />
          </Card>
        </Grid>
        <Grid item lg={6} md={6} xl={12} xs={12} />
        <Grid item xl={3} lg={3} md={6} xs={12}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <ReportProblemOutlinedIcon
                  fontSize="large"
                  className={classes.yellow}
                />
              }
              title={<Typography variant="h6">11/01/2021</Typography>}
              subheader={
                <Typography variant="overline">Nova Data Base</Typography>
              }
            />
          </Card>
        </Grid>
        <Grid item xl={3} lg={3} md={6} xs={12}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <TodayOutlinedIcon fontSize="large" className={classes.green} />
              }
              title={<Typography variant="h6">11/01/2021</Typography>}
              subheader={
                <Typography variant="overline">Data máxima p/ ted</Typography>
              }
            />
          </Card>
        </Grid>
        <Grid item xl={3} lg={3} md={6} xs={12}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <TodayOutlinedIcon fontSize="large" className={classes.green} />
              }
              title={<Typography variant="h6">11/01/2021</Typography>}
              subheader={
                <Typography variant="overline">Data máxima p/ doc</Typography>
              }
            />
          </Card>
        </Grid>
        <Grid item xl={3} lg={3} md={6} xs={12}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <EventAvailableOutlinedIcon
                  fontSize="large"
                  className={classes.blue}
                />
              }
              title={<Typography variant="h6">11/01/2021</Typography>}
              subheader={
                <Typography variant="overline">alteração de decisão</Typography>
              }
            />
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  )
}

export default Dashboard
