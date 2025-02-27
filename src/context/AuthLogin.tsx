import { createContext, ReactNode, useState } from "react"
import { login } from "../services/service"
import { Alerta } from "../utils/Alerta"
import Usuario from "../model/Usuario"
import Treino from "../model/Treino"

interface AuthContextProps {
    usuario: Usuario,
    setUsuario: (usuario: Usuario) => void,
    treino: Treino[],
    setTreino: (treino: Treino[]) => void,
    handleLogout(): void,
    handleLogin(usuario: Usuario): Promise<void>,
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<Usuario>({} as Usuario)
    const [treino, setTreino] = useState<Treino[]>([])
    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(usuario: Usuario) {
        setIsLoading(true)
        try {
            await login(`/usuarios/login`, usuario, setUsuario)
            Alerta("Usuário foi autenticado com sucesso!", "sucesso")
        } catch (error) {
            Alerta("Os Dados do usuário estão inconsistentes!", "erro")
        }
        setIsLoading(false)
    }

    function handleLogout() {
        setUsuario({} as Usuario);
        setTreino([]);
    }

    return (
        <AuthContext.Provider value={{ usuario, setUsuario, treino, setTreino, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}