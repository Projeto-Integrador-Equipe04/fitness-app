import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <div className='h-screen flex flex-col justify-between'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}
