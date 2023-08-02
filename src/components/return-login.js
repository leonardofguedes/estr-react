import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Message = styled.h1`
  margin-bottom: 20px;
`;

const LoginButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ReturnLoginPage = () => {
    const nagigate = useNavigate()
    const handleLoginClick = () => nagigate('/');

  return (
    <LoginPageContainer>
      <Message>Por favor, faça login</Message>
      <LoginButton onClick={handleLoginClick}>Faça Login</LoginButton>
    </LoginPageContainer>
  );
};

export default ReturnLoginPage;