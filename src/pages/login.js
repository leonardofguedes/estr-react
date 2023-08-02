import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { AuthContext } from "../contexts/auth-context";
import { getAuth } from "../services/api-fake";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const InputField = styled.input`
  padding: 8px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const clearLogin = () => {
    setSenha("");
    setUser("");
  };

  const handleUserChange = (e) => setUser(e.target.value);
  const handleSenhaChange = (e) => setSenha(e.target.value);

  const handleLogin = () => {
    const { data, status } = getAuth({ user, senha });
    if (status !== 200) {
      window.alert(`Erro de user/senha, tente novamente!`);
      clearLogin();
      return;
    }
    if (data) {
      login(data);
      navigate("/home");
    }
  };


  return (
    <LoginContainer>
      <h1>Tela de Login</h1>
      <InputField
        type="text"
        placeholder="Usuário"
        value={user}
        onChange={handleUserChange}
      />
      <InputField
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={handleSenhaChange}
      />
      <Button onClick={handleLogin}>Entrar</Button>
    </LoginContainer>
  );
};

export default Login;
