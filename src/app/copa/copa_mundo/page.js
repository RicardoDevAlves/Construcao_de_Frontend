import { useEffect, useState } from 'react'
import Pagina from '@/app/components/Pagina'
import apiCopa from '@/app/apis/apiCopa'

export default function page() {

    const [selecoes, setSelecoes] = useState([])

    // Fazer algo quando iniciar o componente

    useEffect(() => {

        // Buscar os filmes
        buscarSelecao()

    }, [])


    async function buscarSelecao() {
        const resultado = await apiCopa.get("/copa_mundo")
        const timesRecebidos = resultado.data.results
        console.log(timesRecebidos)
        setSelecoes(timesRecebidos)
    }


    return (

        <Pagina titulo="Detalhes da Copa do Mundo">

            <Row md={4}>

                {selecoes.map(selecao => {
                    return (
                        <Pagina>
                            
                        </Pagina>
                    )
                })}


            </Row>

        </Pagina>


    )
}