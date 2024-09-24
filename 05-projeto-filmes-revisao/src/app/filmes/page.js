'use client'

import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Pagina from "../components/Pagina";
import apiFilmes from "../apis/apiFilmes";


export default function Filmes() {
  // Armazenar um dado para que o React saiba que ele sofreu alguma mudança e mude de tela.
  const [ filmes, setFilmes ] = useState([]);

  // Efeito Colateral
  useEffect(() => {
    console.log(filmes)
      // A requisição pra buscar os filmes
      buscarFilmes()
    
    
  }, [])

  async function buscarFilmes() {
      const resultado = await apiFilmes.get("/movie/popular?language=pt-BR")
      console.log(resultado.data.results)
      // alterando o estado filmes para receber os filmes da requisição
      setFilmes(resultado.data.results)
  }


  return (
    <Pagina titulo="Filmes Populares">

      <Row>
          { 
            filmes.map(filme => {
              return (
                <Col>
                  <Card>
                      <Card.Img src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
                      <Card.Title>{filme.original_title}</Card.Title>
                  </Card>
                </Col>
              )
            }) 
          }
      </Row>

    </Pagina>
  )
}
