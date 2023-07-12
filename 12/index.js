const montante = 90000;
const capital = 60000;
const numeroDeParcelas = 24;

let taxaDeJuros = (montante / capital) ** (1 / numeroDeParcelas) - 1;

taxaDeJuros *= 100;
console.log(taxaDeJuros.toFixed(3));