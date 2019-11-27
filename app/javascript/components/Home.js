import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStylesHero = makeStyles(theme => ({

}));

function Hero(props) {
  const classes = useStylesHero();

  return (
    <React.Fragment>
    </React.Fragment>
  );
}

export default function Home(props) {
  return (
    <React.Fragment>
      {Hero()}
    </React.Fragment>
  );
}
