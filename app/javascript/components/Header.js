import React from "react"
import PropTypes from "prop-types"
import clsx from 'clsx'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TranslateIcon from '@material-ui/icons/Translate'
import StoreIcon from '@material-ui/icons/Store'
import { Bell } from 'react-feather'
import { Home } from 'react-feather'
import { Info } from 'react-feather'
import { Flag } from 'react-feather'
import { Send } from 'react-feather'
import { Calendar } from 'react-feather'
import { Book } from 'react-feather'
import { DollarSign } from 'react-feather'
import { FileText } from 'react-feather'
import { Bookmark } from 'react-feather'
import { Mic } from 'react-feather'
import { HelpCircle } from 'react-feather'
import { ShoppingCart } from 'react-feather'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    color: '#212121',
    backgroundColor: '#FFFFFF',
    opacity: 0.95,
    fontFamily: 'sans-serif-book',
  },
  toolbar: {
    width: '100vw',
    maxWidth: 1100,
    margin: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
  },
  toolbarBottom: {
    minHeight: 30,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(3),
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    fontFamily: 'Playfair Display',
    fontSize: 25,
    '&:hover': {
      textDecoration: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
    },
  },
  hdrButton: {
    fontFamily: 'sans-serif-book',
    fontSize: 16,
    textTransform: 'none',
    color: '#424242',
    letterSpacing: 0,
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#212121',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  authButton: {
    fontFamily: 'sans-serif-book',
    fontSize: 16,
    textTransform: 'none',
    color: '#00bfa5',
    letterSpacing: 0,
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#008573',
    }
  },
  signupButton: {
    border: '1px solid #00bfa5',
    marginLeft: theme.spacing(1),
    '&:hover': {
      border: '1px solid #008573',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  avatarButton: {
    '&:hover, &:focus': {
      backgroundColor: '#FFFFFF',
    },
    '.mui-ripple-circle': {
      display: 'none',
    }
  },
  avatarMenuTitle: {
    fontFamily: 'sans-serif-book',
    fontSize: 14,
    outline: 'none',
  },
  avatarName: {
    fontFamily: 'sans-serif-medium',
    fontSize: 16,
  },
  avatarEmail: {
    fontFamily: 'sans-serif-book',
    fontSize: 16,
    color: '#616161',
  },
  customDivider: {
    border: '0.5px solid #f5f5f5',
    margin: theme.spacing(1, 0),
  },
  dropDownMenuLink: {
    padding: theme.spacing(1, 4),
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
  },
  dropDownMenuLinkText: {
    color: '#616161',
    fontFamily: 'sans-serif-book',
    fontSize: 15,
  },
  link: {
    color: '#424242',
    fontFamily: 'sans-serif-book',
    textTransform: 'none',
    fontSize: 16,
    letterSpacing: 0,
    marginRight: theme.spacing(3),
    '&:hover': {
      textDecoration: 'none',
      color: '#212121',
      backgroundColor: '#FFFFFF',
    },
  },
  sidebar: {
    width: 240,
    color: '#212121',
    backgroundColor: '#FFFFFF',
    fontFamily: 'sans-serif-book',
  },
  sidebarMenuButton: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(0.5),
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
  },
  sidebarMenuTitle: {
    marginTop: theme.spacing(2),
    position: 'absolute',
  },
  sidebarLink: {
    paddingLeft: theme.spacing(3),
  },
  sidebarLinkIcon: {

  },
  sidebarLinkText: {
    color: '#424242',
    fontFamily: 'sans-serif-book',
    textTransform: 'none',
    fontSize: 16,
    letterSpacing: 0,
  },
}));

