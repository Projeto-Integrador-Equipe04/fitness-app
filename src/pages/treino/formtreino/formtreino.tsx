import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Treino from "../../../model/Treino";
import { AuthContext } from "../../../context/AuthLogin";
import { atualizar, buscar, cadastrar } from "../../../services/service";
import { Alerta } from "../../../utils/Alerta";
import { RotatingLines } from "react-loader-spinner";

export default function FormTreino() {

    const navigate = useNavigate();

    const [treino, setTreino] = useState<Treino>({} as Treino)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario } = useContext(AuthContext)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/treinos/${id}`, setTreino)
        } catch (error: any) {
            Alerta(`Erro ao buscar o treino: ${id}, erro: ${error}`, "erro")
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTreino({
            ...treino,
            [e.target.name]: e.target.value,
            usuario: usuario
        })
    }

    function retornar() {
        navigate("/treinos")
    }

    async function gerarNovoTreino(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/treinos`, treino, setTreino)
                Alerta('O Treino foi atualizado com sucesso!', "sucesso")
            } catch (error: any) {
                Alerta(`Erro ao atualizar o treino: ${id}, erro: ${error}`, "erro")
            }
        } else {
            try {
                console.log(treino);
                await cadastrar(`/treinos`, treino, setTreino)
                Alerta(`O treino foi atualizado com sucesso`, "sucesso")
            } catch (error: any) {
                Alerta(`Erro ao criar o treino: ${treino.exercicio}`, "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Criar Treino' : 'Editar Treino'}
            </h1>
            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTreino}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="exercicio">Nome</label>
                    <input type="text" placeholder="Nome do exercício" name='exercicio' className="border-2 border-slate-700 rounded p-2"
                        value={treino.exercicio}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="serie">Nº de series</label>
                    <input type="number" placeholder="4" name='serie' className="border-2 border-slate-700 rounded p-2"
                        value={treino.serie}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="carga">carga</label>
                    <input type="text" placeholder="4" name='carga' className="border-2 border-slate-700 rounded p-2"
                        value={treino.carga}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="descanso">Descanso</label>
                    <input type="text" placeholder="2min" name='descanso' className="border-2 border-slate-700 rounded p-2"
                        value={treino.descanso}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-white bg-black hover:underline w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
                        <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true}/> :
                        <span>{id === undefined ? 'Criar' : 'Editar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}