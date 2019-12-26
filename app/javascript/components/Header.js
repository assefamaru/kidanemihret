import React from "react"
import PropTypes from "prop-types"
import clsx from 'clsx'
import { createMuiTheme, makeStyles, withStyles, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import Link from '@material-ui/core/Link'
import MenuItem from '@material-ui/core/MenuItem'
import Drawer from '@material-ui/core/Drawer'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Divider from '@material-ui/core/Divider'
import TranslateIcon from '@material-ui/icons/Translate'
import { Bell } from 'react-feather'
import { Home } from 'react-feather'
import { Info } from 'react-feather'
import { Send } from 'react-feather'
import { Calendar } from 'react-feather'
import { Book } from 'react-feather'
import { DollarSign } from 'react-feather'
import { FileText } from 'react-feather'
import { Bookmark } from 'react-feather'
import { Mic } from 'react-feather'
import { ShoppingCart } from 'react-feather'
import { HelpCircle } from 'react-feather'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#FFFFFF',
    },
  },
  mixins: {
    toolbar: {
      minHeight: 80,
      width: '100vw',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: '#FFFFFF',
    color: '#424242',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  title: {
    fontFamily: 'Lato',
    fontWeight: 900,
    fontStyle: 'italic',
    fontSize: 25,
    textTransform: 'lowercase',
    minWidth: 20,
    color: '#424242',
    letterSpacing: 0,
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  link: {
    fontFamily: 'sans-serif-medium',
    textTransform: 'uppercase',
    fontSize: 14,
    letterSpacing: 0,
    marginLeft: theme.spacing(2),
    minWidth: 10,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  loginButton: {
    fontFamily: 'sans-serif-medium',
    textTransform: 'uppercase',
    fontSize: 14,
    letterSpacing: 0,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    minWidth: 10,
    border: '1px solid #424242',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
  dropDownMenuLink: {
    padding: theme.spacing(1, 4),
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
  },
  dropDownLinkIcon: {
    color: '#424242',
  },
  dropDownMenuLinkText: {
    fontFamily: 'sans-serif-book',
    fontSize: 16,
    color: '#424242',
  },
  customDivider: {
    border: '0.5px solid #f5f5f5',
    margin: theme.spacing(1, 0),
  },
  avatarButton: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  avatarMenuTitle: {
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
  sidebar: {
    width: 270,
    color: '#000',
    backgroundColor: '#FFFFFF',
    fontFamily: 'sans-serif-book',
    overflow: 'hidden',
  },
  sidebarToolbar: {
    borderBottom: '1px solid #f5f5f5',
  },
  sidebarMenuButton: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  sidebarTitle: {
    fontSize: 20,
    marginLeft: theme.spacing(2),
  },
  sidebarLink: {
    paddingLeft: theme.spacing(3.5),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2.5),
    },
  },
  sidebarLinkIcon: {
    color: '#424242',
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
    maxWidth: 270,
    border: '1px solid #e0e0e0',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
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
          <Button
            component="a"
            href={item.url}
            key={item.name}
            className={classes.link}
            color="inherit"
          >
            {item.name}
          </Button>
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

  const dropDownMenuItemsWithIcons = list => {
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
            <ListItemIcon className={classes.dropDownLinkIcon}>{item.icon}</ListItemIcon>
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
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <HideOnScroll {...props}>
        <AppBar className={classes.appbar} elevation={1}>
          <Toolbar>
            <IconButton className={classes.menuButton} onClick={toggleSidebar('left', true)} edge="start" aria-label="menu" color="inherit">
              <MenuRoundedIcon />
            </IconButton>
            <Drawer open={state.left} onClose={toggleSidebar('left', false)}>
              <div
                role="presentation"
                onClick={toggleSidebar('left', false)}
                onKeyDown={toggleSidebar('left', false)}
                className={classes.sidebar}
              >
                <Toolbar className={classes.sidebarToolbar}>
                  <IconButton onClick={toggleSidebar('left', false)} className={classes.sidebarMenuButton} edge="start" aria-label="menu" color="inherit">
                    <MenuRoundedIcon />
                  </IconButton>
                  <Button href="/" component="a" className={clsx(classes.title, classes.sidebarTitle)} color="inherit">
                    Kidanemihret
                  </Button>
                </Toolbar>
                {sidebarLinks([
                  {url: "/",          icon: <Home size={18} />,        name: "Home"},
                  {url: "/about",     icon: <Info size={18} />,        name: "About"},
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
                  {url: "/faq",       icon: <HelpCircle size={18} />,   name: "Frequently Asked Questions"},
                  {url: "#",          icon: <TranslateIcon />,          name: "Languages"},
                  {url: "#",          icon: <ShoppingCart size={18} />, name: "Shop"}
                ])}
              </div>
            </Drawer>

            <Button href="/" component="a" className={classes.title} color="inherit">
              Kidanemihret
            </Button>

            <div className={classes.grow} />

            {headerLinks([
              {url: '/',         name: "Home"},
              {url: '/about',    name: "About"},
              {url: '/contact',  name: "Contact"},
            ])}

            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              component="a"
              onClick={handleResourcesClick}
              className={classes.link}
              endIcon={<ExpandMoreIcon />}
              color="inherit"
            >
              Resources
            </Button>
            <StyledMenu
              anchorEl={anchorResourcesMenu}
              open={Boolean(anchorResourcesMenu)}
              onClose={handleResourcesClose}
            >
              {dropDownMenuItemsWithIcons([
                {url: "/calendar",  icon: <Calendar size={18} />,     name: "Calendar",             method: null},
                {url: "/bible",     icon: <Book size={18} />,         name: "Holy Bible",           method: null},
                {url: "/donate",    icon: <DollarSign size={18} />,   name: "Pay Tithes/ Donate",   method: null},
                {url: "/documents", icon: <FileText size={18} />,     name: "Documents/ Forms",     method: null},
              ])}
              <Divider className={classes.customDivider} />
              {dropDownMenuItemsWithIcons([
                {url: "#",          icon: <Bookmark size={18} />,     name: "Teachings",            method: null},
                {url: "#",          icon: <Mic size={18} />,          name: "Media",                method: null}
              ])}
              <Divider className={classes.customDivider} />
              {dropDownMenuItemsWithIcons([
                {url: "/faq",       icon: <HelpCircle size={18} />,   name: "Frequently Asked Questions", method: null},
                {url: "#",          icon: <TranslateIcon />,          name: "Languages",            method: null},
                {url: "#",          icon: <ShoppingCart size={18} />, name: "Shop",                 method: null}
              ])}
            </StyledMenu>

            {props.isLoggedIn ? (
              <React.Fragment>
                <Button
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
                  className={classes.loginButton}
                >
                  Log in
                </Button>
              </React.Fragment>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </ThemeProvider>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  loggedInUser: PropTypes.object,
};
