import { blueGrey, grey } from '@material-ui/core/colors'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const drawerWidth = 260

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
      border: 'none',
      backgroundColor: blueGrey[800],
      color: '#fff',
      boxShadow:
        '0 1px 3px rgba(0, 0, 0, 0.3), 0 -1px 0px rgba(0, 0, 0, 0.02) !important;',
    },
    // swipeable-drwer-list
    subHeader: {
      color: '#fff',
      padding: theme.spacing(1, 2),
    },
    textGray: {
      color: grey[200],
    },
  })
)

export default useStyles
