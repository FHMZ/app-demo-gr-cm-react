import { CssBaseline } from '@material-ui/core'
import React from 'react'
import Drawer from '../../components/Drawer'
import Header from '../../components/Header'
import useStyles from './styles'

interface Props {
  children: React.ReactNode
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        title="GR Canis Majoris"
        onDrawerOpen={() => setMobileOpen(!mobileOpen)}
      />
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(!mobileOpen)} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
