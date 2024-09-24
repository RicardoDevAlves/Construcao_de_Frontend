'use client'

import { Container, Nav, Navbar } from 'react-bootstrap';
import SeriesPopulares from './SeriesPopulares'; // Importando o componente

export default function Pagina(props) {

  return (
    <>
      {/* Barra de Navegação */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/series">Series</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/series">Series Hoje</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Barra de Título */}
      <div className='text-center text-white py-2 bg-secondary'>
        <h1>{props.titulo}</h1>
      </div>

      {/* Filhos -> Código da página */}
      <Container className='mt-2'>
        {props.children}
        <SeriesPopulares /> {/* Aqui estamos exibindo as séries populares */}
      </Container>
    </>
  );
}
