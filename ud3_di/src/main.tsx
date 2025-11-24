import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DivUserActions from './components/DivUserActions.tsx'
import Table from './components/Table.tsx'
import './index.css'
import DivImage from './components/DivImage.tsx'
import ButtonExampleFunctions from './components/ButtonExampleFunctions'
import InputExampleEvent from './components/InputExampleEvent'
import DivPilots from './components/DivPilots'
import ButtonUseState from './components/ButtonUseState.tsx'
import InputUseState from './components/InputUseState'
import Carousel from './components/Carousel'
import FormUseState from './components/FormUseState'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <FormUseState />
  </StrictMode>,
)
