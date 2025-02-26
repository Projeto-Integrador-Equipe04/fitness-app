import { Link } from "react-router-dom";

export default function Home(){
    return(
        <main className="w-full h-full flex flex-col justify-center">
            <div className="flex justify-center items-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-14 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold text-black'> Venha treinar e descubra a melhor experiência de treinos </h2>
                        <div className="gap-4 flex flex-col">
                            <Link to={""}>
                                <p className="py-2 px-28 rounded-md bg-black text-white text-center border border-black ">Login</p>
                            </Link>
                            <Link to={""}>
                                <p className="py-2 px-28 rounded-md text-black text-center border border-black">Cadastre-se</p>
                            </Link>
                        </div>
                    </div>
                    <div id="imagem" className="flex justify-center">
                        <img src="/home.svg" alt="Imagem de duas pessoas treinando" className="w-2/3"/>
                    </div>
                </div>
            </div>
        </main>
    );
}