import React from "react"
import PropTypes from "prop-types"
import clsx from 'clsx'
import { fade, makeStyles, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import StoreTwoToneIcon from '@material-ui/icons/StoreTwoTone'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import GroupIcon from '@material-ui/icons/Group'
import SettingsIcon from '@material-ui/icons/Settings'
import LockIcon from '@material-ui/icons/Lock'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import EventAvailableTwoToneIcon from '@material-ui/icons/EventAvailableTwoTone'
import BookOutlinedIcon from '@material-ui/icons/BookOutlined'
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined'
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone'
import MicNoneTwoToneIcon from '@material-ui/icons/MicNoneTwoTone'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone'
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone'
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined'
import RoomTwoToneIcon from '@material-ui/icons/RoomTwoTone'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  sidebar: {
    width: 230,
    backgroundColor: '#FFF',
  },
  sidebarAppbar: {
    top: 'auto',
    left: 0,
    bottom: 0,
    padding: 0,
    backgroundColor: '#FFF',
  },
  sidebarButton: {
    width: 200,
    margin: 15,
    fontSize: 14,
  },
  appbar: {
    color: '#3D3D3D',
    backgroundColor: '#F4F5F9',
    borderBottom: '1px solid #E7E9F2',
  },
  title: {
    flexGrow: 1,
  },
  siteName: {
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: 15,
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    margin: theme.spacing(0, 3),
    '&:hover': {
      textDecoration: 'none',
    },
  },
  headerLink: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 600,
    fontFamily: 'Source Sans Pro',
    margin: theme.spacing(0, 2),
    '&:hover': {
      textDecoration: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  headerButton: {
    fontSize: 14,
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  shopButton: {
    margin: theme.spacing(0, 2),
  },
  noHover: {
    '&:hover': {
      backgroundColor: "#F4F5F9",
    },
  },
  noDisplay: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
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

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [state, setState] = React.useState({ left: false, });

  const handleClick1 = event => {
    setAnchorEl1(event.currentTarget);
  }

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleClick2 = event => {
    setAnchorEl2(event.currentTarget);
  }

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const toggleSidebar = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sidebarLinks = list => {
    return (
      list.map(function(item) {
        return (
          <StyledMenuItem href={item.url} key={item.text} component="a">
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </StyledMenuItem>
        );
      })
    );
  }

  const sidebarLogInOut = isLoggedIn => {
    return (
      <div>
        <AppBar position="fixed" color="primary" className={clsx(classes.sidebar, classes.sidebarAppbar)}>
          <Toolbar className={clsx(classes.sidebar, classes.sidebarAppbar)}>
            <Button
              variant="contained"
              color="primary"
              startIcon={isLoggedIn ? <LockIcon /> : <LockOpenIcon />}
              component="a"
              href={isLoggedIn ? "/logout" : "/login"}
              data-method={isLoggedIn ? "delete" : null}
              className={classes.sidebarButton}
            >
              <div>{isLoggedIn ? "Log Out" : "Log In"}</div>
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Toolbar />
      </div>
    );
  }

  const headerLinks = list => {
    return (
      list.map(function(item) {
        return (
          <Link href={item.url} key={item.name} className={classes.headerLink} color="inherit">
            {item.name}
          </Link>
        );
      })
    );
  }

  const headerDropDownMenu = (links, type) => {
    return (
      <StyledMenu
        id="customized-menu"
        anchorEl={type == 1 ? anchorEl1 : anchorEl2}
        keepMounted
        open={type == 1 ? Boolean(anchorEl1) : Boolean(anchorEl2)}
        onClose={type == 1 ? handleClose1 : handleClose2}
      >
        <StyledMenuItem key="placeholder" style={{display: "none"}}></StyledMenuItem>
        {links.map(function(link) {
          return (
            <StyledMenuItem href={link.url} key={link.text} component="a"  data-method={link.method}>
              <ListItemIcon>
                {link.icon}
              </ListItemIcon>
              <ListItemText primary={link.text} />
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    );
  }

  const headerLogInOut = (isLoggedIn, loggedInUser) => {
    if (isLoggedIn) {
      return (
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick2}
            className={classes.noDisplay}
          >
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot"
            >
              <Avatar alt={props.loggedInUser.firstName} src={props.loggedInUser.gravatar} />
            </StyledBadge>
          </Button>
          {headerDropDownMenu([
            {url: props.loggedInUser.profile, icon: <PersonOutlineIcon />, text: "View Profile", method: null},
            {url: "/users", icon: <GroupIcon />, text: "All users", method: null},
            {url: props.loggedInUser.settings, icon: <SettingsIcon />, text: "Settings", method: null},
            {url: "/logout", icon: <LockIcon />, text: "Log out", method: "delete"}
          ], 2)}
        </div>
      );
    } else {
      return (
        <Button
          variant="contained"
          color="primary"
          className={classes.headerButton}
          startIcon={<LockOpenIcon />}
          component="a"
          href="/login"
        >
          Log In
        </Button>
      );
    }
  }

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appbar} elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleSidebar('left', true)}
            >
              <MenuRoundedIcon />
            </IconButton>
            <Drawer open={state.left} onClose={toggleSidebar('left', false)}>
              <div
                role="presentation"
                onClick={toggleSidebar('left', false)}
                onKeyDown={toggleSidebar('left', false)}
                className={classes.sidebar}
              >
                {sidebarLinks([
                  {url: "/", icon: <HomeTwoToneIcon />, text: "Home"},
                  {url: "/about", icon: <InfoTwoToneIcon />, text: "About"},
                  {url: "/services", icon: <OfflineBoltOutlinedIcon />, text: "Services"},
                  {url: "/contact", icon: <RoomTwoToneIcon />, text: "Contact"},
                  {url: "/faq", icon: <HelpOutlineOutlinedIcon />, text: "FAQ"},
                  {url: "/calendar", icon: <EventAvailableTwoToneIcon />, text: "Calendar"},
                  {url: "/bible", icon: <BookOutlinedIcon />, text: "Holy Bible"},
                  {url: "/donate", icon: <AttachMoneyOutlinedIcon />, text: "Pay Tithes/ Donate"},
                  {url: "/docs", icon: <FileCopyOutlinedIcon />, text: "Documents/ Forms"},
                  {url: "", icon: <MenuBookTwoToneIcon />, text: "Teachings"},
                  {url: "", icon: <MicNoneTwoToneIcon />, text: "Media"},
                  {url: "", icon: <StoreTwoToneIcon />, text: "Shop"},
                ])}
                {props.isLoggedIn ? sidebarLinks([
                  {url: "/users", icon: <GroupIcon />, text: "All Users"},
                  {url: props.loggedInUser.settings, icon: <SettingsIcon />, text: "Settings"},
                  {url: props.loggedInUser.profile, icon: <PersonOutlineIcon />, text: "View Profile"},
                ]) : null}
                {sidebarLogInOut(props.isLoggedIn)}
              </div>
            </Drawer>

            <Typography className={classes.title}>
              <Link href="/" className={classes.siteName} color="inherit">
                Kidane Mihret EOTC
              </Link>
            </Typography>

            <Typography>
              {headerLinks([
                {url:"/",         name: "Home"},
                {url:"/about",    name: "About"},
                {url:"/services", name: "Services"},
                {url:"/contact",  name: "Contact"},
                {url:"/faq",      name: "FAQ"},
              ])}
            </Typography>

            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              onClick={handleClick1}
              component="a"
              className={clsx(classes.headerButton, classes.noHover)}
              color="inherit"
              endIcon={<ExpandMoreIcon />}
            >
              Resources
            </Button>
            {headerDropDownMenu([
              {url: "/calendar", icon: <EventAvailableTwoToneIcon />, text: "Calendar", method: null},
              {url: "/bible", icon: <BookOutlinedIcon />, text: "Holy Bible", method: null},
              {url: "/donate", icon: <AttachMoneyOutlinedIcon />, text: "Pay Tithes/ Donate", method: null},
              {url: "/docs", icon: <FileCopyOutlinedIcon />, text: "Documents/ Forms", method: null},
              {url: "", icon: <MenuBookTwoToneIcon />, text: "Teachings", method: null},
              {url: "", icon: <MicNoneTwoToneIcon />, text: "Media", method: null}
            ], 1)}

            <Button
              variant="outlined"
              color="primary"
              className={clsx(classes.headerButton, classes.shopButton)}
              startIcon={<StoreTwoToneIcon />}
              component="a"
              href=""
            >
              Shop
            </Button>

            {headerLogInOut(props.isLoggedIn, props.loggedInUser)}
          </Toolbar>
        </AppBar>
        <Toolbar />
      </div>
    </React.Fragment>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  loggedInUser: PropTypes.object,
};
