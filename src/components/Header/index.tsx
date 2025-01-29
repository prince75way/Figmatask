import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import {ReactComponent as Logo} from '../../assets/logo.svg';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#202430',
        color: 'white',
        padding: '20px 0',
        paddingLeft:"8%"
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent:"space-between",
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
      <Logo />

        <Typography variant="h6" sx={{ marginLeft: '10px' }}> 
          JobHuntly
        </Typography>
          
        <Box sx={{ display: 'flex', gap: '10px',marginLeft:"25px" ,marginBottom:"20px"}}>
          <Button sx={{ color: 'white', '&:hover': { color: '#0000FF' } }}>
            Find Jobs
          </Button>
          <Button sx={{ color: 'white', '&:hover': { color: '#0000FF' } }}>
            Browse Companies
          </Button>
        </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center',marginRight:"8%" }}>
          <Button
            variant="text"
            sx={{
              color: '#4640DE',
              '&:hover': { color: '#4640DE' },
            }}
          >
            Login
          </Button>
          {/* White vertical line */}
          <Box
            sx={{
              width: '1px',
              height: '30px',
              backgroundColor: 'white',
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#4640DE',
              color: 'white',
              '&:hover': { backgroundColor: '#4640DE' },
            }}
          >
            Sign up
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
