function calcularFibonacci(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      const fibonacciSeries = [0, 1];
      for (let i = 2; i < n; i++) {
        const nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
        fibonacciSeries.push(nextNumber);
      }
      return fibonacciSeries;
    }
  }
  
  function obtenerNumero() {
    let numero;
    do {
      numero = prompt("Por favor, ingresa un número entero positivo:");
      numero = parseInt(numero);
    } while (isNaN(numero) || !Number.isInteger(numero) || numero < 1);
  
    return numero;
  }
  
  function main() {
    const n = obtenerNumero();
    const fibonacciSeries = calcularFibonacci(n);
  
    console.log(`Serie de Fibonacci con ${n} números:`);
    console.log(fibonacciSeries);
  
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `Serie de Fibonacci con ${n} números:<br>${fibonacciSeries.join(", ")}`;
  }
  
  main();
  