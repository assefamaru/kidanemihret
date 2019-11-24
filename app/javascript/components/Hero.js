import React from "react"
import PropTypes from "prop-types"
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 600,
    backgroundColor: '#673ab7',
  },
}));

export default function Hero(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">

      </Container>
    </div>
  );
}
