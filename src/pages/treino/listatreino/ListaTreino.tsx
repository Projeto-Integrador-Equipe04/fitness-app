import { useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthLogin";
import CardTreino from "../cardtreino/CardTreino";
import { Alerta } from "../../../utils/Alerta";
import { buscar } from "../../../services/service";
import Treino from "../../../model/Treino";

export default function ListaTreino() {

    const navigate = useNavigate();
    const { usuario, setUsuario } = useContext(AuthContext);
    const [treino, setTreino] = useState<Treino[]>([]);
    const idUsuario: string = usuario?.id.toString();

    async function buscarUsuarioPorId(id: string){
        try{
            await buscar(`usuarios/${id}`, setUsuario)
        }
        catch(error: any){
            Alerta(`Não foi possível buscar o usuário`, "erro")
        }
    }

    useEffect(() => {
        if (usuario && usuario.treinos) {
            buscarUsuarioPorId(idUsuario);
            setTreino(
                usuario.treinos
            );
        }
    }, [usuario]);

    useEffect(() => {
        if(usuario.id === undefined && usuario.id === 0){
            Alerta("Você precisa estar logado!", "erro")
            navigate("/")
        }
    }, [usuario])
    
    return (
        <>
            <div className="flex justify-center">
                {treino.length === 0 && (<RotatingLines strokeColor="black" strokeWidth="1.5" animationDuration="0.75" width="100" visible={true} /> )}
            </div>
            <div className="flex justify-center w-full mb-44">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treino.map((treino) => (
                            <CardTreino key = {treino.id} treino = {treino} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}