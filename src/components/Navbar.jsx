import React from 'react'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

const Navbar = () => {
  return (
    <Container sx={{bgcolor:"coral", textAlign:"left"}}>
        <Box>
            <h3 style={{marginLeft:"50%"}}>Anime Movies List</h3>
        </Box>
        </Container>
  )
}

export default Navbar