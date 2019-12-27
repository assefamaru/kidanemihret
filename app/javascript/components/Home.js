import React from "react"
import PropTypes from "prop-types"
import clsx from 'clsx'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const heroStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    backgroundColor: '#673ab7',
    background: 'radial-gradient(at bottom right, #673ab7, #4a148c)',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  title: {
    fontFamily: 'sans-serif-black',
    color: '#ede7f6',
    fontSize: 70,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      fontSize: 40,
    },
  },
  text: {
    fontFamily: 'sans-serif-regular',
    fontSize: 18,
    letterSpacing: 0,
    color: '#b39ddb',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      fontSize: 17,
    },
  },
  button: {
    fontFamily: 'sans-serif-book',
    letterSpacing: 0,
    textTransform: 'none',
    fontSize: 18,
    marginTop: theme.spacing(5),
  },
  signUpButton: {
    marginRight: theme.spacing(2),
  },
  learnMoreButton: {
    color: '#000',
    border: '1px solid #000',
  },
  crossGrid: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  img: {
    maxWidth: 300,
    height: 'auto',
    marginTop: 120,
    marginLeft: 100,
  },
}));

function Hero(props) {
  const classes = heroStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h2" component="h1" className={classes.title}>
              Hamere Noah Kidane Mihret
            </Typography>
            <Typography paragraph className={classes.text}>
              Hamere Noah Kidane Mihret Ethiopian Orthodox Tewahedo Church serves the Orthodox Christian community of Kitchener-Waterloo in Ontario, Canada.
            </Typography>
            <Typography paragraph className={classes.text}>
              This website provides information about the essential services the church provides to the community. It also contains great resources about our faith and Ethiopian tradition.
            </Typography>
            <Typography paragraph className={classes.text}>
              We welcome you in worship in the name of the Father, the Son, and the Holy Spirit, One God, Amen.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              className={clsx(classes.button, classes.signUpButton)}
              component="a"
              href="/signup"
            >
              Register now
            </Button>
            <Button
              variant="outlined"
              className={clsx(classes.button, classes.learnMoreButton)}
              component="a"
              href="/about"
            >
              Learn more about us
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className={classes.crossGrid}>
            <img src={props.crossImage} alt="EOTC cross" className={classes.img}  />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default function Home(props) {
  return (
    <React.Fragment>
      {Hero(props)}
    </React.Fragment>
  );
}

Home.propTypes = {
  crossImage: PropTypes.string,
};

// ===================================================
const otherTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#4527a0',
    },
  },
});

function Other(props) {

  return (
    <ThemeProvider theme={otherTheme}>
    </ThemeProvider>
  );
}
// ===================================================
