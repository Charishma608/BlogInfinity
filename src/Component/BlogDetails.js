import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Container } from '@mui/material';

const blogs = [
  {
    id: 1,
    title: 'Exploring the Future of AI',
    excerpt: 'Artificial intelligence (AI) continues to evolve rapidly...',
    content: 'Full content of AI blog...',
    author: 'John Doe',
    date: '2024-06-01',
    category: 'Technology',
  },
  {
    id: 2,
    title: 'Top Travel Destinations in 2024',
    excerpt: 'Discover the best places to travel in the upcoming year...',
    content: 'Full content of Travel blog...',
    author: 'Jane Smith',
    date: '2024-06-02',
    category: 'Travel',
  },
  {
    id: 3,
    title: 'Delicious Recipes to Try This Week',
    excerpt: 'Explore new and exciting recipes for your next meal...',
    content: 'Full content of Food blog...',
    author: 'Chef Mario',
    date: '2024-06-03',
    category: 'Food',
  },
  {
    id: 4,
    title: 'Lifestyle Tips for a Balanced Life',
    excerpt: 'Learn how to achieve balance in your daily lifestyle...',
    content: 'Full content of Lifestyle blog...',
    author: 'Emily Davis',
    date: '2024-06-04',
    category: 'Lifestyle',
  },
  {
    id: 5,
    title: 'Advancements in Renewable Energy',
    excerpt: 'The latest breakthroughs in solar and wind power...',
    content: 'Full content of Technology blog...',
    author: 'Dr. Green',
    date: '2024-06-05',
    category: 'Technology',
  },
  {
    id: 6,
    title: 'A Culinary Journey Through Italy',
    excerpt: 'Experience the rich flavors of Italian cuisine...',
    content: 'Full content of Travel blog...',
    author: 'Sophia Rossi',
    date: '2024-06-06',
    category: 'Travel',
  },
  {
    id: 7,
    title: 'Healthy and Quick Breakfast Ideas',
    excerpt: 'Start your day right with these nutritious breakfasts...',
    content: 'Full content of Food blog...',
    author: 'Chef Mario',
    date: '2024-06-07',
    category: 'Food',
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <Container maxWidth="md">
        <Typography variant="h5" component="div">
          Blog not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" component="div">
          {blog.title}
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          {new Date(blog.date).toLocaleDateString()}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {blog.content}
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Author: {blog.author}
        </Typography>
      </Box>
    </Container>
  );
};

export default BlogDetails;
