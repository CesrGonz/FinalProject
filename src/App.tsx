import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Icon from './assets/icon'
import Inventory from './pages/Inventory'

function App() {

  return (
    <>
      <BrowserRouter>
      <div className='flex flex-col w-screen'>
        <Navbar />
        <Icon /> 
        <div className='flex grow justify-center items-center'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/inventory" element={<Inventory/>} />
          </Routes>
        </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App