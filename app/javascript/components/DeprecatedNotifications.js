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

const useStyles = makeStyles(theme => ({
  removeKeyDisplay: {
    display: 'none',
  },
}));

function NotificationsWrapper(props) {
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

NotificationsWrapper.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
};

export default function DeprecatedNotifications(props) {
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
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      action={(key) => (
        <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose(key)}>
          <CloseIcon />
        </IconButton>
      )}
    >
      {props.notifications.map((notif, key) =>
        <NotificationsWrapper
          key={key}
          variant={notif[0]}
          message={notif[1]}
        />
      )}
    </SnackbarProvider>
  );
}

DeprecatedNotifications.propTypes = {
  notifications: PropTypes.array.isRequired,
};
