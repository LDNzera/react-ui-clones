import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Pedro Galembeck" />

      <Role>Offline - 7</Role>
      <UserRow nickname="Diego Fernandes" isBot />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" isBot />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" />
      <UserRow nickname="Usuário n/ encontrado" isBot />
      <UserRow nickname="Usuário n/ encontrado" isBot />
    </Container>
  );
};

export default UserList;