'use client'
import { Container, Col, Image, Nav, Navbar, Row } from 'react-bootstrap';

export default function Pagina({ titulo, children }) {

    return (
        <>
            {/* Barra de Navegação */}
            <Navbar bg="primary">
                <Container>
                    <Navbar.Brand>Viagem dos Sonhos 2</Navbar.Brand>
                    <Nav>
                        <Nav.Link>Rotas</Nav.Link>
                        <Nav.Link>Cidades</Nav.Link>
                        <Nav.Link>PRFs</Nav.Link>
                        <Nav.Link>Pontos Turísticos</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* Barra de Título */}
            <div>
                <h1 className="text-center">{titulo}</h1>
            </div>

            {/* Conteúdo da Página */}
            <Container>
                {/* Imagem background */}
                <Row className="justify-content-center align-items-center bg-" style={{height: '100vh' }}>
                    <Col xs="auto">
                    <Image src="img/moto-painel.jpg" alt="moto-painel" roundedCircle style={{ width: '350px', height: '600px' }}/>

                    {/* Botões sobre a imagem */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(-50%, -50%',
                            display: 'flex',
                            gap: '10px'
                        }}
                    >
                        <button
                            style={{
                                padding: '10px 20px',
                                background: 'rgba(255, 255, 255, 0.8',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}></button>Cidades</div>
                    </Col>
                </Row>
                {children}
            </Container>
        </>
    )
}