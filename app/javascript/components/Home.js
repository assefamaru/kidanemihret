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

function Old(props) {

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4}>
          <div>what</div>
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Typography variant="h1">
            Kidane Mihret
          </Typography>
          <Typography variant="h6">
            Hamere Noah Kidane Mihret Ethiopian Orthodox Tewahedo Church serves the Orthodox Christian community of Kitchener-Waterloo in Ontario, Canada.
          </Typography>
          <Typography variant="h6">
            This website provides information about the essential services the church provides to the community. It also contains great resources about our faith and Ethiopian tradition.
          </Typography>
          <Typography variant="h6">
            We welcome you in worship in the name of the Father, the Son, and the Holy Spirit, One God, Amen.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

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
