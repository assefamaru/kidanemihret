import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const heroStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    height: 600,
    backgroundColor: '#5e35b1',
  },
}));

function Hero(props) {
  const classes = heroStyles();

  return (
    <div className={classes.root} />
  );
}

export default function Home(props) {
  return (
    <React.Fragment>
      {Hero()}
    </React.Fragment>
  );
}

Home.propTypes = {};
