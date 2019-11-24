import React from "react"
import PropTypes from "prop-types"
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    backgroundColor: '#ede7f6',
    padding: theme.spacing(4, 1),
  },
  amTitle: {
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
  enTitle: {
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 3,
    marginTop: theme.spacing(2),
  },
}));

export default function Banner(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Paper className={classes.root} elevation={0}>
        <Typography variant="h4" component="h1" className={classes.amTitle} noWrap>
          ሐመረ ኖህ ኪዳነ ምህረት የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን
        </Typography>
        <Typography variant="h4" component="h1" className={classes.enTitle} noWrap>
          Hamere Noah Kidane Mihret Ethiopian Orthodox Tewahedo Church
        </Typography>
      </Paper>
    </Container>
  );
}
