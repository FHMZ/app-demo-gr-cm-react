import {
  Drawer,
  Hidden,
  List,
  ListSubheader,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { menuList } from '../../config/routes'
import ListItem, { ListItemCollapse } from '../ListItem'
import useStyles from './styles'

interface Props {
  open: boolean
  onClose: () => void
  window?: () => Window
}

interface ResponsiveDrawerListProps {
  drawerList: Array<any>
}

const ResponsiveDrawerList: React.FC<ResponsiveDrawerListProps> = ({
  drawerList,
}) => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <div role="presentation">
      <List
        component="nav"
        aria-labelledby="list"
        subheader={
          <ListSubheader id="subheader" className={classes.subHeader}>
            Menu
          </ListSubheader>
        }
      >
        {drawerList?.map((menu, i) =>
          menu.subMenuList === undefined ? (
            <ListItem
              key={i}
              button={true}
              icon={menu.icon}
              primary={
                <Typography variant="body2" className={classes.textGray}>
                  {menu.label}
                </Typography>
              }
              onClick={() => history.push(menu.path)}
            />
          ) : (
            <ListItemCollapse
              key={i}
              button={true}
              icon={menu.icon}
              primary={
                <Typography variant="body2" className={classes.textGray}>
                  {menu.label}
                </Typography>
              }
              subMenuList={menu.subMenuList}
            />
          )
        )}
      </List>
    </div>
  )
}

const ResponsiveDrawer: React.FC<Props> = ({ open, onClose, window }) => {
  const classes = useStyles()
  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <React.Fragment>
      <nav className={classes.drawer} aria-label="nav">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={open}
            onClose={onClose}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <ResponsiveDrawerList drawerList={menuList} />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <ResponsiveDrawerList drawerList={menuList} />
          </Drawer>
        </Hidden>
      </nav>
    </React.Fragment>
  )
}

export default ResponsiveDrawer
