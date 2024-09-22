'use client'

import { useEffect, useState } from "react";
import Pagina from "../components/Pagina";

export default function Filmes() {
  // Armazenar um dado para que o React saiba que ele sofreu alguma mudança e mude de tela.
  const [ filmes, setFilmes ] = useState([]);

  // Efeito Colateral
  useEffect(() => {
    console.log(filmes)
    console.log("filmes")
    
    setTimeout(() => {
      setFilmes(["filme1", "filme2"])
    }, 4000)
    
  }, [])


  return (
    <Pagina titulo="Filmes Populares">

      <ul>
          { 
            filmes.map(filme => {
              return <li>{filme}</li>
            }) 
          }
      </ul>

    </Pagina>
  )
}
