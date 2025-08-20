import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route,Link } from "react-router";
import Chat from './components/Chat.jsx';

createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/Chat.jsx' element={<Chat/>}/> 
    </Routes>
  </BrowserRouter>,


)
