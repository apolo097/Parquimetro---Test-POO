export function converterParaNumero(texto) {
    const valor = Number(
        texto.replace(',', '.')
    );
    return valor;
}

export function formatarMoeda(valor){
      const trocoFormatado = valor.toLocaleString('pt-BR', {
        style:'currency',
        currency: 'BRL'
    });
return trocoFormatado;
}

export const TARIFAS = [
    {valor: 1.0, minutos: 30},
    {valor: 1.75, minutos: 60},
    {valor: 3.0, minutos: 120}
];

export function encontrarTarifa(valor, tarifas = TARIFAS){
    return [...tarifas].reverse().find(tarifa => valor >= tarifa.valor);
}

export function calcularTempoMaximo(tarifas = TARIFAS) {
    return tarifas.reduce((maior, tarifa) => Math.max(maior, tarifa.minutos),0);
}

export function gerarLinhasTabela(tarifas = TARIFAS) {
    return tarifas.map(tarifa => `<tr><td>${formatarMoeda(tarifa.valor)}</td><td>${tarifa.minutos} Minutos</td></tr>`);
}