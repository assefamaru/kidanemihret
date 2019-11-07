import React from "react"
import PropTypes from "prop-types"
import { SnackbarProvider, useSnackbar } from 'notistack'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import WarningIcon from '@material-ui/icons/Warning'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'

function NotificationsWrapper(props) {
  const { message, variant, ...other } = props;
  const { enqueueSnackbar } = useSnackbar();

  return (
    <React.Fragment>
      {enqueueSnackbar(message, { variant })};
    </React.Fragment>
  );
}

NotificationsWrapper.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['success', 'error', 'warning', 'info', 'default']).isRequired,
};

const useStyles = makeStyles(theme => ({
  message: {
    fontSize: 14,
  },
}));

export default function Notifications(props) {
  const classes = useStyles();
  const notistackRef = React.createRef();
  const handleClose = key => () => {
    notistackRef.current.closeSnackbar(key);
  }

  return (
    <SnackbarProvider
      maxSnack={3}
      ref={notistackRef}
      autoHideDuration={null}
      classes={{
        variantSuccess: classes.message,
        variantError: classes.message,
        variantWarning: classes.message,
        variantInfo: classes.message,
      }}
      action={(key) => (
        <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose(key)}>
          <CloseIcon />
        </IconButton>
      )}
    >
      {props.notifications.map((flash, key) =>
        <NotificationsWrapper
          key={key}
          variant={flash[0]}
          message={flash[1]}
        />
      )}
    </SnackbarProvider>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
};
