// // const rock = 1;
// // const paper = 2;
// // const scissors = 3;
// const computerChoice = Math.floor(Math.random() * 3) + 1;

// const userChoice = prompt("Escolha 1 (pedra), 2 (papel), 3 (tesoura)");

// let playerPoint = 0;
// let computerPoint = 0; 


// function game(userChoice, computerChoice) {
//     alert(`Você escolheu ${userChoice} e seu adversário escolheu ${computerChoice}`);
    

//     const result = userChoice + computerChoice;

//     switch(result){
//         case '11':
//         case '22':
//         case '33':
//             alert("Empate. Ninguém marcou ponto!")
//         break

//         case '13':
//         case '21':
//         case '32':
//             alert("Você ganhou um ponto!")
//             playerPoint++
//         break

//         case '12':
//         case '23':
//         case '31':
//             alert("O computador ganhou um ponto!")
//             computerPoint++
//         break

//         default:
//             alert("Escolha um número de 1 a 3")
//     }

//     alert(playerPoint)
//     // switch()
// }

// game(userChoice, computerChoice)

let contadorPessoa = 0;
let contadorMaquina = 0;

while (contadorMaquina || contadorPessoa < 2 ) {
  let escolhaPessoa = parseInt(prompt("Digite o número que você escolheu: \n1 - Pedra \n2 - Papel \n3 - Tesoura "));
  alert("Vc escolheu " + escolhaPessoa);

  let maquina = Math.floor(Math.random() * 3) + 1;
  alert("Computador escolheu " + maquina);

  switch (escolhaPessoa) {
    case 1:
      if (maquina == 2) contadorMaquina++;
      else if (maquina == 3) contadorPessoa++;
      break;
    case 2:
      if (maquina == 3) contadorMaquina++;
      else if (maquina == 1) contadorPessoa++;
      break;
    case 3:
      if (maquina == 1) contadorMaquina++;
      else if (maquina == 2) contadorPessoa++;
      break;
      default:
          alert("Digite um número de 1 a 3")
  }

  alert("Seus pontos: " + contadorPessoa + "\nProntos maquina: " + contadorMaquina);
}

alert(contadorMaquina > contadorPessoa ? "Maquina ganhou" : "Você ganhou!");
// if(contadorPessoa == 2){
//     alert("Parabén, você venceu!")
// } else if(contadorMaquina == 2) {
//     alert("A máquina venceu. Tetne novamente")
// }
