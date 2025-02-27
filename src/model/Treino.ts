import Usuario from "./Usuario";

export default interface Treino{
    id: number,
    exercicio: string;
	serie: number,
	carga: string,
    descanso: string,
	usuario: Usuario | null;
}