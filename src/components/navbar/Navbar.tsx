import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthLogin";

export default function Navbar(){

    const { handleLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    function logout(){
        handleLogout();
        navigate("/Login");
    }
    
    return(
        <nav className="w-full">
            <div className="w-full h-full py-4 px-10 shadow-md flex justify-between items-center gap-2">
                <div className="flex flex-col items-center">
                    <Link to="/">
                        <img src="/run.svg" alt="Logo da Fitness" className="w-14"/>
                        <h1 className="text-lg">Fitness</h1>
                    </Link>
                </div>
                <div className="flex gap-10">
                <Link to={"/criartreino"}>
                        <div className="flex gap-0.5">
                            <img src="/dumbbell.svg" alt="Ícone de Treino" className="w-7"/>
                            <p className="text-lg hover:underline">Criar Treino</p>
                        </div>
                    </Link>
                    <Link to={"/treinos"}>
                        <div className="flex gap-0.5">
                            <img src="/strengthtraining.svg" alt="Ícone de Treino" className="w-7"/>
                            <p className="text-lg hover:underline">Treinos</p>
                        </div>
                    </Link>
                    {/* <Link to={"/planos"}>
                        <div className="flex gap-1">
                            <img src="/wallet.svg" alt="Ícone de plano" className="w-4"/>
                            <p className="text-lg hover:underline">Planos</p>
                        </div>
                    </Link> */}
                    <Link to={""}>
                        <div className="flex gap-0.5">
                            <img src="/person.svg" alt="Ícone de perfil" className="w-5"/>
                            <p className="text-lg hover:underline">Perfil</p>
                        </div>
                    </Link>
                    <Link to="" onClick={logout}>
                        <div className="flex gap-0.5">
                            <img src="/exit.svg" alt="Ícone de sair" className="w-6"/>
                            <p className="text-lg hover:underline">Sair</p>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}