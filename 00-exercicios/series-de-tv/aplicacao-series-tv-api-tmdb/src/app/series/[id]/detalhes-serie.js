import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import apiSeries from '../apis/apiSeries';
import { Container, Card, ListGroup } from 'react-bootstrap';

const DetalhesSerie = () => {
  const [serie, setSerie] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchSerie = async () => {
      try {
        const response = await apiSeries.get(`/tv/${id}`);
        setSerie(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes da série:', error);
      }
    };

    if (id) fetchSerie();
  }, [id]);

  if (!serie) return <p>Carregando...</p>;

  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} />
        <Card.Body>
          <Card.Title>{serie.name}</Card.Title>
          <Card.Text>{serie.overview}</Card.Text>
          <ListGroup>
            <ListGroup.Item>Data de Lançamento: {serie.first_air_date}</ListGroup.Item>
            <ListGroup.Item>Nota: {serie.vote_average}</ListGroup.Item>
            <ListGroup.Item>Temporadas: {serie.number_of_seasons}</ListGroup.Item>
            <ListGroup.Item>Episódios: {serie.number_of_episodes}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetalhesSerie;
