import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined'
import clsx from 'clsx'
import React from 'react'
import useStyles from './styles'

interface Props {
  title?: string
  onDrawerOpen: () => void
  className?: string | undefined
}

const Header: React.FC<Props> = ({ title, onDrawerOpen, className }) => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={clsx(classes.appBar, className)}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="leftDrawer"
          onClick={onDrawerOpen}
          className={classes.menuButton}
        >
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title} noWrap>
          {title}
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => console.log('icon button')}
        >
          <NotificationsActiveOutlinedIcon />
        </IconButton>
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => console.log('icon button')}
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
