import React from 'react';
import { Box, Button, Link} from '@mui/material';
const tex = ['Indoor Plants', 'Outdoor Plants', 'Gardners', 'Fertilzers', 'All others']
function Secondnav() {
 
  return (
    <Box
      sx={{
        width: '140vh',
        height: '8vh',
        background: 'linear-gradient(to right,  #14ae5c, white 70%)',
        m: 'auto',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', 
        borderRadius: '0px 0px 30px 30px',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        '@media (max-width: 900px)': {
            display: 'none', 
          },
          '@media (max-width: 1170px)': {
            width:"110vh"
          },
      }}
    >
        {tex.map((data)=>(
            <Link
            key={data}
            sx={{
              fontFamily: 'Poppins',
              color: 'black',
              textDecoration: 'none',
              cursor: 'pointer',
              mr: 3,
              fontWeight: '400',
              transition: 'color 0.3s ease-in-out', // Smooth color transition on hover
              '&:hover': {
                color: 'forestgreen', // Change color on hover
              },
            }}
          >
            {data}
          </Link>
          
            
        ))}
     
            <Button variant='outlined' sx={{bgcolor:'white',  fontFamily:'Poppins', textTransform:'none',color:'#14ae5c',border:'1px solid #14ae5c', fontSize:'14px','&:hover': {
              color: 'white',
              bgcolor:'forestgreen',
              border:'1px solid #14ae5c' 
            },}}>Orders</Button>
            <Button variant='outlined' sx={{bgcolor:'white',  fontFamily:'Poppins', textTransform:'none',ml:3,border:'1px solid #14ae5c',color:'#14ae5c', fontSize:'14px','&:hover': {
              color: 'white',
              bgcolor:'forestgreen' ,
              border:'1px solid #14ae5c'
            },}}>My Account</Button>
    </Box>
  );
}

export default Secondnav;
