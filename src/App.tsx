import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Login from './components/login/Login'
import { AuthProvider } from './context/AuthLogin'
import Cadastro from './components/cadastro/Cadastro'
import { ToastContainer } from 'react-toastify'
import ListaPlanos from './pages/plano/listaplanos/ListaPlanos'
import ListaTreino from './pages/treino/listatreino/ListaTreino'
import FormTreino from './pages/treino/formtreino/formtreino'
import DeletarTreino from './pages/treino/deletarTreino/DeletarTreino'

export default function App() {

  return (
    <>
      <AuthProvider> 
        <ToastContainer />
          <BrowserRouter>
            <div className='h-screen flex flex-col justify-between'>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/cadastro/:id' element={<Cadastro />}></Route>
                <Route path='/planos' element={<ListaPlanos />}></Route>
                <Route path='/treinos' element={<ListaTreino />}></Route>
                <Route path='/criartreino' element={<FormTreino />}></Route>
                <Route path='/editartreino/:id' element={<FormTreino />}></Route>
                <Route path='/deletartreino/:id' element={<DeletarTreino />}></Route>
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
      </AuthProvider>
    </>
  )
}
