//FOR IN

// let usuario ={
//     nome: "Marcel",
//     idade: 28,
//     eProfessor: true, 
//     endereco: { 
//         cidade: "Foz do Iguaçu",
//         estado: "PR"
//     }
// };
// //console.log(usuario);

// for (let objeto in usuario) {
//     console.log(usuario[objeto].cidade)
// }

//FOR OF

// let arrayFrutas = ["Maça", "Abacaxi", "Manga"]


// // for (let index = 0; index < arrayFrutas.length; index++) {
// //     const element = arrayFrutas[index]
    
// // }

// for (let item of arrayFrutas) {
//     console.log(item)
// }


let arrayUsuario = []

let usuario1 ={
        nome: "Marcel",
        idade: 28,
        eProfessor: true, 
        endereco: { 
            cidade: "Foz do Iguaçu",
            estado: "PR"
        }
    };

    let usuario2 ={
        nome: "Pedro",
        idade: 28,
        eProfessor: true, 
        endereco: { 
            cidade: "Foz do Iguaçu",
            estado: "PR"
        }
    };

    let usuario3 ={
        nome: "Marcos",
        idade: 28,
        eProfessor: true, 
        endereco: { 
            cidade: "Foz do Iguaçu",
            estado: "PR"
        }
    };


    arrayUsuario.push(usuario1);
    arrayUsuario.push(usuario2);
    arrayUsuario.push(usuario3);

    
    
    // console.log(arrayUsuario)

    for(let usuario of arrayUsuario){

        for(let objt in usuario){
            console.log(usuario[objt])
                }
    }

    