import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import apiUsuarios from '../../api/apiUsuarios';
import UserDetails from '../../componentes/UserDetails';
import { Container } from 'react-bootstrap';

const UserDetailsPage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      // Faz a requisição para obter os detalhes do usuário
      apiUsuarios.get(`/users/${id}`)
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.error('Erro ao buscar detalhes do usuário:', error);
        });
    }
  }, [id]);

  if (!user) return <div>Carregando...</div>;

  return (
    <Container>
      <UserDetails user={user} />
    </Container>
  );
};

export default UserDetailsPage;
