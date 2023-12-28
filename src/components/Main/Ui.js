import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './images.css';
const img = require('./images/pngwing.com (16).png')
function Ui() {
  return (
    <>
    <Box sx={{width:'80%', 
    height:'auto', 
    display:'flex',
     m:'auto', 
     justifyContent:'space-between',
     mt:15, 
     position:"relative",
     '@media (max-width: 1100px)': {
        flexDirection:'column', 
        mt:5,
        width:'90%',
      },
      '@media (max-width: 1300px)': {
        width:'90%',
      },}}>
        <Box sx={{position:'absolute',
         borderRadius:'50%', 
         width:'150px', 
         height:'150px', 
         background: 'linear-gradient(to right , white 30% , #14ae5c)', 
         opacity:'0.3',
         ml:40,
         mt:20,
         '@media (max-width: 1100px)': {
            display:'none'
          },}}></Box>
         <Box sx={{position:'absolute',
         borderRadius:'50%', 
         width:'200px', 
         height:'200px', 
         background: 'linear-gradient(to left, white 40%, #14ae5c)', 
         opacity:'0.3',
         ml:-10,
         '@media (max-width: 1100px)': {
            display:'none'
          },}}></Box>
          <Box sx={{position:'absolute',
         borderRadius:'50%', 
         width:'200px', 
         height:'200px', 
         background: 'linear-gradient(to left, white 20%, #14ae5c)', 
         opacity:'0.3',
         ml:55,
         mt:-10,
         '@media (max-width: 1100px)': {
            display:'none'
          },}}></Box>
     <Box sx={{textAlign:'justify', 
     width:'80vh',
     '@media (max-width: 1100px)': {
        textAlign:"center", 
        m:'auto',
        width:'auto'
      },}}> 
        <Typography sx={{fontFamily:'Poppins',
         color:'forestgreen', 
         fontWeight:'500', 
         fontSize:'25px'}}>Let's Bring</Typography>
        <Typography sx={{fontFamily:'Poppins', 
        color:'forestgreen', 
        fontWeight:'700', 
        fontSize:'40px',
        lineHeight:1}}>A New Friend at Home</Typography>
        <Typography sx={{fontFamily:'Inria Sans'}}>We are providing a wide range of plants including indoor, outdoor, fruit plants , vegetables plants and artificial plants. We also offers different services like providing a gardner and best landscaping ideas with implementation. Plants are our friends if we will care about them they will provide us oxygen and many other facilities like fresh air and made us feel fresh also. Order now online or call us to deliver your desired plants and services. We also deal with grass and different types of stones to made your loan greenish and stylish.</Typography>
        <Button
      variant='contained'
      sx={{
        bgcolor: 'green',
        fontFamily: 'Poppins',
        textTransform: 'none',
        color: 'white',
        fontSize: '16px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        fontWeight: '300',
        mt: 2,
        '@media (max-width: 1100px)': {
            textAlign:"center", 
            m:'auto',
            mt:2
          },
        '&:hover': {
          bgcolor: 'forestgreen',
          '& .arrow-icon': {
            transform: 'translateX(5px)',
            transition:'0.6s'
          },
        },
      }}
    >
      Order Now
      <ArrowForwardIcon className="arrow-icon" />
    </Button>
     </Box>
     <Box sx={{height:'60vh', 
     width:'55vh', 
     background: 'linear-gradient(to bottom, white 30%, green)',
     borderRadius:'0px 0px 170px 170px', 
     alignItems:'center', display:'flex',
     justifyContent:'center',
     '@media (max-width: 1100px)': {
        m:'auto',
        mt:15
      },
      '@media (max-width: 550px)': {
        display:'none'
      },}}>
     <img src={img} height={'420vh'} style={{marginTop:-130, marginLeft:-50,
    }} className="responsive-image"></img></Box>
    </Box>
    </>
  )
}

export default Ui