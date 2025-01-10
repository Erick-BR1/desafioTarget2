const n = 21

let t1 = 0
let t2 = 1

while (t1 < n) {

    if (t1 === n) {
        console.log(`O número ${n} está na sequência de Fibonacci.`)
        break;
    }

    const t3 = t1 + t2;
    t1 = t2;
    t2 = t3;
}

if (t1 !== n) {
    console.log(`O número ${n} não se encontra na sequência de Fibonacci.`);
}