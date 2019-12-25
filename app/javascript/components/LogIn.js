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
    backgroundColor: 'transparent',
    marginTop: theme.spacing(10),
  },
  margin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  form: {
    flexWrap: 'wrap',
  },
  checkbox: {
    flex: 1,
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
      <Paper elevation={0} className={classes.root}>
        <Typography variant="h2" component="h1" className={classes.title}>
          Log In
        </Typography>
        <form
          autoComplete="off"
          action="/login"
          acceptCharset="UTF-8"
          method="post"
          className={classes.form}
        >
          <input name="utf8" type="hidden" value="&#x2713;" />
          <input type='hidden' name="authenticity_token" value={props.authenticityToken} />
          <TextField
            id="outlined-email"
            label="Email"
            name="session[email]"
            placeholder="kidanemihret@gmail.com"
            margin="normal"
            variant="outlined"
            fullWidth
            className={classes.margin}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            name="session[password]"
            onChange={handleChange('password')}
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>,
            }}
            className={classes.margin}
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                value="checked"
                color="primary"
              />
            }
            label="Remember me"
            name="session[remember_me]"
            className={clsx(classes.margin, classes.checkbox)}
          />
          <Link href="/password_resets/new">
            Forgot password?
          </Link>
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            fullWidth
            type="submit"
            className={classes.margin}
          >
            Log In
          </Button>
        </form>
        <p>
          Don't have an account?
          <Link href="/signup">
            Sign up now!
          </Link>
        </p>
      </Paper>
    </Container>
  );
}