import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutUs } from './pages/aboutUs/AboutUs.tsx'
import { Blog } from './pages/blog/Blog.tsx'
import { ContactUs } from './pages/contact/ContactUs.tsx'
import { PrivatePolicy } from './pages/privatePolicy/PrivatePolicy.tsx'
import { BlogPosts } from './pages/blogPosts/BlogPosts.tsx'
import { Provider } from 'react-redux'
import { store } from './lib/store.ts'
import { Error404 } from './components/Error.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/policy" element={<PrivatePolicy />} />
          <Route path="/blogPosts" element={<BlogPosts />} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
