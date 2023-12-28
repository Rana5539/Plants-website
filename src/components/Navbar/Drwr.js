import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typography } from '@mui/material';
const logo = require('./images/plant.png')
const home = require('./images/house.png')
const about = require('./images/information.png')
const contact = require('./images/operator.png')
const signin = require('./images/refer.png')
const indoor = require('./images/alocasia.png')
const outdoor = require('./images/park.png')
const gard = require('./images/chemical.png')
const fertilzer = require('./images/fertilizer.png')
const seed = require('./images/three-dots.png')
const acc = require('./images/user.png')
const order = require('./images/order.png')
export default function SwipeableTemporaryDrawer() {
  
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        transitionDuration: '0.8s',
        bgcolor:'whitesmoke'
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Box display={'flex'} >
      <img src={logo} height={'50px'} style={{marginLeft:5}} alt='logo'></img>
      <Typography sx={{fontFamily:"Rubik Bubbles",color: '#14ae5c',fontSize:'25px',mt:1, ml:1}}>POT GREEN</Typography>
        </Box>
        {['Home', 'About us', 'Contact us', 'Sign in'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 4 === 0 ? (
                  <img src={home} height={'22px'} alt='d'></img>
                ) : index % 4 === 1 ? (
                  <img src={about} height={'22px'} alt='d'></img>
                ) : index % 4 === 2 ? (
                  <img src={contact} height={'22px'} alt='d'></img>
                ) : (
                  <img src={signin} height={'22px'} alt='d'></img>
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Indoor Plants', 'Outdoor Plants', 'Gardners', 'Fertilizers', 'All others'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon>
  {index % 5 === 0 ? (
    <img src={indoor} height={'22px'} alt='d'></img>
  ) : index % 5 === 1 ? (
    <img src={outdoor} height={'22px'} alt='d'></img>
  ) : index % 5 === 2 ? (
    <img src={gard} height={'22px'} alt='d'></img>
  ) : index % 5 === 3 ? (
    <img src={fertilzer} height={'22px'} alt='d'></img>
  ) : (
    <img src={seed} height={'22px'} alt='d'></img>
  )}
</ListItemIcon>

              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['My Account','Orders'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <img src={acc} height={'22px'} alt='d'></img>
                ) : (
                  <img src={order} height={'22px'} alt='d'></img>
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Facebook', 'Instagram'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <FacebookOutlinedIcon sx={{ color: 'blue' }} />
                ) : (
                  <InstagramIcon sx={{ color: 'crimson' }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '8px',
        }}
      >
       
      </Box>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            startIcon={<MenuIcon sx={{ color: 'green' }} />}
          >
            {String.fromCharCode(160)}
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
