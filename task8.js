// Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let i;
let result = ' ';
for (i = 200; i <= 1000; i++) {
    if (i % 3 === 0) { result += i + ', '; }

}

console.log(result);