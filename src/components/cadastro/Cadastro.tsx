import { Link, useParams } from 'react-router-dom'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
import { Alerta } from '../../utils/Alerta'
import Usuario from '../../model/Usuario'
import Plano from '../../model/Plano'
import { buscar, cadastrarUsuario } from '../../services/service'

export default function Cadastro() {

  const navigate = useNavigate()
  
  const [isLoading, setIsLoading] = useState<boolean>(false)
  
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario)

  const [plano, setPlano] = useState<Plano>({} as Plano)

  const { id } = useParams<{ id: string }>();

  const[confirmaSenha, setConfirmaSenha] = useState<string>("")

  async function buscarPorId(id: string) {
    try {
        await buscar(`/planos/${id}`, setPlano)
    } catch (error: any) {
        Alerta(error, "erro")
    }
  }
  
  useEffect(() => {
      if (id !== undefined) {
          buscarPorId(id)
      }
  }, [id])
  
  useEffect(() => {
    if (usuario.id != null){
      retornar()
    }
  }, [usuario])

  function retornar(){
    navigate('/login')
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
      plano: plano
    })
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
    setConfirmaSenha(e.target.value)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(confirmaSenha === usuario.senha && usuario.senha.length >= 8){

      setIsLoading(true)

      try{
        
        await cadastrarUsuario(`/usuarios`, usuario, setUsuario)
        Alerta('Usuário cadastrado com sucesso!', "sucesso")
      }catch(error){
        Alerta('Erro ao cadastrar o usuário!', "erro")
      }
    }else{
      Alerta("Dados do usuário inconsistentes! Verifique as informações do cadastro.", "sucesso")
      setUsuario({...usuario, senha: ''})
      setConfirmaSenha('')
    }

    setIsLoading(false)
  }
  
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <img src="/home3.svg" alt="" className='w-3/4'/>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3' onSubmit={(e: FormEvent<HTMLFormElement>) => cadastrarNovoUsuario(e)}>
          <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Nome" className="border-2 border-slate-700 rounded p-2" 
             value = {usuario.nome}
             onChange={
              (e: ChangeEvent<HTMLInputElement>) => 
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">E-mail</label>
            <input type="text" id="usuario" name="usuario" placeholder="example@example.com.br" className="border-2 border-slate-700 rounded p-2"
              value = {usuario.usuario}
              onChange={
                (e: ChangeEvent<HTMLInputElement>) => 
                  atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input type="text" id="foto" name="foto" placeholder="Foto" className="border-2 border-slate-700 rounded p-2"
              value = {usuario.foto}
              onChange={
                (e: ChangeEvent<HTMLInputElement>) => 
                  atualizarEstado(e)
              }
            />
          </div>
          <div className="w-full flex justify-between items-center">
                <label htmlFor="peso">Peso</label>
                <input type="number" id="peso" name="peso" placeholder="68.60" className="border-2 border-slate-700 rounded p-2"
                value = {usuario.peso}
                onChange={
                    (e: ChangeEvent<HTMLInputElement>) => 
                    atualizarEstado(e)
                }
                />
                <label htmlFor="altura">Altura</label>
                <input type="text" id="altura" name="altura" placeholder="1.70" className="border-2 border-slate-700 rounded p-2"
                value = {usuario.altura}
                onChange={
                    (e: ChangeEvent<HTMLInputElement>) => 
                    atualizarEstado(e)
                }
                />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" name="senha" placeholder="Senha" className="border-2 border-slate-700 rounded p-2"
              value = {usuario.senha}
              onChange={
                (e: ChangeEvent<HTMLInputElement>) => 
                  atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input type="password" id="confirmarSenha" name="confirmarSenha" placeholder="Confirmar Senha" className="border-2 border-slate-700 rounded p-2"
              value={confirmaSenha}
              onChange={
                (e: ChangeEvent<HTMLInputElement>) => 
                  handleConfirmarSenha(e)
                }
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <Link to={"/login"} className='rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2 text-center'>Cancelar</Link>
            <button type='submit' className='rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2 flex justify-center'>
              { isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="10" visible={true}/> : <span>Cadastrar</span> }
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
