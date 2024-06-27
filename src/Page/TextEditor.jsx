import React from 'react';
import SideBar from '../Component/SideBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Editor from '../Component/Editor'; 
import './TextEditor.css';

export default function TextEditor() {
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#77B0AA', minHeight: '100vh' }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '55px' }}>
        <Typography variant="h5" mb={3}>
          Write Your Blog
        </Typography>
        <Box sx={{ width: '100%', minHeight: 'calc(100vh - 165px)' }}>
          
          <Editor placeholder="Write your blog here..." />
        </Box>
      </Box>
    </Box>
  );
}
