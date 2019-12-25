import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({

}));

export default function Template(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
    </React.Fragment>
  );
}

Template.propTypes = {
  template: PropTypes.bool,
};
