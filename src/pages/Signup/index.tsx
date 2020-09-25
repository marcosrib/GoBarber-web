import React from 'react';

import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const Signup: React.FC = () => {
  return (
    <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="goBarber" />
      <Form>
        <h1>Faça seu cadastro</h1>
        <Input icon={FiUser} name="nome" placeholder="Nome" />
        <Input icon={FiMail} name="email" placeholder="E-email" />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="password"
        />
        <Button type="submit">Entrar</Button>
      </Form>
      <a href="conta">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
  )
}

);

export default Signup;
