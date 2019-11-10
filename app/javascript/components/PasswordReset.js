import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

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
  submit: {
    fontSize: 15,
    margin: theme.spacing(3, 1),
    height: 50,
  },
}));

export default function PasswordReset(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Paper className={classes.root} elevation={0}>
        <Typography variant="h1" component="h1" className={classes.h1}>
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
  );
}

PasswordReset.propTypes = {
  authenticityToken: PropTypes.string.isRequired,
};
