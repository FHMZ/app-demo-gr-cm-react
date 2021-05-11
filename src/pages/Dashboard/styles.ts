import { blue, green, orange, yellow } from '@material-ui/core/colors'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      boxShadow:
        '0 1px 3px rgba(0, 0, 0, 0.3), 0 -1px 0px rgba(0, 0, 0, 0.02) !important',
      // '&:hover': {
      //   boxShadow:
      //     '0 1px 12px rgba(0, 0, 0, 0.3), 0 -1px 0px rgba(0, 0, 0, 0.02) !important;',
      // },
      // "&:active": {
      //   boxShadow:
      //     "0 1px 3px rgba(0, 0, 0, 0.3), 0 -1px 0px rgba(0, 0, 0, 0.02) !important",
      // },
    },
    orange: {
      backgroundColor: orange[700],
    },
    yellow: {
      color: yellow[700],
    },
    green: {
      color: green[700],
    },
    blue: {
      color: blue[700],
    },
  })
)

export default useStyles
