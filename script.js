'use strict';

let money  = prompt("Ваш бюджет на месяц?",0);
let time = prompt("Введите дату в формате YYYY-MM-DD",'2018-01-01');

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let a1 = prompt("Введите обязательную статью расходов в этом месяце",""),
    a2 = prompt("Во сколько обойдется?",""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце",""),
    a4 = prompt("Во сколько обойдется?","");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);

