const faturamentoPorEstado = {
    SP: 67863.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const faturamentTotal = Object.values(faturamentoPorEstado).reduce((soma, valor) => soma + valor, 0);

const percentuais = {};

for(const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / faturamentTotal) * 100;
    percentuais[estado] = percentual.toFixed(2);
}

console.log("Percentual de representação por estado:");
for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}`);
}