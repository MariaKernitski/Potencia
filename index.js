const prompt = require ('prompt-sync')();
let base = prompt ('Digite a base:');
let expo = prompt ('Digite o expoente:');
base = Number(base)
expo = Number(expo)
var base2 = base;
var resul = base;

    for (let i = 1; i < expo; i++) {
        for (let f =1; f < base;f++){
            resul = base2 + resul;
        }
        base2 = resul;
    }
    console.log("Resultado: " + resul)
