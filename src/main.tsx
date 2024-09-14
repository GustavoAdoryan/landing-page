import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Header from './page/header.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
  </StrictMode>
)
