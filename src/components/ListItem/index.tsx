import {
  Avatar,
  Box,
  Collapse,
  Divider,
  List,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core'
import Item from '@material-ui/core/ListItem'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'
import clsx from 'clsx'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useStyles from './style'

interface Props {
  button?: any
  className?: any
  icon?: React.ReactNode | undefined
  avatar?: React.ReactNode | undefined
  primary: React.ReactNode | undefined
  secondary?: React.ReactNode | undefined
  onClick?: () => void
  secondaryAction?: React.ReactNode | undefined
  dividerTop?: boolean
  dividerBottom?: boolean
}

interface ListItemEmptyProps {
  avatar?: React.ReactNode
}

interface ListItemCollapseProps {
  button?: any
  primary: React.ReactNode
  icon?: React.ReactNode
  subMenuList: Array<any> | undefined
}

export const ListItemEmpty: React.FC<ListItemEmptyProps> = ({ avatar }) => (
  <ListItem
    primary={
      <Typography component="div">
        <Box fontWeight={500} m={1}>
          Nenhum dado Cadastrado...
        </Box>
      </Typography>
    }
    avatar={avatar}
  />
)

export const ListItemCollapse: React.FC<ListItemCollapseProps> = ({
  button,
  icon,
  primary,
  subMenuList,
}) => {
  const classes = useStyles()
  const history = useHistory()

  const [expandMenu, setExpandMenu] = useState(false)

  return (
    <React.Fragment>
      <ListItem
        button={button}
        icon={icon}
        primary={primary}
        onClick={() => setExpandMenu(!expandMenu)}
        secondaryAction={
          <ExpandMoreRoundedIcon
            fontSize="small"
            className={clsx(classes.expand, {
              [classes.expandOpen]: expandMenu,
            })}
          />
        }
      />
      <Collapse in={expandMenu} timeout="auto" unmountOnExit>
        {subMenuList !== undefined &&
          subMenuList.map((subMenu, i) => (
            <List
              key={i}
              component="div"
              disablePadding
              className={classes.subMenu}
            >
              <ListItem
                button={button}
                icon={subMenu.icon}
                className={classes.nested}
                primary={
                  <Typography variant="body2" className={classes.textGray}>
                    {subMenu.label}
                  </Typography>
                }
                onClick={() => history.push(subMenu.path)}
              />
            </List>
          ))}
      </Collapse>
    </React.Fragment>
  )
}

const ListItem: React.FC<Props> = ({
  button,
  className,
  icon,
  avatar,
  primary,
  secondary,
  onClick,
  secondaryAction,
  dividerTop,
  dividerBottom,
}) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      {dividerTop && <Divider variant="inset" component="li" />}
      <Item button={button} onClick={onClick} className={className}>
        {icon !== undefined && <ListItemIcon>{icon}</ListItemIcon>}
        {avatar !== undefined && (
          <ListItemAvatar>
            <Avatar className={classes.small}>{avatar}</Avatar>
          </ListItemAvatar>
        )}
        <ListItemText primary={primary} secondary={secondary} />
        {secondaryAction !== undefined && (
          <ListItemSecondaryAction>{secondaryAction}</ListItemSecondaryAction>
        )}
      </Item>
      {dividerBottom && <Divider variant="inset" component="li" />}
    </React.Fragment>
  )
}

export default ListItem
