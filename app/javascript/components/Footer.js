import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    height: 400,
    borderTop: '1px solid #E7E9F2',
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.root}>

    </footer>
  );
}
