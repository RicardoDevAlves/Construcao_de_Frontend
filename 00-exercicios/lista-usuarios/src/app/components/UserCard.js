import { Card, ListGroup } from 'react-bootstrap';
import Link from 'next/link';

const UserCard = ({ user }) => {
  return (
    <Link href={`/users/${user.id}`} passHref>
      <Card style={{ cursor: 'pointer', marginBottom: '20px' }}>
        <Card.Img variant="top" src={user.image} alt={`${user.firstName} ${user.lastName}`} />
        <Card.Body>
          <Card.Title>{user.firstName} {user.lastName}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Idade: {user.age}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default UserCard;
