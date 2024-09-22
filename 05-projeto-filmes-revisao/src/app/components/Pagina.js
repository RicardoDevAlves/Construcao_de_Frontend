import {Container, Nav, Navbar} from 'react-bootstrap'

export default function Pagina(props) {

  return (
    <>
      
      {/* Barra de Navegação */}
      <Container>
          <Navbar.Brand href="/filmes">Movies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>

      {/* Barra de Título */}


      {/* Filhos -> Código da página */}


    </>
  )
}
