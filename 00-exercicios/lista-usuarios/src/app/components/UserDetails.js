import { Card, ListGroup } from 'react-bootstrap';

const UserDetails = ({ user }) => {
  return (
    <Card style={{ width: '18rem', margin: '20px auto' }}>
      <Card.Img variant="top" src={user.image} alt={`${user.firstName} ${user.lastName}`} />
      <Card.Body>
        <Card.Title>{user.firstName} {user.lastName}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Email: {user.email}</ListGroup.Item>
          <ListGroup.Item>Telefone: {user.phone}</ListGroup.Item>
          <ListGroup.Item>Gênero: {user.gender}</ListGroup.Item>
          <ListGroup.Item>Idade: {user.age}</ListGroup.Item>
          <ListGroup.Item>Data de Nascimento: {user.birthDate}</ListGroup.Item>
          <ListGroup.Item>Universidade: {user.university}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default UserDetails;
