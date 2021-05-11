import { orange } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const useTextFieldTheme = createMuiTheme({
  palette: {
    primary: { main: orange[800] },
  },
})

export default useTextFieldTheme
