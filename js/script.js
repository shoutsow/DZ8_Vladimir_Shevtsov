let name = prompt('Введите ваше имя', 'Вася');
let age = +prompt('Введите ваш возраст (полных лет)', '18');
let city = prompt('Введите город вашего проживания', 'Слоним');
let phone = prompt('Введите номер вашего телефона', '+375 29 777 77 77');
let email = prompt('Введите адрес вашей электронной почты', 'Vasya@gmail.com');
let company = prompt('Введите название компании, где вы работаете', 'МММ');

document.write("<p>" + "1) ", "Меня зовут " + name + ".", " Мне " + age + " лет" + "<br/>",
" Я проживаю в городе " + city + " и работаю в компании " + company + "<br/>",
" Мои контактные данные: " + phone + ", " + email + "</p>" + "<br/>" + "<br/>");

document.write("<p>" + "2) " + name + " родился в " + (2023 - age) + "-м", " году." + "</p>" + "<br/>" + "<br/>");

let stroka = prompt("Введите 6 цифр", 321322);

if ((+stroka[0] + +stroka[1] + +stroka[2]) == (+stroka[3] + +stroka[4] + +stroka[5])) {
    document.write("<p>" + "3) ", "Да, сумма первых трех цифр равняется сумме вторых трех цифр" 
    + "</p>" + "<br/>" + "<br/>")
}
else {
    document.write("<p>" + "3) ", "Нет, сумма первых трех цифр не равняется сумме вторых трех цифр или их не 6" 
    + "</p>" + "<br/>" + "<br/>")
}


let a = +prompt('Введите значение переменной a', 3);

(a > 0) ? document.write("<p>" + "4) ", "Верно" + "</p>" + "<br/>" + "<br/>") : 
        document.write("<p>" + "4) ", "Неверно" + "</p>" + "<br/>" + "<br/>")

/*if (a > 0) {
    document.write("<p>" + "4) ", "Верно" + "</p>" + "<br/>" + "<br/>")
}
else {
    document.write("<p>" + "4) ", "Неверно" + "</p>" + "<br/>" + "<br/>")
}*/

let a1 = 10, b = 2;

document.write("<p>" + "5.1) ", "Сумма переменных a и b равна: " + (a1 + b) + "</p>" + "<br/>");
document.write("<p>" + "5.2) ", "Разность переменных a и b равна: " + (a1 - b) + "</p>" + "<br/>");
document.write("<p>" + "5.3) ", "Произведение переменных a и b равно: " + (a1 * b) + "</p>" + "<br/>");
document.write("<p>" + "5.4) ", "Частное переменных a и b равно: " + (a1 / b) + "</p>" + "<br/>");
if (a1 + b > 1) {
document.write("<p>" + "5.5) ",
"Т.к. сумма переменных a и b больше 1, то квадрат этой суммы равен: "
+ ((a1 + b)**2) + "</p>" + "<br/>" + "<br/>")
}

if (a1 > 2) {
    document.write("<p>" + "6) ", "Верно" + "</p>" + "<br/>" + "<br/>")
}
else if (a1 < 11) {
    document.write("<p>" + "6) ", "Верно" + "</p>" + "<br/>" + "<br/>")
}
else if (b >= 6) {
    document.write("<p>" + "6) ", "Верно" + "</p>" + "<br/>" + "<br/>")
}
else if (b < 14) {
    document.write("<p>" + "6) ", "Верно" + "</p>" + "<br/>" + "<br/>")
}
else {
    document.write("<p>" + "6) ", "Неверно" + "</p>" + "<br/>" + "<br/>")
}

let n = prompt("Введите значение n (число от 0 до 59)", 25);

if (n <= 15) {
    document.write("<p>" + "7) ", "Это первая четверть часа" + "</p>" + "<br/>" + "<br/>")
}
else if (n > 15, n <= 30) {
    document.write("<p>" + "7) ", "Это вторая четверть часа" + "</p>" + "<br/>" + "<br/>")
}
else if (n > 30, n <=45) {
    document.write("<p>" + "7) ", "Это третья четверть часа" + "</p>" + "<br/>" + "<br/>")
}
else if (n > 45, n <=59) {
    document.write("<p>" + "7) ", "Это четвёртая четверть часа" + "</p>" + "<br/>" + "<br/>")
}
else {
    document.write("<p>" + "7) ", "Введённое значение n не соответствует условию (от 0 до 59)!" + "</p>"
    + "<br/>" + "<br/>")
}

let day = prompt("Введите день месяца day (число от 1 до 31)", 12);

if (day <= 10) {
    document.write("<p>" + "8) ", "Это первая декада месяца" + "</p>" + "<br/>" + "<br/>")
}
else if (day > 10, day <= 20) {
    document.write("<p>" + "8) ", "Это вторая декада месяца" + "</p>" + "<br/>" + "<br/>")
}
else if (day > 20, day <=31) {
    document.write("<p>" + "8) ", "Это третья декада месяца" + "</p>" + "<br/>" + "<br/>")
}
else {
    document.write("<p>" + "8) ", "Введённое значение day не соответствует условию (от 0 до 31)!" + "</p>"
    + "<br/>" + "<br/>")
}

