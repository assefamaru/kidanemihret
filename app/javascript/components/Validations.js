import React from "react"
import PropTypes from "prop-types"
import { SnackbarProvider, useSnackbar } from 'notistack'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'

const useStyles = makeStyles(theme => ({
  message: {
    fontSize: 15,
  },
  removeKeyDisplay: {
    display: 'none',
  },
}));

function ValidationsWrapper(props) {
  const classes = useStyles();
  const { message, variant, ...other } = props;
  const { enqueueSnackbar } = useSnackbar();

  return (
    <React.Fragment>
      <div className={classes.removeKeyDisplay}>
        {enqueueSnackbar(message, { variant })}
      </div>
    </React.Fragment>
  );
}

ValidationsWrapper.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default function Validations(props) {
  const classes = useStyles();
  const notistackRef = React.createRef();
  const handleClose = key => () => {
    notistackRef.current.closeSnackbar(key);
  }

  return (
    <SnackbarProvider
      maxSnack={5}
      ref={notistackRef}
      autoHideDuration={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      classes={{
        variantError: classes.message,
      }}
      action={(key) => (
        <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose(key)}>
          <CloseIcon />
        </IconButton>
      )}
    >
      {props.errors.map((error, key) =>
        <ValidationsWrapper
          key={key}
          variant='error'
          message={error}
        />
      )}
    </SnackbarProvider>
  );
}

Validations.propTypes = {
  errors: PropTypes.array.isRequired,
};
