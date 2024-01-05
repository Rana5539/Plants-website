import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';

export default function MediaCard() {
  const cards = [
    { src: require('./images/1.jpg'), text: 'Fern', text2:' ferns do not have flowers or seeds; instead, they usually reproduce sexually by tiny spores or sometimes can reproduce vegetatively, as exemplified by the walking fern.' },
    { src: require('./images/1.jpg'), text: 'Pothos', text2:'The pothos NJoy is a beautiful trailing plant, characterized by small, wavy, papery leaves marked by bright green and white colorations. Like its pothos relatives' },
    { src: require('./images/1.jpg'), text: 'Aunthurium', text2:'Anthurium andraeanum or Flamingo Lily is a herbaceous evergreen plant that grows to 40 cm in height. The dark green leaves are heart-shaped and glossy you will find these here only ' },
    { src: require('./images/1.jpg'), text: 'Simple Fern', text2:'Similar to flowering plants, ferns have roots, stems and leaves. However, unlike flowering plants, ferns do not have flowers or seeds; instead contact us to get more info about this plant' }
  ];

  return (
    <>
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontWeight: '600',
          fontSize: '27px',
          color: 'forestgreen',
          textAlign: 'center',
          mt: 5
        }}
      >
        Outdoor Plants
      </Typography>
      <Box
        sx={{
          display: 'flex',
          mt: 8,
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '90%',
          mx: 'auto',
          flexDirection: { xs: 'column', md: 'row' } // Responsive column layout for small screens
        }}
      >
        {cards.map((data, index) => (
          <Card key={index} sx={{ maxWidth: 250, mb: 4, mx: { xs: 0, md: 2 } ,height:380 ,'&:hover': {
            transition:'0.5s',
            transform: 'scale(1.03)'
          } }}>
            <CardMedia sx={{ height: 140 }} image={data.src} title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Poppins' }}>
                {data.text}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Inria Sans' }}>
                {data.text2}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                sx={{
                  fontFamily: 'Poppins',
                  color: 'white',
                  bgcolor: 'forestgreen',
                  p: 0.8,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'green'
                  }
                }}
              >
                Order now
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 3, // Adjust the margin as needed
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: 'forestgreen',
            borderColor: 'forestgreen',
            textTransform: 'none',
            borderRadius:"30px",
            width:'120px',
            height:"40px",
            '&:hover': { color: 'white', bgcolor: 'forestgreen', borderColor: 'forestgreen' },
            fontFamily: 'Poppins',
          }}
        >
          View all
        </Button>
       
      </Box>
      <Divider variant='middle' sx={{mt:4}}/>
    </>
  );
}
