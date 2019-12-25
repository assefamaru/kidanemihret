import React from "react"
import PropTypes from "prop-types"
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4527a0',
    },
  },
});

const useStyles = makeStyles(theme => ({
  rootContainer: {
    maxWidth: 550,
    margin: 'auto',
  },
  root: {
    backgroundColor: 'transparent',
    marginTop: theme.spacing(10),
    color: '#424242',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    fontFamily: 'sans-serif-light',
    marginBottom: theme.spacing(4),
  },
  textField: {
    fontSize: 20,
  },
  p: {
    fontFamily: 'sans-serif-book',
    color: '#424242',
    fontSize: 16,
    marginTop: theme.spacing(3),
  },
  submit: {
    fontSize: 15,
    letterSpacing: 1,
    marginTop: theme.spacing(3),
    fontFamily: 'sans-serif-medium',
    height: 50,
  },
  linkLogIn: {
    marginLeft: 5,
    color: '#3D3D3D',
    textDecoration: 'underline',
  },
}));

export default function PasswordReset(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.rootContainer}>
        <Paper className={classes.root} elevation={0}>
          <Typography variant="h2" component="h1" className={classes.title}>
            Forgot password
          </Typography>
          <form
            className={classes.container}
            autoComplete="off"
            action="/password_resets"
            acceptCharset="UTF-8"
            method="post"
          >
            <input name="utf8" type="hidden" value="&#x2713;" />
            <input type='hidden' name="authenticity_token" value={props.authenticityToken} />
            <TextField
              id="outlined-email"
              className={classes.textField}
              label="Email"
              name="password_reset[email]"
              placeholder="kidanemihret@gmail.com"
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              fullWidth
              type="submit"
            >
              Submit
            </Button>
          </form>
          <p className={classes.p}>
            Go back to
            <Link href="/login" className={classes.linkLogIn}>
              log in page.
            </Link>
          </p>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

PasswordReset.propTypes = {
  authenticityToken: PropTypes.string.isRequired,
};
