const capital = 1000;
const taxaFixa = 0.125;
const periodoDeTempo = 5;

const montanteFinal = capital * (1 + taxaFixa) ** periodoDeTempo;

console.log(montanteFinal.toFixed());