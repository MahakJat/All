import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/Store.jsx'
createRoot(document.getElementById('root')).render(
  //provider se hum humare app ko store ke data se wrap karte hai jo ki read only hota hai}
  // <StrictMode> 
    <Provider store={store}>
    <App />
    </Provider>
  // </StrictMode>,
)
