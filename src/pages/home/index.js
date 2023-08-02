import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../contexts/auth-context";

const AtendimentosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

const LogoutButton = styled(Button)`
  margin-right: 32px;
  margin-bottom: 0;
`;

const HeaderContainer = styled.header`
  height: 38px;
  width: 100vw;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 16px;
  background-color: #f2f2f2;
`;

const Home = () => {
  const { logout } = useContext(AuthContext);

  return (
    <AtendimentosContainer>
      <HeaderContainer>
        <LogoutButton onClick={logout}>Logout</LogoutButton>
      </HeaderContainer>
      <h1>Home Estracta</h1>
      <Link to="/lista">
        <Button>Lista</Button>
      </Link>
    </AtendimentosContainer>
  );
};

export default Home;
