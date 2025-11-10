import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Button from './components/Button.tsx'
import Header1 from './components/Header1.tsx'
import Image from './components/Image.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header1 />
    <Button />
    <Image />
  </StrictMode>,
)
