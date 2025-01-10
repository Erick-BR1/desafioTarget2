const faturamentoMensal = [
    { "dia": 1, "valor": 221.3 },
    { "dia": 2, "valor": 0.0 },
    { "dia": 3, "valor": 120.5 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 345.0 },
    { "dia": 6, "valor": 0.0 },
    { "dia": 7, "valor": 410.2 },
];

const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor);

const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

const somaFaturamento = diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0);
const mediaMensal = somaFaturamento / diasComFaturamento.length;

const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

console.log(`Menor faturamento diário: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento diário: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);