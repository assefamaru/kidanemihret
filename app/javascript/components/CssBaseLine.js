import React from "react"
import PropTypes from "prop-types"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#FFFFFF',
    },
  },
});

export default function CssBaseLine(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
    </MuiThemeProvider>
  );
}
