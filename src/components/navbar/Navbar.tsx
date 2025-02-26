import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="w-full">
            <div className="w-full h-full py-4 px-10 shadow-md flex justify-between items-center gap-2">
                <div className="flex flex-col items-center">
                    <img src="/run.svg" alt="Logo da Fitness" className="w-14"/>
                    <h1 className="text-lg">Fitness</h1>
                </div>
                <div className="flex gap-10">
                    <Link to={""}>
                        <div className="flex gap-0.5">
                            <img src="/dumbbell.svg" alt="Ícone de Treino" className="w-7"/>
                            <p className="text-lg hover:underline">Treino</p>
                        </div>
                    </Link>
                    <Link to={""}>
                        <div className="flex gap-1">
                            <img src="/wallet.svg" alt="Ícone de plano" className="w-4"/>
                            <p className="text-lg hover:underline">Plano</p>
                        </div>
                    </Link>
                    <Link to={""}>
                        <div className="flex gap-0.5">
                            <img src="/person.svg" alt="Ícone de perfil" className="w-5"/>
                            <p className="text-lg hover:underline">Perfil</p>
                        </div>
                    </Link>
                    <Link to={""}>
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