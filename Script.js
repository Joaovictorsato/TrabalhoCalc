const soma = (a, b) => a + b;

const subtracao = (a, b) => a - b;

const operacoes = {'+': soma, '-': subtracao};

function calculadora() {
  const op = prompt("Qual operação deseja realizar? (+ ou -)");
  if (op in operacoes) {
    const a = parseFloat(prompt("Digite o primeiro número: "));
    const b = parseFloat(prompt("Digite o segundo número: "));
    const resultado = operacoes[op](a, b);
    alert("Resultado: " + resultado);
  } else {
    alert("Operação inválida");
  }
}

calculadora();