let days = +prompt("Введите количество дней для подсчёта (принимается целое число)", 777);

let years = Math.floor(days / 365);

if (years >= 1) {
    document.write("<p>" + "9.1) ","Количество лет: " + years + "</p>" + "<br/>")
}
else {
    document.write("<p>" + "9.1) ","Меньше года", "</p>" + "<br/>")
}

let months = Math.floor(days / 31);

if (months >= 1) {
    document.write("<p>" + "9.2) ","Количество месяцев: " + months + "</p>" + "<br/>")
}
else {
    document.write("<p>" + "9.2) ","Меньше месяца", "</p>" + "<br/>")
}

let weeks = Math.floor(days / 7);

if (weeks >= 1) {
    document.write("<p>" + "9.3) ","Количество недель: " + weeks + "</p>" + "<br/>")
}
else {
    document.write("<p>" + "9.3) ","Меньше недели", "</p>" + "<br/>")
}

let hours = (days * 24);
document.write("<p>" + "9.4) ","Количество часов: " + hours + "</p>" + "<br/>");

let mins = ((days * 24) * 60);
document.write("<p>" + "9.5) ","Количество минут: " + mins + "</p>" + "<br/>");

let secs = (((days * 24) * 60) * 60);
document.write("<p>" + "9.6) ","Количество секунд: " + secs + "</p>" + "<br/>" + "<br/>");


let dayz = prompt("Введите день года (число от 1 до 365)", 222);


if (dayz >= 1, dayz <= 31) {
    document.write("<p>" + "10) ", "Сейчас январь" + "</p>")
}
else if (dayz > 31, dayz <= (31 + 28)) {
    document.write("<p>" + "10) ", "Сейчас февраль" + "</p>")
}
else if (dayz > (31 + 28), dayz <= (31 + 28 + 31)) {
    document.write("<p>" + "10) ", "Сейчас март" + "</p>")
}
else if (dayz > (31 + 28 + 31), dayz <= (31 + 28 + 31 + 30)) {
    document.write("<p>" + "10) ", "Сейчас апрель" + "</p>")
}
else if (dayz > (31 + 28 + 31 + 30), dayz <= (31 + 28 + 31 + 30 + 31)) {
    document.write("<p>" + "10) ", "Сейчас май" + "</p>")
}
else if (dayz > (31 + 28 + 31 + 30 + 31), dayz <= (31 + 28 + 31 + 30 + 31 + 30)) {
    document.write("<p>" + "10) ", "Сейчас июнь" + "</p>")
}
else if (dayz > (31 + 28 + 31 + 30 + 31 + 30), dayz <= (31 + 28 + 31 + 30 + 31 + 30 + 31)) {
    document.write("<p>" + "10) ", "Сейчас июль" + "</p>")
}
else if (dayz > (31 + 28 + 31 + 30 + 31 + 30 + 31), dayz <= (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31)) {
    document.write("<p>" + "10) ", "Сейчас август" + "</p>")
}
else if (dayz > (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31), dayz <= (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30)) {
    document.write("<p>" + "10) ", "Сейчас сентябрь" + "</p>")
}
else if (dayz > (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30), 
        dayz <= (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31)) {
    document.write("<p>" + "10) ", "Сейчас октябрь" + "</p>")
}
else if (dayz > (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31), 
        dayz <= (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30)) {
    document.write("<p>" + "10) ", "Сейчас ноябрь" + "</p>")
}
else if (dayz > (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30), 
        dayz <= (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31)) {
    document.write("<p>" + "10) ", "Сейчас декабрь" + "</p>")
}
else {
    document.write("<p>" + "10) ", "Введённое число вне диапазона 1 - 365" + "</p>" + "<br/>")
}

switch (dayz <= (31 + 28)) {
    case true: 
    document.write("<p>" + "и зима" + "</p>" + "<br/>" + "<br/>")
        break;
}

switch (dayz > (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31) 
&& dayz <= (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30)) {
    case true: 
    document.write("<p>" + "и зима" + "</p>" + "<br/>" + "<br/>")
        break;
}


switch (dayz > (31 + 28) && dayz <= (31 + 28 + 31 + 30 + 31)) {
    case true: 
    document.write("<p>" + "и весна" + "</p>" + "<br/>" + "<br/>")
        break;
}

switch (dayz > (31 + 28 + 31 + 30 + 31) 
&& dayz <= (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31)) {
    case true: 
    document.write("<p>" + "и лето" + "</p>" + "<br/>" + "<br/>")
        break;
}

switch (dayz > (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31) 
&& dayz <= (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30)) {
    case true: 
    document.write("<p>" + "и осень" + "</p>" + "<br/>" + "<br/>")
        break;
}

