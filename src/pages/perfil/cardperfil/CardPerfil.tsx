import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthLogin";
import { buscar } from "../../../services/service";
import { Alerta } from "../../../utils/Alerta";
import { RotatingLines } from "react-loader-spinner";
import Plano from "../../../model/Plano";

export default function CardPerfil(){

    const { usuario, setUsuario } = useContext(AuthContext)
    const [plano, setPlano] = useState<Plano>()
    const navigate = useNavigate()

    async function buscarUsuario() {
        try {
            await buscar(`/usuarios/${usuario.id}`, setUsuario)
        } catch (error: any) {
            Alerta(`Não foi possível buscar o usuário: ${usuario.id}`, "erro")
        }
    }

    useEffect(() => {
        if (usuario?.id) {
          buscarUsuario();
        }
    }, [usuario?.id]);

    useEffect(() => {
        if (usuario?.plano) {
          setPlano(usuario.plano);
        }
        else{
            Alerta(`Não foi possível buscar o plano do usuário: ${usuario.nome}`, "erro")
        }
    }, [usuario?.plano]);

    useEffect(() => {
        if(usuario.id === 0){
            Alerta("Você precisa estar logado!", "erro")
            navigate("/")
        }
    }, [usuario])

    
    return (
        <>
            <div className="flex justify-center">
                {usuario.id === undefined && (<RotatingLines strokeColor="black" strokeWidth="1.5" animationDuration="0.75" width="100" visible={true} /> )}
            </div>
            <div className="flex justify-center w-full h-full">
                <div className='flex flex-col rounded-xl shadow-lg overflow-hidden justify-between w-2/6 my-10'>
                    <header className='py-8 px-6 text-black text-3xl text-center'>Perfil</header>
                    <p className='py-4 text-xl text-center h-full'>Nome: {usuario.nome}</p>
                    <p className='py-4 text-xl text-center h-full'>Altura: {usuario.altura}m</p>
                    <p className='py-4 text-xl text-center h-full'>Peso: {usuario.peso}kg</p>
                    <p className='py-4 text-xl text-center h-full'>Plano: {plano?.nomePlano}</p>
                    <div className="flex">
                    <Link to={`/editarperfil/${usuario.id}`}
                        className='w-full text-white bg-black hover:underline flex items-center justify-center py-2'>
                        <button>Editar</button>
                    </Link>

                    <Link to={`/deletarperfil/${usuario.id}`} className='text-black border bg-slate-50 hover:border-red-500 hover:bg-red-500 hover:text-white hover:underline w-full flex items-center justify-center'>
                        <button>Deletar</button>
                    </Link>
                    </div>
                </div>
            </div>

        </>
    )
}