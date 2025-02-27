import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthLogin";
import Usuario from "../../model/Usuario";
import { RotatingLines } from "react-loader-spinner";

export default function Login() {

    const { usuario, handleLogin, isLoading } = useContext(AuthContext)
    const [usuarioLogin, setUsuarioLogin] = useState<Usuario>({} as Usuario)
    const navigate = useNavigate();

    useEffect(() => {
        if (usuario.id != null) {
            navigate('/treinos')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 
                    h-screen place-items-center font-bold ">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4"
                    onSubmit={login}>
                    <h2 className="text-slate-900 text-3xl ">Boas-vindas ao Espaço do Cliente</h2>
                    <p>Use seu acesso para gerenciar a sua conta!</p>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">E-mail</label>
                        <input type="text" id="usuario" name="usuario" placeholder="example@example.com.br" className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" name="senha" placeholder="********" className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button
                        type='submit'
                        className="py-2 px-28 rounded-md bg-black text-white text-center">  
                        { isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Entrar</span> }
                    </button>

                    <hr className="border-slate-800 w-full" />

                    <p> Ainda não tem uma conta?{' '} </p>
                    <p> <Link to="/planos" className="text-black text-center hover:underline">Cadastre-se</Link> </p>
                </form>

                <img src="/home2.svg" alt="" className="hidden lg:block w-4/6"/>

            </div>
        </>
    );
}