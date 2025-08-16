import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContexts.tsx'
import { PostProvider } from './contexts/PostContexts.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <PostProvider>
        <App />
      </PostProvider>
    </ThemeProvider>
  </StrictMode>,
)
