const valorQueTenho = 80;
const valorDoProtudo = 129.99;
const menos = valorDoProtudo - valorQueTenho;
const descontoEmPorcentagem = (menos * 100) / valorDoProtudo;

console.log(`O desconto é de ${descontoEmPorcentagem.toFixed(1)}%`);

