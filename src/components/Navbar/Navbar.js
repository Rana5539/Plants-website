import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drwr from './Drwr'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './body.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
const logo = require('./images/plant.png')
const pages = ['Home', 'About', 'Contact', 'Services'];
function Navbar() {
  const openInstagram = () => {
    // Replace 'your_instagram_username' with your actual Instagram username
    const instagramUrl = `https://www.instagram.com/itxrana_waqar/`;
    
    // Open Instagram in a new tab or window
    window.open(instagramUrl, '_blank');
  };
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(to right, white 40%, #14ae5c)'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Rubik Bubbles',
              fontWeight: 300,
              color: '#14ae5c',
              textDecoration: 'none',
              fontSize:'27px',
              
            }}
          >
            <img src={logo} height={'40px'} style={{marginRight:10}} alt='logo'></img>
            POT GREEN
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Drwr/> 
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Rubik Bubbles',
              color: '#14ae5c',
              textDecoration: 'none',
              fontSize:'25px'
            }}
          >
            <img src={logo} height={'30px'} style={{marginRight:10}} alt='logo'></img>
            POT GREEN
          </Typography>
          <Box sx={{ ml:'45vh', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, mr:4, color: 'black',fontFamily:'Poppins', fontSize:'17px',textTransform: 'none'}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ ml: { xs: 'auto', lg: 'auto' }, display: { xs: 'none', lg: 'flex' } }}>
          <FacebookOutlinedIcon sx={{fontSize:'30px',mr:2, cursor:'pointer'}}/>
          <InstagramIcon sx={{fontSize:'30px',cursor
        :'pointer',mr:4 }} onClick={openInstagram}/>
          </Box>
          <Button variant='contained' sx={{bgcolor:'white',  fontFamily:'Poppins', textTransform:'none', width:'15vh', color:'#14ae5c', fontSize:'16px',display: { xs: 'none', lg: 'block' },'&:hover': {
              color: 'white',
              bgcolor:'forestgreen' 
            },}}>Sign in</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;