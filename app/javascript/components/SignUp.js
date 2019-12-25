import React from "react"
import PropTypes from "prop-types"
import clsx from 'clsx'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import SendIcon from '@material-ui/icons/Send'

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
  title: {
    fontFamily: 'sans-serif-light',
    marginBottom: theme.spacing(4),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    marginBottom: theme.spacing(1),
  },
  textField: {
    marginTop: theme.spacing(1),
    fontFamily: 'sans-serif-book',
    color: '#424242',
  },
  p: {
    fontFamily: 'sans-serif-book',
    color: '#424242',
    fontSize: 16,
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

export default function SignUp(props) {
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

  const userFirstNameInput = errors => {
    if (errors) {
      return (props.user.first_name);
    }
  };

  const userLastNameInput = errors => {
    if (errors) {
      return (props.user.last_name);
    }
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

  const userEmailInput = errors => {
    if (errors) {
      return (props.user.email);
    }
  };

  const userFirstNameError = errors => {
    if (errors) {
      return (props.errors[0]);
    } else {
      return null;
    }
  };

  const userLastNameError = errors => {
    if (errors) {
      return (props.errors[1]);
    } else {
      return null;
    }
  };

  const userEmailError = errors => {
    if (errors) {
      return (props.errors[2]);
    } else {
      return null;
    }
  };

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
            Sign Up
          </Typography>
          <form
            className={classes.container}
            autoComplete="off"
            action="/users"
            acceptCharset="UTF-8"
            method="post"
          >
            <input name="utf8" type="hidden" value="&#x2713;" />
            <input type='hidden' name="authenticity_token" value={props.authenticityToken} />
            <TextField
              id="outlined-first-name"
              className={clsx(classes.textField, "form-control")}
              label="First Name"
              name="user[first_name]"
              margin="normal"
              variant="outlined"
              fullWidth
              helperText={userFirstNameError(props.first_name_errors)}
              defaultValue={userFirstNameInput(props.errors_exist)}
              error={props.first_name_errors}
            />
            <TextField
              id="outlined-last-name"
              className={classes.textField}
              label="Last Name"
              name="user[last_name]"
              margin="normal"
              variant="outlined"
              fullWidth
              helperText={userLastNameError(props.last_name_errors)}
              defaultValue={userLastNameInput(props.errors_exist)}
              error={props.last_name_errors}
            />
            <TextField
              id="outlined-email"
              className={classes.textField}
              label="Email"
              name="user[email]"
              placeholder="kidanemihret@gmail.com"
              margin="normal"
              variant="outlined"
              fullWidth
              helperText={userEmailError(props.email_errors)}
              defaultValue={userEmailInput(props.errors_exist)}
              error={props.email_errors}
            />
            <TextField
              fullWidth
              className={clsx(classes.margin, classes.textField)}
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
              className={clsx(classes.margin, classes.textField)}
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
              endIcon={<SendIcon />}
              fullWidth
              type="submit"
            >
              Sign Up
            </Button>
          </form>
          <p className={classes.p}>
            Already have an account?
            <Link href="/login" className={classes.linkLogIn}>
              Log In!
            </Link>
          </p>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

SignUp.propTypes = {
  authenticityToken: PropTypes.string.isRequired,
  errors_exist: PropTypes.bool,
  errors: PropTypes.array,
  user: PropTypes.object,
  first_name_errors: PropTypes.bool,
  last_name_errors: PropTypes.bool,
  email_errors: PropTypes.bool,
  password_errors: PropTypes.bool,
  password_confirmation_errors: PropTypes.bool,
};
