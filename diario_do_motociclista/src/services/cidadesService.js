import googlePlacesApi from './googlePlacesApi';

// Função para buscar cidades usando o endpoint do Google Places
export async function buscarCidade(cidade) {
    try {
        const response = await googlePlacesApi.get('/textsearch/json', {
            params: {
                query: cidade,
                type: 'locality', // Tipo para buscar apenas localidades (cidades)
            },
        });
        return response.data.results; // Retorna os resultados da API
    } catch (error) {
        console.error('Erro ao buscar cidades:', error.message);
        throw new Error('Erro ao buscar cidades');
    }
}
