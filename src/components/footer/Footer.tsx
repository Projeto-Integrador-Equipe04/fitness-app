import { ReactNode, useContext } from "react";
import { AuthContext } from "../../context/AuthLogin";

export default function Footer(){
    
    const { usuario } = useContext(AuthContext)
    const data = new Date().getFullYear();

    let componente: ReactNode;

    if(usuario.id != undefined){
        componente = (
            <footer className="w-full flex justify-center border-t-2 border-[#9c9a9a17]">
            <div className="w-full py-4 flex items-center justify-center gap-2">
                <div className="flex flex-col">
                    <img src="/run.svg" alt="Logo da Fitness" className="w-14"/>
                    <h1 className="text-lg">Fitness</h1>
                </div>
                <p>Todos os direitos reservados - {data}</p>
            </div>
            </footer>
        )
    }

    return(
        <>
            { componente } 
        </>
    );
}