import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Treino from "../../../model/Treino"
import { buscar, deletar } from "../../../services/service"
import { Alerta } from "../../../utils/Alerta"
import { RotatingLines } from "react-loader-spinner"

export default function DeletarTreino() {

    const navigate = useNavigate()
    const [treino, setTreino] = useState<Treino>({} as Treino)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/treinos/${id}`, setTreino)
        } catch (error: any) {
            Alerta(`Erro ao buscar treino, erro: ${error}`, `erro`)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/treinos")
    }

    async function deletarTreino() {
        setIsLoading(true)

        try {
            await deletar(`/treinos/${id}`)
            Alerta('Treino apagado com sucesso', "sucesso")

        } catch (error: any) {
            Alerta(`Erro ao apagar treino, erro: ${error}`, "erro")
        }

        setIsLoading(false)
        retornar()
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <div className='flex flex-col rounded-2xl shadow-xl overflow-hidden justify-between'>
                <h1 className='text-4xl text-center my-4'>Deletar treino</h1>
                <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o treino a seguir?</p>
                <header className='py-4 px-6 text-black text-xl text-center'>{treino.exercicio}</header>
                <p className='p-4 text-lg h-full'>Carga: {treino.carga}</p>
                <p className='p-4 text-lg h-full'>Nª de series: {treino.serie}</p>
                <p className='p-4 text-lg h-full'>Pausa: {treino.descanso}</p>
                <div className="flex">
                    <button className='w-full text-white bg-black hover:underline flex items-center justify-center py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='text-black border hover:border-b-red-500 hover:bg-red-500 hover:text-white hover:underline w-full flex items-center justify-center'
                        onClick={deletarTreino}>
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