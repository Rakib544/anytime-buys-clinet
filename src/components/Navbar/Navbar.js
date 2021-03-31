import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { useStyles } from './NavbarStyle';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';


export const NavBar = () => {
  const [loggedUser] = useContext(UserContext)
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  //routing functionality
  const history = useHistory()
  const goToHomePage = () => {
    history.push('/')
  }
  const goToOrdersPage = () => {
    history.push('/orders')
  }
  const goToLoginPage = () => {
    history.push('/login')
  }
  const goToAdminPage = () => {
    history.push('/admin')
  }
  const goToDealsPage = () => {
    history.push('/deals')
  }

  //handling mobile menu functionality
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button onClick={goToHomePage}>Home</Button>
      </MenuItem>
      <MenuItem onClick={goToOrdersPage}>
        <Button>Orders</Button>
      </MenuItem>
      <MenuItem>
        <Button onClick={goToDealsPage}>Deals</Button>
      </MenuItem>
      <MenuItem>
        <Button onClick={goToAdminPage}>Admin</Button>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        {
          loggedUser.email ? (
            <IconButton>
              <img src={loggedUser.photoURL} alt={loggedUser.name} style={{ width: '30px', borderRadius: '50%' }} />
            </IconButton>
          ) : (
            <Button onClick={goToLoginPage}>Login</Button>
          )
        }
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{backgroundColor: '#1B4F72'}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Anytime Buys
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button onClick={goToHomePage} className={classes.button}>Home</Button>
            <Button onClick={goToOrdersPage} className={classes.button}>Orders</Button>
            <Button onClick={goToAdminPage} className={classes.button}>Admin</Button>
            <Button onClick={goToDealsPage} className={classes.button}>Deals</Button>
            {
              loggedUser.email ? (
                <IconButton>
                  <img src={loggedUser.photoURL} alt={loggedUser.name} style={{ width: '30px', borderRadius: '50%' }} />
                </IconButton>
              ) : (
                <Button onClick={goToLoginPage} className={classes.button}>Login</Button>
              )
            }
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}