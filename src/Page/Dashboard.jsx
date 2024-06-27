import React from 'react';
import SideBar from '../Component/SideBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavBar from '../Component/Navbar'; 
import BlogList from '../Component/BlogList'; 

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#77B0AA', paddingBottom:'20%',minHeight: '100vh' }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        <Typography variant='h4' style={{ fontStyle: 'italic', fontSize: '25px', marginTop: '10px', marginBottom: '15px' }}>
          Hello! This is your Dashboard, scroll to view featured blogs
        </Typography>
        <Typography paragraph>
          Welcome to our Blog Application! Explore a diverse range of blogs covering topics across various categories such as Technology, Travel, Food, and Lifestyle. Our platform offers an intuitive text editor for creating and editing posts, along with a theme switcher for toggling between light and dark modes. Enjoy a seamless reading and blogging experience tailored to your preferences.
        </Typography>
        <NavBar />
        <BlogList />
      </Box>
    </Box>
  );
}
