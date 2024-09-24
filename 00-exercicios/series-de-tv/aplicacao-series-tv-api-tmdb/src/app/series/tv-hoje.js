import React, { useEffect, useState } from 'react';
import apiSeries from '../apis/apiSeries';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';


const SeriesTvHoje = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await apiSeries.get('/tv/on_the_air?language=pt-BR');
        setSeries(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar séries na TV hoje:', error);
      }
    };

    fetchSeries();
  }, []);

  return (
    <Container>
      <h1>Séries na TV Hoje</h1>
      <Row>
        {series.map((serie) => (
          <Col key={serie.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} />
              <Card.Body>
                <Card.Title>{serie.name}</Card.Title>
                <Card.Text>
                  Lançamento: {serie.first_air_date} <br />
                  Nota: {serie.vote_average}
                </Card.Text>
                <Link href={`/series/${serie.id}`} passHref>
                  <Button variant="primary">Detalhes</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SeriesTvHoje;
