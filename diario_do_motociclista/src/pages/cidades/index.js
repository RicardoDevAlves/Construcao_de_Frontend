import React, { useState } from 'react';
import { buscarCidade } from '../../services/cidadesService';
import buscarLocal from '@/services/googlePlacesApi';

export default function Cidades() {
    const [cidade, setCidade] = useState('');
    const [resultados, setResultados] = useState([]);
    const [erro, setErro] = useState('');

    const handleBuscar = async () => {
        setErro(''); // Limpa o erro anterior
        setResultados([]); // Limpa os resultados anteriores
        try {
            buscarLocal();
            // const cidades = await buscarCidade(cidade);

            // if (cidades && cidades.results) {
            //     setResultados(cidades.results); // Atualiza com os resultados
            // } else {
            //     throw new Error('Nenhum resultado encontrado para a cidade informada.');
            // }
        } catch (error) {
            setErro('Erro ao buscar cidades. Tente novamente.'); // Mostra o erro no front-end
            console.error('Erro detalhado ao buscar cidades:', error.response || error.message || error); // Mostra detalhes no console
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Buscar Cidades</h1>
            <input
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="Digite o nome de uma cidade"
                style={{ padding: '10px', width: '300px', marginRight: '10px' }}
            />
            <button onClick={handleBuscar} style={{ padding: '10px 20px' }}>
                Buscar
            </button>

            {erro && <p style={{ color: 'red' }}>{erro}</p>} {/* Exibe mensagem de erro */}

            <ul>
                {resultados.map((local, index) => (
                    <li key={index}>{local.formatted_address}</li>
                ))}
            </ul>
        </div>
    );
}
