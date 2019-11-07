import React from "react"
import PropTypes from "prop-types"
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
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
import Checkbox from '@material-ui/core/Checkbox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 1),
    backgroundColor: '#F4F5F9',
    marginTop: 50,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize: 20,
  },
  resize: {
    fontSize: 15,
  },
  h1: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(3),
    color: '#3D3D3D',
  },
  p: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(3),
    color: '#3D3D3D',
  },
  margin: {
    margin: theme.spacing(1),
  },
  checkbox: {
    color: '#3D3D3D',
    flex: 1,
    '& .MuiCheckbox-root': {
      marginLeft: -10,
    },
    '& .MuiFormControlLabel-label': {
      fontSize: 15,
      color: '#3D3D3D',
      marginTop: theme.spacing(0.3),
    },
  },
  forgot: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2.5),
    color: '#3D3D3D',
    textDecoration: 'underline',
    fontSize: 15,
  },
  submit: {
    fontSize: 15,
    margin: theme.spacing(2, 1),
    height: 50,
  },
  linkSignup: {
    marginLeft: 5,
    color: '#3D3D3D',
    textDecoration: 'underline',
  },
}));

export default function LogIn(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="sm">
      <Paper className={classes.root} elevation={0}>
        <Typography variant="h1" component="h1" className={classes.h1}>
          Log In
        </Typography>
        <form
          className={classes.container}
          autoComplete="off"
          action="/login"
          acceptCharset="UTF-8"
          method="post"
        >
          <input name="utf8" type="hidden" value="&#x2713;" />
          <input type='hidden' name="authenticity_token" value={props.authenticityToken} />
          <TextField
            id="outlined-email"
            className={classes.textField}
            label="Email"
            name="session[email]"
            placeholder="abebe@gmail.com"
            margin="normal"
            variant="outlined"
            fullWidth
            InputProps={{
              classes: {
                root: classes.resize,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.resize,
              },
            }}
          />
          <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel className={classes.resize} htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              className={classes.resize}
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              name="session[password]"
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                checkedIcon={<CheckBoxIcon fontSize="large" />}
                value="checked"
                color="primary"
              />
            }
            label="Remember me"
            name="session[remember_me]"
            className={clsx(classes.checkbox, classes.margin)}
          />
          <Link href="/password_resets/new" className={classes.forgot}>
            Forgot password?
          </Link>
          <Button
            variant="contained"
            color="primary"
            className={clsx(classes.button, classes.submit)}
            endIcon={<SendIcon />}
            fullWidth
            type="submit"
          >
            Log In
          </Button>
        </form>
        <p className={classes.margin}>
          Don't have an account?
          <Link href="/signup" className={classes.linkSignup}>
            Sign up now!
          </Link>
        </p>
      </Paper>
    </Container>
  );
}
