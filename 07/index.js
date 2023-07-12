const populacao = 1000;
const x = 4;
const tempoPercorrido = 7;

const infectados = populacao * (x ** (tempoPercorrido / 7))

console.log(infectados.toFixed())