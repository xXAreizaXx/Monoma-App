// ReactJS
import { createContext, useState } from "react";

// Constants
import { users } from "@constants/index";

// External Dependencies
import { Toaster, toast } from "sonner";

interface AuthContextProps {
    isAuthenticated: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
});

export const AuthProvider: React.FC<ComponentProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (email: string, password: string) => {
        const user = users.find((user) => user?.email === email && user?.password === password);

        if (user) {
            setIsAuthenticated(true);
            localStorage.setItem("isAuthenticated", "true");
        }
        else {
            toast.error("Invalid credentials");
            setIsAuthenticated(false);
            localStorage.setItem("isAuthenticated", "false");
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.setItem("isAuthenticated", "false");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            <Toaster position="top-right" expand={true} richColors/>
            {children}
        </AuthContext.Provider>
    );
};
