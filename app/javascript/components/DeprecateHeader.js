import React from "react"
import PropTypes from "prop-types"
import clsx from 'clsx'
import { createMuiTheme, makeStyles, withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Tooltip from '@material-ui/core/Tooltip'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import ViewStreamIcon from '@material-ui/icons/ViewStream'
import DraftsIcon from '@material-ui/icons/Drafts'
import HelpIcon from '@material-ui/icons/Help'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import BookIcon from '@material-ui/icons/Book'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import MicIcon from '@material-ui/icons/Mic'
import StoreIcon from '@material-ui/icons/Store'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import PersonIcon from '@material-ui/icons/Person'
import PeopleIcon from '@material-ui/icons/People'
import EditIcon from '@material-ui/icons/Edit'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'


const theme = createMuiTheme({
  palette: {
    background: {
      default: '#FFFFFF',
    },
  },
});
const color = '#282828';
const fontSize = 13;
const hoverColor = '#282828';
const hoverBackgroundColor = '#ede7f6';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  noOutline: {
    outline: 'none',
  },
  appBar: {
    backgroundColor: '#FFFFFF',
    color: color,
    borderBottom: '1px solid #f5f5f5',
  },
  searchButton: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  headerLink: {
    fontFamily: 'sans-serif-book',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    marginRight: theme.spacing(4),
    color: '#9e9e9e',
    '&:hover, &:focus': {
      textDecoration: 'none',
      backgroundColor: 'inherit',
      color: hoverColor,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  logInButton: {
    fontFamily: 'sans-serif-book',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: 1,
    backgroundColor: '#673ab7',
    '&:hover, &:focus': {
      backgroundColor: '#5e35b1',
    },
  },
  avatarButton: {
    '&:hover, &:focus': {
      backgroundColor: 'inherit',
    },
  },
  avatarMenuTitle: {
    '& .MuiListItemText-primary, & .MuiListItemText-secondary': {
      fontSize: 14,
    },
    '& .MuiListItemText-primary,': {
      fontWeight: 500,
    },
  },
  avatarDivider: {
    marginBottom: theme.spacing(1),
  },
  avatarMenuLinkText: {
    fontSize: fontSize,
  },
  dropDownMenuLink: {
    height: theme.spacing(7),
    '&:hover': {
      backgroundColor: hoverBackgroundColor,
    },
  },
  dropDownMenuLinkIcon: {
    color: '#616161',
  },
  dropDownMenuLinkText: {
    color: color,
    fontFamily: 'sans-serif-book',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: 1,
  },
  sidebar: {
    width: 250,
    maxWidth: '90vw',
    backgroundColor: '#FFFFFF',
  },
  sidebarMenuButton: {
    color: color,
    marginLeft: theme.spacing(1.5),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1.1),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(0.5),
      marginTop: theme.spacing(0.5),
    },
  },
  sidebarDivider: {
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0.5),
    },
  },
  sidebarLink: {
    height: theme.spacing(7),
    '&:hover, &:focus': {
      backgroundColor: '#ede7f6',
      textDecoration: 'none',
    },
  },
  sidebarLinkIcon: {
    color: '#616161',
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(0),
    },
  },
  sidebarLinkText: {
    color: color,
    fontFamily: 'sans-serif-book',
    fontSize: fontSize,
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: 1,
  },
}));

