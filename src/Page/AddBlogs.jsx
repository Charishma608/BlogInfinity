import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost, editPost, deletePost } from '../Component/postSlice';
import SideBar from '../Component/SideBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const categories = ['technology', 'lifestyle', 'food', 'travel'];

export default function AddProduct() {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState(categories[0]); 
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (editMode) {
      dispatch(editPost({ id: currentId, title, excerpt, content, author, date, category }));
      setEditMode(false);
    } else {
      dispatch(addPost({ id: Date.now(), title, excerpt, content, author, date, category }));
    }
    clearForm();
  };

  const handleEdit = (post) => {
    setEditMode(true);
    setCurrentId(post.id);
    setTitle(post.title);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setAuthor(post.author);
    setDate(post.date);
    setCategory(post.category);
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const clearForm = () => {
    setTitle('');
    setExcerpt('');
    setContent('');
    setAuthor('');
    setDate('');
    setCategory(categories[0]); 
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#77B0AA', minHeight: '100vh' }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        <Typography variant='h4' style={{ fontStyle: 'italic', fontSize: '25px' }}>Create, Edit, Update, and Delete Blogs</Typography>
        <Box sx={{ mt: 3 }}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              {categories.map(cat => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleSubmit} halfWidth>
            {editMode ? 'Update Post' : 'Add Post'}
          </Button>
        </Box>
        <Box sx={{ mt: 3 }}>
          <List>
            {posts.map(post => (
              <ListItem key={post.id} sx={{ backgroundColor: '#f0f0f0', mb: 1, display: 'flex', alignItems: 'center' }}>
                <ListItemText
                  primary={post.title}
                  secondary={post.excerpt}
                  sx={{ flexGrow: 1 }}
                />
                <Button variant="contained" color="secondary" onClick={() => handleEdit(post)} sx={{ ml: 1 }}>
                  Edit
                </Button>
                <Button variant="contained" color="error" onClick={() => handleDelete(post.id)} sx={{ ml: 1 }}>
                  Delete
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}
