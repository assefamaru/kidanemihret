import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    maxWidth: 700,
    margin: 'auto',
    padding: theme.spacing(5, 2.5),
  },
  img: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  title: {
    fontFamily: 'sans-serif-bold',
    fontWeight: 400,
    fontSize: 35,
    color: '#424242',
    marginTop: 30,
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
    },
  },
  caption: {
    fontFamily: 'sans-serif-book',
    color: '#757575',
    fontSize: 16,
    marginTop: 10,
    letterSpacing: 0,
    marginLeft: 3,
    marginBottom: 20,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 220,
    },
  },
  text: {
    fontFamily: 'serif-regular',
    fontSize: 22,
    color: '#212121',
    marginTop: 10,
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
    },
  },
  quotation: {
    fontFamily: 'serif-regular',
    fontStyle: 'italic',
    fontSize: 22,
    color: '#212121',
    marginTop: 10,
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
    },
  },
  quotationOrigin: {
    fontStyle: 'normal',
  },
}));

export default function About(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <img src={props.aboutImage} className={classes.img} />

        <Typography variant="h1" className={classes.title}>
          Brief History
        </Typography>
        <Typography className={classes.caption} noWrap>
          Last updated — { Date(document.lastModified) }
        </Typography>
        <Typography className={classes.text}>
          For the past { (new Date().getFullYear()) - 2001 } years, Hamere Noah Kidane Mihret Ethiopian Orthodox Tewahedo Church has been providing spiritual and communal services within the Kitchener—Waterloo region for Orthodox Tewahedo Christians. Because of the changes and growth that the church enjoys from time to time, it is now one of the most prominent Orthodox Tewahedo Churches in Southern Ontario.
        </Typography>
        <Typography className={classes.text}>
          In order for our church to improve in its ability to provide the spiritual and communal services it currently gives, with God's help, and with the Virgin's intercession, as well as the steadfast prayer and fasting of her clergy and church members, the church has acquired her own permanent place of worship, located at <a target="_blank" href="https://goo.gl/maps/QY1VrqWBim52">1677 Snyder's Rd E</a>.
        </Typography>

        <Typography variant="h1" className={classes.title}>
          The Formation
        </Typography>
        <Typography className={classes.text}>
          The church was founded in 2001 with the strength of a few faithful Christians. They gathered at 55 Brick Wood Dr., within St. Mark Church, every Sunday for worship. Because there wasn't any priest at the time, members came together to conduct prayers and learn from each other spiritually.
        </Typography>
        <Typography className={classes.text}>
          After much effort by members, an agreement was formed between our church and St. Mary's church in Toronto, that enabled priests to come every month or during holidays in order to conduct the holy mass for the christians within the region. Kidane Mihret got her own priest in 2005, after which members in the region were able to attend mass every week and get lots of other spiritual services. Because of the large growth of church members over the years, and the parallel growth of the clergy, so too has grown the many services that the church provides.
        </Typography>

        <Typography variant="h1" className={classes.title}>
          Church Administration
        </Typography>
        <Typography className={classes.text}>
          Kidane Mihret is administered under the Ethiopian Orthodox Tewahedo Church, Canada Hagere Sebket, by Sebeka Gubae. This Sebeka Gubae selects seven faithful members from among the mass every two years in order to form its council.
        </Typography>
        <Typography className={classes.text}>
          The main head of the church is the priest, and the priest is accountable to the Sebeka Gubae. The Sebeka Gubae executes spiritual and administrative tasks for the church. It also presents any cases that it wants decisions on to the mass so that there is a transparent engagement by every member while forming any important decisions for the church.
        </Typography>
        <Typography className={classes.quotation}>
          The God of heaven Himself will prosper us; therefore we His servants will arise and build.
          — <span className={classes.quotationOrigin}>Nehemiah 2:20</span>
        </Typography>
        <Typography className={classes.text}>
          Sebeka Gubae extends the invitation to anyone who would like to help build God's holy place in the Virgin's name.
        </Typography>
      </div>
    </React.Fragment>
  );
}

About.propTypes = {
  aboutImage: PropTypes.string,
};
