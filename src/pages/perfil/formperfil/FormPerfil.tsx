import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthLogin";
import { atualizar, buscar } from "../../../services/service";
import { Alerta } from "../../../utils/Alerta";
import { RotatingLines } from "react-loader-spinner";

export default function FormPerfil(){

    const { usuario, setUsuario } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/usuarios/${id}`, setUsuario)
        } catch (error: any) {
            Alerta(`Não foi possível encontrar o usuário: ${usuario.nome}, erro: ${error}`, "erro")
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function atualizarUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        try {
            await atualizar(`/usuarios`, usuario, setUsuario)
            Alerta(`Usuário cadastrado com sucesso`, "sucesso")
        } catch (error: any) {
            Alerta(`Erro ao atualizar usuário: ${usuario.nome}, erro: ${error}`, "erro")
        }

        setIsLoading(false)
        navigate("/perfil")
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">Editar perfil</h1>
            <form className="w-1/2 flex flex-col gap-4" onSubmit={atualizarUsuario}>
                <div className="flex flex-col gap-2">
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
                </div>
                <div className="flex justify-around w-full gap-8">
                    <Link to={"/perfil"} className='rounded-md text-black text-center border-2 border-black hover:underline w-1/2 py-2'>Cancelar</Link>
                    <button type='submit' className='rounded-md bg-black text-white text-center hover:underline w-1/2 py-2 flex justify-center'>
                    { isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="10" visible={true}/> : <span>Editar</span> }
                    </button>
                </div>
            </form>
        </div>
    );
}