import { orange } from '@material-ui/core/colors'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100vh',
    padding: theme.spacing(3, 2),
  },
  background: {
    backgroundSize: 'cover',
    backgroundColor: orange[900],
    backgroundPosition: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(3),
    boxShadow:
      '0 1px 3px rgba(0, 0, 0, 0.3), 0 -1px 0px rgba(0, 0, 0, 0.02) !important',
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: theme.spacing(5),
  },
}))

export default useStyles