const StyledMenu = withStyles({
  paper: {
    maxWidth: 220,
    border: '1px solid #e0e0e0',
    marginTop: 10,
    position: 'relative',
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

const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
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

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Header(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false, });
  const [anchorResourcesMenu, setAnchorResourcesMenu] = React.useState(null);
  const [anchorAvatarMenu, setAnchorAvatarMenu] = React.useState(null);

  const handleResourcesClick = event => {
    setAnchorResourcesMenu(event.currentTarget);
  }

  const handleResourcesClose = () => {
    setAnchorResourcesMenu(null);
  };

  const handleAvatarClick = event => {
    setAnchorAvatarMenu(event.currentTarget);
  }

  const handleAvatarClose = () => {
    setAnchorAvatarMenu(null);
  };

  const toggleSidebar = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const headerLinks = list => {
    return (
      list.map(function(item) {
        return (
          <Link href={item.url} key={item.name} className={classes.link} color="inherit">
            {item.name}
          </Link>
        );
      })
    );
  }

  const dropDownMenuItems = list => {
    return (
      list.map(function(item) {
        return (
          <MenuItem
            href={item.url}
            key={item.name}
            component="a"
            data-method={item.method}
            className={classes.dropDownMenuLink}
          >
            <Typography className={classes.dropDownMenuLinkText} noWrap>{item.name}</Typography>
          </MenuItem>
        );
      })
    );
  }

  const sidebarLinks = list => {
    return (
      list.map(function(item) {
        return (
          <ListItem href={item.url} key={item.name} className={classes.sidebarLink} component="a">
            <ListItemIcon className={classes.sidebarLinkIcon}>{item.icon}</ListItemIcon>
            <Typography className={classes.sidebarLinkText} noWrap>{item.name}</Typography>
          </ListItem>
        );
      })
    );
  }

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar} elevation={0}>
          <Toolbar className={classes.toolbar}>
            <IconButton className={classes.menuButton} onClick={toggleSidebar('left', true)} edge="start" aria-label="menu" color="inherit">
              <MenuIcon />
            </IconButton>

            <Link href="/" className={classes.title} color="inherit">
              Kidanemihret
            </Link>

            <Drawer open={state.left} onClose={toggleSidebar('left', false)}>
              <div
                role="presentation"
                onClick={toggleSidebar('left', false)}
                onKeyDown={toggleSidebar('left', false)}
                className={classes.sidebar}
              >
                <div className={classes.grow} >
                  <IconButton onClick={toggleSidebar('left', false)} className={classes.sidebarMenuButton} edge="start" aria-label="menu" color="inherit">
                    <MenuIcon />
                  </IconButton>
                  <Link href="/" className={clsx(classes.title, classes.sidebarMenuTitle)} color="inherit">
                    Kidanemihret
                  </Link>
                </div>
                {sidebarLinks([
                  {url: "/",          icon: <Home size={18} />,        name: "Home"},
                  {url: "/about",     icon: <Info size={18} />,        name: "About"},
                  {url: "/services",  icon: <Flag size={18} />,        name: "Services"},
                  {url: "/contact",   icon: <Send size={18} />,        name: "Contact"},
                ])}
                <Divider className={classes.customDivider} />
                {sidebarLinks([
                  {url: "/calendar",  icon: <Calendar size={18} />,    name: "Calendar"},
                  {url: "/bible",     icon: <Book size={18} />,        name: "Holy Bible"},
                  {url: "/donate",    icon: <DollarSign size={18} />,  name: "Pay Tithes/ Donate"},
                  {url: "/documents", icon: <FileText size={18} />,    name: "Documents/ Forms"},
                  {url: "#",          icon: <Bookmark size={18} />,    name: "Teachings"},
                  {url: "#",          icon: <Mic size={18} />,         name: "Media"},
                ])}
                <Divider className={classes.customDivider} />
                {sidebarLinks([
                  {url: "/faq",       icon: <HelpCircle size={18} />,   name: "FAQ"},
                  {url: "#",          icon: <ShoppingCart size={18} />, name: "Shop"},
                ])}
              </div>
            </Drawer>

            <div className={classes.grow} />

            <Button
              href="/donate"
              component="a"
              variant="text"
              color="primary"
              className={classes.hdrButton}
              startIcon={<Bell size={16} />}
            >
              Pay tithes or donate
            </Button>

            {props.isLoggedIn ? (
              <React.Fragment>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleAvatarClick}
                  className={classes.avatarButton}
                >
                  <StyledBadge
                    overlap="circle"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                    variant="dot"
                  >
                    <Avatar alt={props.loggedInUser.firstName} src={props.loggedInUser.gravatar} />
                  </StyledBadge>
                </Button>
                <StyledMenu
                  anchorEl={anchorAvatarMenu}
                  open={Boolean(anchorAvatarMenu)}
                  onClose={handleAvatarClose}
                >
                  <ListItem className={classes.avatarMenuTitle}>
                    <ListItemAvatar>
                      <Badge overlap="circle">
                        <Avatar alt={props.loggedInUser.firstName} src={props.loggedInUser.gravatar} />
                      </Badge>
                    </ListItemAvatar>
                    <ListItemText
                      primary={<Typography className={classes.avatarName} noWrap>{props.loggedInUser.fullName}</Typography>}
                      secondary={<Typography className={classes.avatarEmail} noWrap>{props.loggedInUser.email}</Typography>}
                    />
                  </ListItem>
                  <Divider className={classes.customDivider} />
                  {dropDownMenuItems([
                    {url: '/#',     name: "Admins",    method: null},
                    {url: '#',      name: "Leaders",   method: null},
                  ])}
                  <Divider className={classes.customDivider} />
                  {dropDownMenuItems([
                    {url: props.loggedInUser.profile,  name: "Profile",   method: null},
                    {url: props.loggedInUser.settings, name: "Settings",  method: null},
                    {url: '/users',                    name: "All Users", method: null},
                    {url: '/logout',                   name: "Sign out",  method: "delete"},
                  ])}
                </StyledMenu>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Button
                  href="/login"
                  component="a"
                  variant="text"
                  color="primary"
                  className={classes.authButton}
                >
                  Log in
                </Button>
                <Button
                  href="/signup"
                  component="a"
                  variant="outlined"
                  color="primary"
                  className={clsx(classes.authButton, classes.signupButton)}
                >
                  Sign up
                </Button>
              </React.Fragment>
            )}
          </Toolbar>

          <Toolbar className={clsx(classes.toolbar, classes.toolbarBottom)}>
            {headerLinks([
              {url: '/',         name: "Home"},
              {url: '/about',    name: "About"},
              {url: '/services', name: "Services"},
              {url: '/contact',  name: "Contact"},
            ])}

            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              component="a"
              onClick={handleResourcesClick}
              className={classes.link}
              endIcon={<ExpandMoreIcon />}
            >
              Resources
            </Button>
            <StyledMenu
              anchorEl={anchorResourcesMenu}
              open={Boolean(anchorResourcesMenu)}
              onClose={handleResourcesClose}
            >
              {dropDownMenuItems([
                {url: "/calendar",  name: "Calendar",             method: null},
                {url: "/bible",     name: "Holy Bible",           method: null},
                {url: "/donate",    name: "Pay Tithes/ Donate",   method: null},
                {url: "/documents", name: "Documents/ Forms",     method: null},
              ])}
              <Divider className={classes.customDivider} />
              {dropDownMenuItems([
                {url: "#",          name: "Teachings",            method: null},
                {url: "#",          name: "Media",                method: null}
              ])}
            </StyledMenu>

            {headerLinks([
              {url: '/faq',      name: "FAQ"},
            ])}

            <div className={classes.grow} />

            <Button
              href="#"
              component="a"
              color="inherit"
              startIcon={<TranslateIcon />}
              className={classes.hdrButton}
            >
              Languages
            </Button>

            <Button
              href="#"
              component="a"
              color="inherit"
              startIcon={<StoreIcon />}
              className={classes.hdrButton}
            >
              Store
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Toolbar className={classes.toolbarBottom} />
    </React.Fragment>
  );
}

Header.propTypes = {
  template: PropTypes.bool,
};
