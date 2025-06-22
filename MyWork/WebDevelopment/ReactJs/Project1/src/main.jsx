// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import app from "./App"
import { createRoot } from "react-dom/client"

createRoot(document.querySelector("#root")).render(
  app()  
)