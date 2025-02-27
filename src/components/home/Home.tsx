import { Link } from "react-router-dom";

export default function Home(){
    return(
        <main className="w-full h-full flex flex-col justify-center">
            <h2 className='text-5xl font-bold text-black text-center pb-20'> Venha treinar e descubra a melhor experiência de treinos </h2>
            <div className="flex justify-center items-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-8 items-center justify-center">
                        <div className="flex flex-col justify-center">
                            <img src="/run.svg" alt="" className="w-40"/>
                            <p className="text-black text-5xl text-center">Fitness</p>
                        </div>
                        <p className="text-black">Suas escolhas definem o ritmo da sua vida!</p>
                        <div className="gap-4 flex flex-col">
                            <Link to="/login">
                                <p className="py-2 px-28 rounded-md bg-black text-white text-center">Login</p>
                            </Link>
                            <Link to={"/planos"}>
                                <p className="py-2 px-28 rounded-md text-black text-center border border-black">Cadastre-se</p>
                            </Link>
                        </div>
                    </div>
                    <div id="imagem" className="flex justify-center">
                        <img src="/home.svg" alt="Imagem de duas pessoas treinando" className="w-3/3"/>
                    </div>
                </div>
            </div>
        </main>
    );
}