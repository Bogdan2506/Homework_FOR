// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.

let number = parseInt(prompt(`Введіть ваше натуральне число`));
let result = '';
let countDivisors = 0;
let sumDivesors = 0;

if (number > 0 && Number.isInteger(number)) {
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            result += i + ', ';

            if (i % 2 === 0) {
                countDivisors++;
                sumDivesors += i;
            }
        }
    }
    alert(`Дільники числа ${number}: ` + result);
    alert(`Кількість парних дільників: ${countDivisors}`);
    alert(`Сума парних дільників: ${sumDivesors}`);
} else {
    alert(number + ' не є натуральним числом.');
}