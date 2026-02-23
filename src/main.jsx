import { BrowserRouter,Routes, Route } from 'react-router-dom'

import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import Home from './pages/home.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App/>}/> */}
      <Route path='/home' element={<Home/>}/>
      <></>
    </Routes>
  </BrowserRouter>

)
