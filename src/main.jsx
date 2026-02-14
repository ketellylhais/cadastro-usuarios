//fiscaliza se o código está correto
import { StrictMode } from 'react'

//isso faz o react aparecer na tela
import { createRoot } from 'react-dom/client'

import { GlobalStyles } from './styles/GlobalStyles.js'

import router from './routes.jsx'
import { RouterProvider } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router} />
  </StrictMode>,
)
