import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutUs } from './pages/aboutUs/AboutUs.tsx'
import { Blog } from './pages/blog/Blog.tsx'
import { ContactUs } from './pages/contact/ContactUs.tsx'
import { PrivatePolicy } from './pages/privatePolicy/PrivatePolicy.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/policy" element={<PrivatePolicy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
