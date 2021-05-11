import { orange } from '@material-ui/core/colors'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    flexGrow: 1,
    width: '100%',
    padding: theme.spacing(2),
  },
  btn: {
    color: '#fff',
    padding: theme.spacing(1),
    backgroundColor: orange[800],
    borderRadius: theme.spacing(3),
    margin: theme.spacing(4, 0, 2),
    boxShadow:
      '0 1px 3px rgba(0, 0, 0, 0.3), 0 -1px 0px rgba(0, 0, 0, 0.02) !important;',
    '&:hover': {
      backgroundColor: orange[900],
    },
  },
}))

export default useStyles
