import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="goBarber" />
      <form>
        <h1>Faça seu logon</h1>
        <input placeholder="E-email" />
        <input type="password" placeholder="password" />
        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="conta">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default Signin;