const StyledMenu = withStyles({
  paper: {
    maxWidth: 250,
    border: '1px solid #ede7f6',
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
          <Link href={item.url} key={item.name} className={classes.headerLink} color="inherit">
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
            <ListItemIcon className={classes.dropDownMenuLinkIcon}>{item.icon}</ListItemIcon>
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
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
      </MuiThemeProvider>

      <header className={classes.grow}>
        <AppBar position="fixed" className={classes.appBar} elevation={0}>
          <Toolbar>
            <IconButton onClick={toggleSidebar('left', true)} edge="start" aria-label="menu" color="inherit">
              <MenuIcon />
            </IconButton>
            <Tooltip title="Search feature coming soon.">
              <IconButton aria-label="search" className={classes.searchButton} color="inherit">
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Drawer open={state.left} onClose={toggleSidebar('left', false)}>
              <div
                role="presentation"
                onClick={toggleSidebar('left', false)}
                onKeyDown={toggleSidebar('left', false)}
                className={classes.sidebar}
              >
                <IconButton onClick={toggleSidebar('left', false)} className={classes.sidebarMenuButton} edge="start" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                {sidebarLinks([
                  {url: "/",          icon: <HomeIcon />,           name: "Home"},
                  {url: "/about",     icon: <InfoIcon />,           name: "About"},
                  {url: "/services",  icon: <ViewStreamIcon />,     name: "Services"},
                  {url: "/contact",   icon: <DraftsIcon />,         name: "Contact"},
                ])}
                <Divider className={classes.sidebarDivider} />
                {sidebarLinks([
                  {url: "/calendar",  icon: <EventAvailableIcon />, name: "Calendar"},
                  {url: "/bible",     icon: <BookIcon />,           name: "Holy Bible"},
                  {url: "/donate",    icon: <MonetizationOnIcon />, name: "Pay Tithes/ Donate"},
                  {url: "/documents", icon: <FileCopyIcon />,       name: "Documents/ Forms"},
                  {url: "",           icon: <MenuBookIcon />,       name: "Teachings"},
                  {url: "",           icon: <MicIcon />,            name: "Media"},
                ])}
                <Divider className={classes.sidebarDivider} />
                {sidebarLinks([
                  {url: "/faq",       icon: <HelpIcon />,           name: "FAQ"},
                  {url: "#",          icon: <StoreIcon />,          name: "Shop"},
                ])}
              </div>
            </Drawer>

            <div className={classes.grow} />

            <Typography>
              {headerLinks([
                {url: '/',         name: "Home"},
                {url: '/about',    name: "About"},
                {url: '/services', name: "Services"},
                {url: '/contact',  name: "Contact"},
              ])}
            </Typography>

            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              component="a"
              onClick={handleResourcesClick}
              className={classes.headerLink}
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
                {url: "/calendar",  icon: <EventAvailableIcon fontSize="small" />, name: "Calendar",             method: null},
                {url: "/bible",     icon: <BookIcon fontSize="small" />,           name: "Holy Bible",           method: null},
                {url: "/donate",    icon: <MonetizationOnIcon fontSize="small" />, name: "Pay Tithes/ Donate", method: null},
                {url: "/documents", icon: <FileCopyIcon fontSize="small" />,       name: "Documents/ Forms",    method: null},
                {url: "",           icon: <MenuBookIcon fontSize="small" />,       name: "Teachings",            method: null},
                {url: "",           icon: <MicIcon fontSize="small" />,            name: "Media",                method: null}
              ])}
            </StyledMenu>

            <Typography>
              {headerLinks([
                {url: '/faq', name: "FAQ"},
              ])}
            </Typography>

            <Tooltip title="Kidanemihret shop is under construction. Coming soon!">
              <Button
                href="#"
                component="a"
                color="inherit"
                startIcon={<StoreIcon />}
                className={classes.headerLink}
              >
                Shop
              </Button>
            </Tooltip>

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
                  <ListItem className={classes.noOutline}>
                    <ListItemAvatar>
                      <Badge overlap="circle">
                        <Avatar alt={props.loggedInUser.firstName} src={props.loggedInUser.gravatar} />
                      </Badge>
                    </ListItemAvatar>
                    <ListItemText
                      primary={props.loggedInUser.fullName}
                      secondary={props.loggedInUser.email}
                      className={classes.avatarMenuTitle}
                    />
                  </ListItem>
                  <Divider className={classes.avatarDivider} />
                  {dropDownMenuItems([
                    {url: props.loggedInUser.profile,  icon: <PersonIcon fontSize="small" />,    name: "View profile", method: null},
                    {url: '/users',                    icon: <PeopleIcon fontSize="small" />,    name: "All users",    method: null},
                    {url: props.loggedInUser.settings, icon: <EditIcon fontSize="small" />,      name: "Settings",     method: null},
                    {url: '/logout',                   icon: <ExitToAppIcon fontSize="small" />, name: "Log out",      method: "delete"},
                  ])}
                </StyledMenu>
              </React.Fragment>
            ) : (
              <Button
                href="/login"
                component="a"
                variant="contained"
                color="primary"
                className={classes.logInButton}
                startIcon={<LockOpenIcon />}
              >
                Log In
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </header>

      <Toolbar />
    </React.Fragment>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  loggedInUser: PropTypes.object
};
