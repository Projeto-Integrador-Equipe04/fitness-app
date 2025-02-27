import { Link } from "react-router-dom"
import Treino from "../../../model/Treino"

interface CardTreinoProps{
    treino: Treino
}

export default function CardTreino({ treino }: CardTreinoProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-4 px-6 text-black text-xl text-center'>{treino.exercicio}</header>
            <p className='p-4 text-lg h-full'>Carga: {treino.carga}</p>
            <p className='p-4 text-lg h-full'>Nª de series: {treino.serie}</p>
            <p className='p-4 text-lg h-full'>Pausa: {treino.descanso}</p>
            <div className="flex">
            <Link to={`/editartreino/${treino.id}`}
                className='w-full text-white bg-black hover:underline flex items-center justify-center py-2'>
                <button>Editar</button>
            </Link>

            <Link to={`/deletartreino/${treino.id}`} className='text-black border bg-slate-50 hover:bg-red-500 hover:text-white hover:underline w-full flex items-center justify-center'>
                <button>Deletar</button>
            </Link>
            </div>
        </div>
    )
}