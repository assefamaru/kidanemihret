import React from "react"
import PropTypes from "prop-types"
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#FFFFFF',
    },
  },
});

const useStyles = makeStyles(theme => ({
  
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
      </MuiThemeProvider>


    </React.Fragment>
  );
}

Header.propTypes = {
  template: PropTypes.bool,
};
