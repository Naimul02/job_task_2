import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Main from './layout/Main.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main></Main>
  </StrictMode>,
)
