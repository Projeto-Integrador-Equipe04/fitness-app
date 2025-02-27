import { useContext, useEffect, useState } from "react"
import { RotatingLines } from "react-loader-spinner"
import { useNavigate, useParams } from "react-router-dom"
import Usuario from "../../../model/Usuario"
import { buscar, deletar } from "../../../services/service"
import { Alerta } from "../../../utils/Alerta"
import { AuthContext } from "../../../context/AuthLogin"

export default function DeletarPerfil(){

    const navigate = useNavigate();
    const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
    const { handleLogout } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/usuarios/${id}`, setUsuario)
        } catch (error: any) {
            Alerta(`Erro ao buscar usuário, erro: ${error}`, `erro`);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id])

    function retornar() {
        handleLogout()
        navigate("/home");
    }

    function voltar(){
        navigate("/perfil")
    }

    async function deletarUsuario() {
        setIsLoading(true)

        try {
            await deletar(`/usuarios/${id}`)
            Alerta('Perfil de usuário removido com sucesso', "sucesso")
        } catch (error: any) {
            Alerta(`Erro ao remover perfil de usuário, erro: ${error}`, "erro")
        }

        setIsLoading(false)
        retornar()
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <div className='flex flex-col rounded-2xl shadow-lg overflow-hidden justify-between'>
                <h1 className='text-4xl text-center my-4'>Deletar perfil</h1>
                <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o perfil a seguir?</p>
                <header className='py-4 px-6 text-black text-xl text-center'>{usuario.nome}</header>
                <p className='p-4 text-lg h-full'>E-mail: {usuario.usuario}</p>
                <p className='p-4 text-lg h-full'>Plano: {usuario.plano?.nomePlano}</p>
                <div className="flex">
                    <button className='w-full text-white bg-black hover:underline flex items-center justify-center py-2'
                        onClick={voltar}>
                        Não
                    </button>
                    <button 
                        className='text-black border hover:border-b-red-500 hover:bg-red-500 hover:text-white hover:underline w-full flex items-center justify-center'
                        onClick={deletarUsuario}>
                        {isLoading ?
                            <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}