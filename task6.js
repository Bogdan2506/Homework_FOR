// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let i = 0;
let sum = 0;
let average = 0;
for (i = 1; i <= 500; i++) {
    sum += i;
}
average = sum / 500;
console.log(average);