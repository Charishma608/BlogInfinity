import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    editPost: (state, action) => {
      const { id, title, excerpt, content, author, date, category } = action.payload;
      const existingPost = state.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.excerpt = excerpt;
        existingPost.content = content;
        existingPost.author = author;
        existingPost.date = date;
        existingPost.category = category;
      }
    },
    deletePost: (state, action) => {
      return state.filter(post => post.id !== action.payload);
    },
  },
});

export const { addPost, editPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
