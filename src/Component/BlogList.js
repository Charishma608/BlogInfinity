import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';

const blogs = [
  {
    id: 1,
    title: 'Exploring the Future of AI',
    excerpt: 'Artificial intelligence (AI) continues to evolve rapidly, reshaping industries and our daily lives. This article dives deep into the latest advancements in AI technologies, such as machine learning, neural networks, and natural language processing. Explore how these technologies are transforming healthcare, finance, and transportation, and what the future holds for AI-driven innovation.',
    date: '2024-06-01',
    category: 'Technology',
    image: "https://imgs.search.brave.com/ngHMxwcNYXEG4H1ZJfcJkb7vAJqdvGYt9KDb8LwJITs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzY2Lzk2LzYw/LzM2MF9GXzE2Njk2/NjA1Ml9nanhTVXdL/TEIwRG9Pd2NPYVRG/T05ISGxmMmVkak14/Ry5qcGc", // Replace with your image URL
  },
  {
    id: 2,
    title: 'Top 10 Travel Destinations for 2024',
    excerpt: 'Planning your next vacation? Discover the top travel destinations for 2024, from exotic beaches to historical landmarks. This guide provides insights into the best places to visit, tips for cultural experiences, and recommendations for local cuisine. Whether you are a solo traveler or planning a family trip, these destinations promise unforgettable adventures and memories.',
    date: '2024-05-15',
    category: 'Travel',
    image:'https://imgs.search.brave.com/So-E7bVLv6nRWG3399KXNUoakQgt971d2Fwo0koDulk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODk1/MDgxODI0L3Bob3Rv/L3RvdXJpc3Qtdmlz/aXRpbmctc3BhaW4u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVZGbHV3ck1yTURZ/b3gxVzg4ZV92Tjl5/TnA2N2lVTmEtVnVi/OTZoZGg4Tjg9'

  },
  {
    id: 3,
    title: 'Delicious Recipes from Around the World',
    excerpt: 'Embark on a culinary journey with these mouth-watering recipes from around the world. From Italian pasta dishes to spicy Thai curries, explore diverse cuisines and learn to recreate authentic flavors at home. Each recipe is accompanied by tips on ingredients, cooking techniques, and cultural insights, making it easy to bring global tastes to your kitchen.',
    date: '2024-06-10',
    category: 'Food',
    image: 'https://imgs.search.brave.com/-ssG6XoggPo3p7inyG9JZwNyBPfZ9To2ev7mLErUSQg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/ZmxhdGxheS1pcm9u/LXNraWxsZXQtd2l0/aC1tZWF0LWFuZC1v/dGhlci1mb29kLmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA' ,
  },
  {
    id: 4,
    title: 'Healthy Lifestyle Tips for 2024',
    excerpt: 'Maintaining a healthy lifestyle is essential for overall well-being. This article provides practical tips and strategies for achieving fitness goals, improving nutrition, and managing stress. Discover holistic approaches to wellness, including mindfulness practices, exercise routines, and healthy eating habits. Start your journey to a healthier you with these expert-backed tips.',
    date: '2024-05-28',
    category: 'Lifestyle',
    image: 'https://imgs.search.brave.com/ppViZdGKOWNNbquKoelIpw450-E2eAK30JMRBK7wcAk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzY2LzcyLzM0/LzM2MF9GXzY2NzIz/NDU0XzQzYllvN29n/N0Nvc3pRdDNIaHd1/cW9yM3VsbDc5aTMz/LmpwZw' // Replace with your image URL
  },
  {
    id: 5,
    title: 'Latest Innovations in Robotics',
    excerpt: 'Robotics technology is advancing at a rapid pace, revolutionizing industries from manufacturing to healthcare. Explore the latest innovations in robotics, including autonomous drones, surgical robots, and AI-powered assistants. Learn about the applications of robotics in everyday life and the potential impact on jobs, ethics, and societal norms.',
    date: '2024-06-05',
    category: 'Technology',
    image: 'https://imgs.search.brave.com/_O0okbguZyxcurnz_aiiV8ZCc2oAC0UsTyxXXXkeGbs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAz/MjY4MzYxMi9waG90/by9zb2xhci1lbmVy/Z3ktYW5kLXdpbmQt/cG93ZXItc3RhdGlv/bnMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUtYRWxEVHhy/UnJYRzcyc1ZENFFH/bmN0SlUxaVNNcm9L/UE9sNlhVZkdITms9' // Replace with your image URL
  },
  {
    id: 6,
    title: 'Unmissable Travel Experiences in Europe',
    excerpt: 'Europe offers a wealth of travel experiences, from picturesque landscapes to vibrant cities steeped in history. Discover the must-visit destinations across Europe, including iconic landmarks, cultural festivals, and hidden gems off the beaten path. Whether you are planning a romantic getaway or a backpacking adventure, these travel experiences promise to create lasting memories.',
    date: '2024-06-15',
    category: 'Travel',
    image: 'https://imgs.search.brave.com/qJKD9QX-QTQ8-P3H7z36U-KzstLLR-J5v-gBaale1S4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0Q0/RDEyQVFGSkt3MVdv/NXZUTHcvYXJ0aWNs/ZS1jb3Zlcl9pbWFn/ZS1zaHJpbmtfNzIw/XzEyODAvMC8xNjk0/NDM4OTIzNDc3P2U9/MjE0NzQ4MzY0NyZ2/PWJldGEmdD1Bamp4/YmNKQXRtWml4S3o5/ZW1aWlZPaEtKODZq/WEtQbEt0SDdia2Z3/Z3Yw.jpeg' // Replace with your image URL
  },
  
];

const BlogList = () => {
  console.log('Blogs array:', blogs); 

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginTop: '15px' }}>
        Featured Blogs
      </Typography>
      <Grid container spacing={3}>
        {blogs.map(blog => (
          <Grid item key={blog.id} xs={12} sm={6} md={4}>
            <Card sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              }
            }}>
              <div style={{
                paddingTop: '56.25%', 
                position: 'relative',
                overflow: 'hidden',
              }}>
                <img src={blog.image} alt={blog.title} style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }} />
              </div>
              <CardContent style={{ flex: '1 0 auto' }}>
                <Typography variant="h5" component="div" gutterBottom>
                  {blog.title}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  {new Date(blog.date).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" style={{ marginTop: '10px', fontStyle: 'italic' }}>
                  {blog.excerpt}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default BlogList;
