const input = "Distribuidora";

function inverterString(str) {
    let invertida = "";

    for(let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida
}

const resultado = inverterString(input);
console.log(`String original: ${input}`);
console.log(`String invertida: ${resultado}`);