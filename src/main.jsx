import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/*
header{
logo,
homeButt,
AboutButt,
CartButt,
}
body:{
search
card:{
image,
prodName,
description,
rating,
buynow button
}
}
footer{
log,
links,
contactIfo,
copyRight
}
*/ 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
