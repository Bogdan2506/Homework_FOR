// Надрукувати повну таблицю множення від 1 до 10.


let i = 0;
let j = 0;
let result = '';
for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        result = i * j;
        console.log(`${i} * ${j} = ${result}`);
    }
    console.log('**********************');
}