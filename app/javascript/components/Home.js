import React from "react"
import PropTypes from "prop-types"
import clsx from 'clsx'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const heroTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#4527a0',
    },
  },
});

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
      fontSize: 16,
    },
  },
  signUpButton: {
    fontFamily: 'sans-serif-book',
    letterSpacing: 0,
    textTransform: 'none',
    fontSize: 18,
    marginTop: theme.spacing(5),
  },
}));

function Hero(props) {
  const classes = heroStyles();

  return (
    <ThemeProvider theme={heroTheme}>
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
                className={classes.signUpButton}
                component="a"
                href="/signup"
              >
                Register now to create an account.
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <img src={props.crossImage} alt="EOTC cross"  />
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
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
