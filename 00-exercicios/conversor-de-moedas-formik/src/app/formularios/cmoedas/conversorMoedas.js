export const converterMoeda = (valor, moeda) => {
    const taxas = {
      dolar: 0.20,
      euro: 0.18,
      bitcoin: 0.00003,
    };
    return valor * (taxas[moeda] || 0);
  };
  