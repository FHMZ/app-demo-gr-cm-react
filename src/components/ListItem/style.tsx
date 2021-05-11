import { blueGrey, grey } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: grey[400],
  },
  // list-item-collapse
  nested: {
    paddingLeft: theme.spacing(4),
  },
  subMenu: {
    background: blueGrey[900],
  },
  textGray: {
    color: grey[200],
  },
  expand: {
    marginTop: 5,
    color: grey[200],
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}))

export default useStyles
