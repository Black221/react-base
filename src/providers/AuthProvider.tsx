import  {createContext, useState} from "react";


interface AuthContext {
    login: (data: any) => void;
    logout: () => void;
}
export const AuthStateContext = createContext<AuthContext>({} as AuthContext);

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {

    const [user, setUser] = useState<any>(null);

    const login = (data: any) => {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
    }

    const logout = () => {
        user?.deleteUser()
    }


    return (
        <AuthStateContext.Provider value={{
            login, logout,
        }}>
            {children}
        </AuthStateContext.Provider>
    )
}
