import React, { useState, useEffect } from 'react';
import apiUsuarios from '../api/apiUsuarios';
import UserCard from '../componentes/UserCard';
import { Container, Row, Col } from 'react-bootstrap';

const UsersListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Faz a requisição para a API de usuários
    apiUsuarios.get('/users')
      .then(response => {
        setUsers(response.data.users);  // Define os dados dos usuários no estado
      })
      .catch(error => {
        console.error('Erro ao buscar usuários:', error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {users.map(user => (
          <Col key={user.id} xs={12} md={6} lg={4}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UsersListPage;
