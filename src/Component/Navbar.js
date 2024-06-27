import React, { useState } from 'react';
import { Box, Button, Popover, List, ListItem, ListItemText, IconButton, Typography, InputBase } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: 'Exploring the Future of AI (click for full blog)',
    excerpt: 'Artificial intelligence (AI) continues to evolve rapidly...',
    date: '2024-06-01',
    category: 'Technology',
    content: 'Full content of Exploring the Future of AI...',
    author: '',
    image: '',
  },
  {
    id: 2,
    title: 'Top Travel Destinations in 2024',
    excerpt: 'Discover the best places to travel in the upcoming year...',
    date: '2024-06-02',
    category: 'Travel',
    content: 'Full content of Top Travel Destinations in 2024...',
    author: '',
    image: '',
  },
  {
    id: 3,
    title: 'Delicious Recipes to Try This Week',
    excerpt: 'Explore new and exciting recipes for your next meal...',
    date: '2024-06-03',
    category: 'Food',
    content: 'Full content of Delicious Recipes to Try This Week...',
    author: '',
    image: '',
  },
  {
    id: 4,
    title: 'Lifestyle Tips for a Balanced Life',
    excerpt: 'Learn how to achieve balance in your daily lifestyle...',
    date: '2024-06-04',
    category: 'Lifestyle',
    content: 'Full content of Lifestyle Tips for a Balanced Life...',
    author: '',
    image: '',
  },
  {
    id: 5,
    title: 'Advancements in Renewable Energy',
    excerpt: 'The latest breakthroughs in solar and wind power...',
    date: '2024-06-05',
    category: 'Technology',
    content: 'Full content of Advancements in Renewable Energy...',
    author: '',
    image: '',
  },
  {
    id: 6,
    title: 'A Culinary Journey Through Italy',
    excerpt: 'Experience the rich flavors of Italian cuisine...',
    date: '2024-06-06',
    category: 'Travel',
    content: 'Full content of A Culinary Journey Through Italy...',
    author: '',
    image: '',
  },
  {
    id: 7,
    title: 'Healthy and Quick Breakfast Ideas',
    excerpt: 'Start your day right with these nutritious breakfasts...',
    date: '2024-06-07',
    category: 'Food',
    content: 'Full content of Healthy and Quick Breakfast Ideas...',
    author: '',
    image: '',
  },
];

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
    setFilterOpen(true);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
    setFilterOpen(false);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setAnchorEl(null);
    setFilterOpen(false);
  };

  const clearCategorySelection = () => {
    setSelectedCategory(null);
  };

  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
  };

  
  const filteredBlogs = blogs.filter((blog) => {
    if (selectedCategory && blog.category !== selectedCategory) {
      return false;
    }
    if (searchKeyword && !blog.title.toLowerCase().includes(searchKeyword.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 1,
          backgroundColor: '#E3FEF7',
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" onClick={handleFilterClick} sx={{ bgcolor: '#66BB6A', mr: 1 }}>
            <FilterListIcon />
            <Typography variant="subtitle1" color="inherit" sx={{ ml: 1 }}>
              Filter
            </Typography>
          </IconButton>

          <Popover
            open={filterOpen}
            anchorEl={anchorEl}
            onClose={handleFilterClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <List>
              <ListItem button onClick={() => handleCategoryClick('Technology')}>
                <ListItemText primary="Technology" />
              </ListItem>
              <ListItem button onClick={() => handleCategoryClick('Travel')}>
                <ListItemText primary="Travel" />
              </ListItem>
              <ListItem button onClick={() => handleCategoryClick('Food')}>
                <ListItemText primary="Food" />
              </ListItem>
              <ListItem button onClick={() => handleCategoryClick('Lifestyle')}>
                <ListItemText primary="Lifestyle" />
              </ListItem>
              <ListItem button onClick={clearCategorySelection}>
                <ListItemText primary="All" />
              </ListItem>
            </List>
          </Popover>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <InputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            sx={{ bgcolor: 'white', color: 'black', mr: 2, padding: '5px' }}
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <IconButton color="gray" sx={{ bgcolor: '#ffffff' }}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Category buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button
            color="inherit"
            sx={{ bgcolor: '#42A5F5', color: 'white', mr: 1, mb: 1 }}
            onClick={() => handleCategoryClick('Technology')}
          >
            Technology
          </Button>
          <Button
            color="inherit"
            sx={{ bgcolor: '#AB47BC', color: 'white', mr: 1, mb: 1 }}
            onClick={() => handleCategoryClick('Travel')}
          >
            Travel
          </Button>
          <Button
            color="inherit"
            sx={{ bgcolor: '#FFB74D', color: 'white', mr: 1, mb: 1 }}
            onClick={() => handleCategoryClick('Food')}
          >
            Food
          </Button>
          <Button
            color="inherit"
            sx={{ bgcolor: '#78909C', color: 'white', mb: 1 }}
            onClick={() => handleCategoryClick('Lifestyle')}
          >
            Lifestyle
          </Button>
        </Box>
      </Box>

      {/* Render filtered blogs */}
      <Box sx={{ p: 2 }}>
        {filteredBlogs.map((blog) => (
          <Box
            key={blog.id}
            sx={{
              mb: 2,
              p: 2,
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%', 
            }}
            onClick={() => handleBlogClick(blog.id)}
          >
            <Typography variant="h5" component="div">
              {blog.title}
            </Typography>
            <Typography color="text.secondary">{new Date(blog.date).toLocaleDateString()}</Typography>
            <Typography variant="body2">{blog.excerpt}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NavBar;
