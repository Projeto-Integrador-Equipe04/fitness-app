import { useEffect, useState } from "react";

import { RotatingLines } from "react-loader-spinner";
import CardPlano from "../cardplano/CardPlano";
import Plano from "../../../model/Plano";
import { buscar } from "../../../services/service";
import { Alerta } from "../../../utils/Alerta";

export default function ListaPlanos(){

    const [planos, setPlanos] = useState<Plano[]>([])

    async function buscarPlanos() {
        try {
            await buscar('/planos', setPlanos)
        } catch (error: any) {
            Alerta(error, "erro")
        }
    }

    useEffect(() => {
        buscarPlanos()    
    }, [planos.length])
    
    return (
        <>
            <h2 className="text-3xl text-center mt-4">Escolha seu plano ideal</h2>
            <div className="flex justify-center">
                {planos.length === 0 && (<RotatingLines strokeColor="black" strokeWidth="1.5" animationDuration="0.75" width="100" visible={true} /> )}
            </div>
            <div className="flex justify-center w-full">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {planos.map((plano) => (
                                <CardPlano key = {plano.id} plano = {plano} />
                            ))}
                    </div>
                </div>
            </div>
        </>
    )

}