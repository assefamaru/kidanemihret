import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    height: 700,
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 500,
    backgroundColor: '#f7f7f7',
    borderRadius: 0,
  },
  grid: {
    padding: theme.spacing(0, 3),
  },
}));

const heroStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(20, 3),
  },
  img: {
    width: '80vw',
    maxWidth: 250,
    height: 'auto',
    margin: 0,
    padding: 0,
  },
  title: {
    // fontFamily: 'Playfair Display',
    fontFamily: 'sans-serif-black',
    // fontWeight: 900,
    fontSize: 50,
    color: theme.palette.text.primary,
  },
  subtitle: {
    marginTop: theme.spacing(3),
    fontFamily: 'sans-serif-book',
    fontSize: 20,
  },
}));

function Hero(props) {
  const classes = heroStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4}>
          <div>what</div>
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Typography variant="h1" className={classes.title}>
            Kidane Mihret
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            Hamere Noah Kidane Mihret Ethiopian Orthodox Tewahedo Church serves the Orthodox Christian community of Kitchener-Waterloo in Ontario, Canada.
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            This website provides information about the essential services the church provides to the community. It also contains great resources about our faith and Ethiopian tradition.
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            We welcome you in worship in the name of the Father, the Son, and the Holy Spirit, One God, Amen.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

function QuickLinks(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.grid}>
      <Grid item xs={12} sm={12} md={4}>
        <Paper className={classes.paper} elevation={0}>xs=4</Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Paper className={classes.paper} elevation={0}>xs=4</Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Paper className={classes.paper} elevation={0}>xs=4</Paper>
      </Grid>
    </Grid>
  );
}

export default function Home(props) {
  const classes = useStyles();

  return (
    <React.Fragment>

    </React.Fragment>
  );
}
