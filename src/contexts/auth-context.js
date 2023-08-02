import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { getVerifyToke } from "../services/api-fake";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const verifyAuthReloadPages = async () => {
    const token = localStorage.getItem("Auth@token");
    if (!token) {
      window.alert("token não encontrado, por faça login!");
      return;
    }
    const { status } = getVerifyToke(token);

    if (status === 200) {
      const nome = localStorage.getItem("Auth@nome");
      setUser({ nome, token });
      setIsAuth(true);
      return;
    } else {
      setUser(null);
      setIsAuth(false);
      window.alert("token não encontrato, ou expirado!");
      localStorage.removeItem("Auth@name");
      localStorage.removeItem("Auth@token");
      return;
    }
  };

  const login = (data) => {
    setUser(data);
    setIsAuth(true);
    localStorage.setItem("Auth@name", data.nome);
    localStorage.setItem("Auth@token", data.token);
  };
  const logout = () => {
    setIsAuth(false);
    setUser(null);
    localStorage.removeItem("Auth@name");
    localStorage.removeItem("Auth@token");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuth, login, logout, verifyAuthReloadPages }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
