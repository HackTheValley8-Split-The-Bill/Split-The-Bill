import { useState } from 'react';
import { Box, IconButton, Typography, Menu, Avatar, Tooltip, MenuItem } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Login from './components/Login'
import Home from './components/Home'
import Transactions from './components/Transactions'
import Timeline from './components/Timeline'

const pages = [{
  key: '/login',
  content: Login
}, {
  key: '/home',
  content: Home
}, {
  key: '/transactions',
  content: Transactions
}, {
  key: '/timeline',
  content: Timeline
}];
const settings = ['/login', '/home', '/transactions', '/timeline'];

export default function  NavigationBar({ page, isPending, navigate }) {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const CurrentPageComponent = pages.find((item) => item.key === page)?.content;

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleNavBack = () => {
    navigate('/home');
  };
  const handleNavTo = (url) => {
    navigate(url);
  };

  return (
    <Box sx={{ mb: 2,  }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: '15px', paddingLeft: '5%', paddingRight: '5%' }}>
        <Box>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleNavBack}
            color="inherit"
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        </Box>
        <Box>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="react" src="/public/logo512.png" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={() => handleNavTo(setting)}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
      <Box component='main'>
        {CurrentPageComponent && <CurrentPageComponent />}
      </Box>
    </Box>
  );
}
