import React from 'react'
import {Routes,Route,BrowserRouter} from "react-router-dom"

import Dashboard from './Page/Dashboard'
import Product from './Page/MyBlogs'
import AddProduct from './Page/AddBlogs'
import Settings from './Page/Settings'
import TextEditor from './Page/TextEditor'

import BlogDetails from './Component/BlogDetails'
import BlogDetailsPage from './Component/BlogDetailsPage'




export default function App() {
  return (
 <>
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/addproduct' element={<AddProduct />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/texteditor' element={<TextEditor />}></Route>
        <Route path="/blog" component={<BlogDetails />}></Route>
   
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
    </Routes>
  </BrowserRouter>
 </>
  )
}
