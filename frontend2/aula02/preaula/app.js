// alert("Olá, visitante!");

// // o comando alert segura a execução

// alert("Que bom que clicou em OK :)");

// let resultado = confirm("Deseja realmente excluir este cliente?");

// console.log(resultado);

// confirm gera uma caixa para clicar em Ok ou Cancelar - isso gera no console TRUE ou FALSE

// let nome = prompt("Digite seu nome: ");

// // alert("Olá, " + nome + "!");

// document.querySelector('h1').innerText += ', ' + nome;

let tratamentoPersonalizado = confirm("Deseja um tratamento personalizado?")

if(tratamentoPersonalizado = true) {
  let nome = prompt("Por favor, digite seu nome");
   alert("Bem-vindo ao nosso site, "+ nome +". Muito obrigado pela sua visita, estamos à sua disposição! ?");
} else {
   alert("Obrigado por conectar.")
}
    