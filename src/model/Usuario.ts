import Plano from "./Plano";
import Treino from "./Treino";

export default interface Usuario{
    id: number,
    nome: string,
    usuario: string;
    senha: string,
    foto: string;
    peso: number,
    altura: string;
	treinos: Treino[] | null;
    plano: Plano | null
}