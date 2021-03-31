import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React from 'react';
import { useStyles } from './NavbarStyle';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router';


export const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
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

  //handling menu functionality
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

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
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
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
            <Button onClick={goToHomePage}>Home</Button>
            <Button onClick={goToOrdersPage}>Orders</Button>
            <Button onClick={goToAdminPage}>Admin</Button>
            <Button onClick={goToDealsPage}>Deals</Button>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
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
      {renderMenu}
    </div>
  );
}