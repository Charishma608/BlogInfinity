import React from 'react';
import { useSelector } from 'react-redux';
import SideBar from '../Component/SideBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/system';


const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%', 
  maxWidth: 400, 
  borderRadius: 10,
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

export default function Product() {
  const posts = useSelector(state => state.posts);

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#77B0AA', minHeight: '100vh' }}>
      <SideBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: "55px",
          paddingBottom: 100,
        }}
      >
        <Typography variant="h5" style={{ fontStyle: 'italic', marginBottom: '20px' }}>You can now view your blogs here!</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {posts.map(post => (
            <StyledCard key={post.id}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.content} {/* Or use post.excerpt */}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Author: {post.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: {post.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Category: {post.category}
                </Typography>
              </CardContent>
            </StyledCard>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
