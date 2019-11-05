import React from "react"
import PropTypes from "prop-types"
import { fade, makeStyles, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone'
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone'
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined'
import RoomTwoToneIcon from '@material-ui/icons/RoomTwoTone'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone'
import MicNoneTwoToneIcon from '@material-ui/icons/MicNoneTwoTone'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import EventAvailableTwoToneIcon from '@material-ui/icons/EventAvailableTwoTone'
import BookOutlinedIcon from '@material-ui/icons/BookOutlined'
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import StoreTwoToneIcon from '@material-ui/icons/StoreTwoTone'

const useStyles = makeStyles(theme => ({
  sideList: {
    width: 250,
    fontSize: 20,
  },
  text: {
    fontSize: 20,
  },
  sideListAppBar: {
    top: 'auto',
    bottom: 0,
    width: 250,
    left: 0,
    padding: 0,
  },
  sideListButton: {
    width: 300,
    fontSize: 14,
  },
  sideListLastItem: {
    marginBottom: 60,
  },
  menuLogIn: {
    fontSize: 14,
    marginRight: theme.spacing(2),
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
  },
  link: {
    margin: theme.spacing(1),
  },
  resLink: {
    backgroundColor: '#F4F5F9',
    fontSize: 14,
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    color: '#3D3D3D',
    "&:hover": {
      backgroundColor: '#F4F5F9',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.secondary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const preventDefault = event => event.preventDefault();

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.sideList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <StyledMenuItem href="/" component="a">
          <ListItemIcon>
            <HomeTwoToneIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </StyledMenuItem>
        <StyledMenuItem href="/about" component="a">
          <ListItemIcon>
            <InfoTwoToneIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="About" />
        </StyledMenuItem>
        <StyledMenuItem href="/services" component="a">
          <ListItemIcon>
            <OfflineBoltOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </StyledMenuItem>
        <StyledMenuItem href="/contact" component="a">
          <ListItemIcon>
            <RoomTwoToneIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </StyledMenuItem>
        <StyledMenuItem href="/faq" component="a">
          <ListItemIcon>
            <HelpOutlineOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="FAQ" />
        </StyledMenuItem>
      </List>
      <Divider />
      <List>
        <StyledMenuItem href="/calendar" component="a">
          <ListItemIcon>
            <EventAvailableTwoToneIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </StyledMenuItem>
        <StyledMenuItem href="/bible" component="a">
          <ListItemIcon>
            <BookOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Holy Bible" />
        </StyledMenuItem>
        <StyledMenuItem href="/donate" component="a">
          <ListItemIcon>
            <AttachMoneyOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Pay Tithes/ Donate" />
        </StyledMenuItem>
        <StyledMenuItem href="/docs" component="a">
          <ListItemIcon>
            <FileCopyOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Documents/ Forms" />
        </StyledMenuItem>
        <StyledMenuItem href="#" component="a" onClick={preventDefault}>
          <ListItemIcon>
            <MenuBookTwoToneIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Teachings" />
        </StyledMenuItem>
        <StyledMenuItem href="#" component="a" onClick={preventDefault}>
          <ListItemIcon>
            <MicNoneTwoToneIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Media" />
        </StyledMenuItem>
      </List>
      <Divider />
      <List className={classes.sideListLastItem}>
        <StyledMenuItem href="https://store.kidanemihret.org/" component="a" target="_blank">
          <ListItemIcon>
            <StoreTwoToneIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Shop" />
        </StyledMenuItem>
      </List>
      <AppBar position="fixed" color="primary" className={classes.sideListAppBar}>
        <Toolbar>
          <Button
            variant="contained"
            color="secondary"
            className={classes.sideListButton}
            startIcon={<LockOpenIcon />}
            component="a"
            href="/login"
          >
            Log In
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );

  return (
    <header id="header">
      <div id="header-left" className="header-child">
        <ul>
          <li>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer('left', true)}
            >
              <MenuRoundedIcon fontSize="large" />
            </IconButton>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
              {sideList('left')}
            </Drawer>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
              {sideList('right')}
            </Drawer>
          </li>
          <li>
            <Button component="a" href="/">Kidane Mihret EOTC</Button>
          </li>
        </ul>
      </div>
      <div id="header-right" className="header-child">
        <ul>
          <li><a className="header-right-link" href="/">Home</a></li>
          <li><a className="header-right-link" href="/about">About</a></li>
          <li><a className="header-right-link" href="/services">Services</a></li>
          <li><a className="header-right-link" href="/contact">Contact</a></li>
          <li>
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              onClick={handleClick}
              component="a"
              className={classes.resLink}
            >
              Resources
            </Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem href="/calendar" component="a">
                <ListItemIcon>
                  <EventAvailableTwoToneIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Calendar" />
              </StyledMenuItem>
              <StyledMenuItem href="/bible" component="a">
                <ListItemIcon>
                  <BookOutlinedIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Holy Bible" />
              </StyledMenuItem>
              <StyledMenuItem href="/donate" component="a">
                <ListItemIcon>
                  <AttachMoneyOutlinedIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Pay Tithes/ Donate" />
              </StyledMenuItem>
              <StyledMenuItem href="/docs" component="a">
                <ListItemIcon>
                  <FileCopyOutlinedIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Documents/ Forms" />
              </StyledMenuItem>
              <StyledMenuItem href="#" component="a" onClick={preventDefault}>
                <ListItemIcon>
                  <MenuBookTwoToneIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Teachings" />
              </StyledMenuItem>
              <StyledMenuItem href="#" component="a" onClick={preventDefault}>
                <ListItemIcon>
                  <MicNoneTwoToneIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Media" />
              </StyledMenuItem>
            </StyledMenu>
          </li>
          <li><a className="header-right-link" href="/faq">FAQ</a></li>
          <li>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.menuLogIn}
              startIcon={<StoreTwoToneIcon />}
              component="a"
              href="https://store.kidanemihret.org/"
              target="_blank"
            >
              Shop
            </Button>
          </li>
          <li>
            <Button
              variant="contained"
              color="secondary"
              className={classes.menuLogIn}
              startIcon={<LockOpenIcon />}
              component="a"
              href="/login"
            >
              Log In
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}

Header.propTypes = {};
