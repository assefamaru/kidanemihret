import React from "react"
import PropTypes from "prop-types"
import clsx from 'clsx'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4527a0',
    },
    error: {
      main: '#e53935',
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
    marginBottom: theme.spacing(2),
  },
  submit: {
    fontSize: 15,
    letterSpacing: 1,
    marginTop: theme.spacing(3),
    fontFamily: 'sans-serif-medium',
    height: 50,
  },
}));

export default function ResetPassword(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
    password_confirm: '',
    showPasswordConfirm: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowPasswordConfirm = () => {
    setValues({ ...values, showPasswordConfirm: !values.showPasswordConfirm });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const userPasswordInput = errors => {
    if (errors) {
      return (props.user.password);
    }
  }

  const userPasswordConfirmationInput = errors => {
    if (errors) {
      return (props.user.password_confirmation);
    }
  }

  const userPasswordError = errors => {
    if (errors) {
      return (props.errors[3]);
    } else {
      return null;
    }
  };

  const userPasswordConfirmationError = errors => {
    if (errors) {
      return (props.errors[4]);
    } else {
      return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.rootContainer}>
        <Paper className={classes.root} elevation={0}>
          <Typography variant="h2" component="h1" className={classes.title}>
            Reset password
          </Typography>
          <form
            className={classes.container}
            autoComplete="off"
            action={props.actionPath}
            acceptCharset="UTF-8"
            method="post"
          >
            <input name="utf8" type="hidden" value="&#x2713;" />
            <input type="hidden" name="_method" value="patch" />
            <input type='hidden' name="authenticity_token" value={props.authenticityToken} />
            <input type="hidden" name="email" id="email" value={props.email} />
            <TextField
              fullWidth
              className={classes.textField}
              label="Password"
              variant="outlined"
              error={props.password_errors}
              type={values.showPassword ? 'text' : 'password'}
              defaultValue={userPasswordInput(props.errors_exist)}
              helperText={userPasswordError(props.password_errors)}
              name="user[password]"
              onChange={handleChange('password')}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
                  </IconButton>
                </InputAdornment>,
              }}
            />
            <TextField
              fullWidth
              className={classes.textField}
              label="Password Confirmation"
              variant="outlined"
              error={props.password_confirmation_errors}
              type={values.showPasswordConfirm ? 'text' : 'password'}
              defaultValue={userPasswordConfirmationInput(props.errors_exist)}
              helperText={userPasswordConfirmationError(props.password_confirmation_errors)}
              name="user[password_confirmation]"
              onChange={handleChange('password_confirm')}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPasswordConfirm}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPasswordConfirm ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
                  </IconButton>
                </InputAdornment>,
              }}
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
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

ResetPassword.propTypes = {
  authenticityToken: PropTypes.string.isRequired,
  errors_exist: PropTypes.bool,
  errors: PropTypes.array,
  email: PropTypes.string,
  user: PropTypes.object,
  password_errors: PropTypes.bool,
  password_confirmation_errors: PropTypes.bool,
};
