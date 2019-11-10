import React from "react"
import PropTypes from "prop-types"
import clsx from 'clsx'
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import SettingsIcon from '@material-ui/icons/Settings'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import GroupIcon from '@material-ui/icons/Group'
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles(theme => ({
  sideList: {
    width: 250,
    fontSize: 20,
    backgroundColor: '#F4F5F9',
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
    backgroundColor: '#F4F5F9',
  },
  sideListButton: {
    width: 300,
    fontSize: 14,
  },
  sideListLastItem: {
    marginBottom: 150,
  },
  sideListBackgroundColor: {
    backgroundColor: '#F4F5F9',
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
  avatarDropdown: {
    backgroundColor: '#F4F5F9',
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: '#F4F5F9',
    },
  },
  avatar: {
    // margin: 10,
  },
  bigAvatar: {
    // margin: 10,
    width: 60,
    height: 60,
  },
  profilePic: {
    padding: theme.spacing(2),
  },
  profilePicName: {
    marginLeft: theme.spacing(2),
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #D3D4D5',
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
    '& .MuiListItemIcon-root': {
      color: '#212121',
    },
    '& .MuiListItemText-primary': {
      color: '#212121',
      lineHeight: 3,
      textTransform: 'uppercase',
      fontWeight: 600,
      fontSize: 14,
      fontFamily: 'Source Sans Pro',
    },
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: -1,
      left: -1,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid #44b700',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
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

  const handleClick2 = event => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const preventDefault = event => event.preventDefault();

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const loggedInShop = exists => {
    if (exists) {
      return (
        <StyledMenuItem href="https://store.kidanemihret.org/" component="a" target="_blank">
          <ListItemIcon>
            <StoreTwoToneIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Shop" />
        </StyledMenuItem>
      );
    } else {
      return (
        <StyledMenuItem href="https://store.kidanemihret.org/" component="a" target="_blank" className={classes.sideListLastItem}>
          <ListItemIcon>
            <StoreTwoToneIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Shop" />
        </StyledMenuItem>
      );
    }
  }

  const loggedInLinks = exists => {
    if (exists) {
      return (
        <div>
          <StyledMenuItem href="/users" component="a">
            <ListItemIcon>
              <GroupIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="All Users" />
          </StyledMenuItem>
          <StyledMenuItem href={props.settings_path} component="a">
            <ListItemIcon>
              <SettingsIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </StyledMenuItem>
          <StyledMenuItem href={props.profile_path} component="a" className={clsx(classes.sideListLastItem, classes.profilePic)}>
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot"
            >
              <Avatar alt={props.first_name} src={props.gravatar} />
            </StyledBadge>
            <ListItemText primary={props.full_name} className={classes.profilePicName} />
          </StyledMenuItem>
        </div>
      );
    }
  }

  const logInOut = exists => {
    if (exists) {
      return (
        <AppBar position="fixed" color="primary" className={classes.sideListAppBar}>
          <Toolbar className={classes.sideListBackgroundColor}>
            <Button
              variant="contained"
              color="primary"
              className={classes.sideListButton}
              startIcon={<LockIcon />}
              component="a"
              href="/logout"
              data-method="delete"
            >
              Log Out
            </Button>
          </Toolbar>
        </AppBar>
      );
    } else {
      return (
        <AppBar position="fixed" color="primary" className={classes.sideListAppBar}>
          <Toolbar className={classes.sideListBackgroundColor}>
            <Button
              variant="contained"
              color="primary"
              className={classes.sideListButton}
              startIcon={<LockOpenIcon />}
              component="a"
              href="/login"
            >
              Log In
            </Button>
          </Toolbar>
        </AppBar>
      );
    }
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
        {loggedInShop(props.exists)}
        {loggedInLinks(props.exists)}
      </List>
      {logInOut(props.exists)}
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
              endIcon={<ExpandMoreIcon />}
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
              <StyledMenuItem key="placeholder" style={{display: "none"}}></StyledMenuItem>
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
              color="primary"
              className={classes.menuLogIn}
              startIcon={<StoreTwoToneIcon />}
              component="a"
              href="https://store.kidanemihret.org/"
              target="_blank"
            >
              Shop
            </Button>
          </li>
          {props.exists ? (
            <li>
              <Button
                className={classes.avatarDropdown}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick2}
              >
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant="dot"
                >
                  <Avatar alt={props.first_name} src={props.gravatar} />
                </StyledBadge>
              </Button>
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
              >
                <StyledMenuItem key="placeholder" style={{display: "none"}}></StyledMenuItem>
                <StyledMenuItem href={props.profile_path} component="a">
                  <ListItemIcon>
                    <PersonOutlineIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="View Profile" />
                </StyledMenuItem>
                <StyledMenuItem href="/users" component="a">
                  <ListItemIcon>
                    <GroupIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="All Users" />
                </StyledMenuItem>
                <StyledMenuItem href={props.settings_path} component="a">
                  <ListItemIcon>
                    <SettingsIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </StyledMenuItem>
                <Divider />
                <StyledMenuItem href="/logout" component="a" data-method="delete">
                  <ListItemIcon>
                    <LockIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Log out" />
                </StyledMenuItem>
              </StyledMenu>
            </li>
          ) : (
            <li>
              <Button
                variant="contained"
                color="primary"
                className={classes.menuLogIn}
                startIcon={<LockOpenIcon />}
                component="a"
                href="/login"
              >
                Log In
              </Button>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

Header.propTypes = {
  first_name: PropTypes.string,
  full_name: PropTypes.string,
  email: PropTypes.string,
  gravatar: PropTypes.string,
  profile_path: PropTypes.string,
  settings_path: PropTypes.string,
  exists: PropTypes.bool.isRequired,
};
