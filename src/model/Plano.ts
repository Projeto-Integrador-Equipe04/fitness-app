import Usuario from "./Usuario";

export default interface Plano{
    id: number,
	nomePlano: string,
	usuarios: Usuario[] | null;
}