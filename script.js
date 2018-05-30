let yourBudget,
    yourBudgetDay,
    nameYourStore,
    tovar01,
    tovar02,
    tovar03;

yourBudget = +prompt('Ваш бюджет на месяц?');
nameYourStore = prompt('Название вашего магазина?');
tovar01 = prompt('Что будем продавать. 1 товар');
tovar02 = prompt('Что будем продавать. 2 товар');
tovar03 = prompt('Что будем продавать. 3 товар');

yourBudgetDay = parseInt(yourBudget / 30);

let mainList = {
  budget: yourBudgetDay,
  nameStore: nameYourStore,
  shopGoods: [tovar01, tovar02, tovar03],
  employers: {
    name: 'Иванов',    
    name: 'Петров',
    name: 'Сидоров'
  },
  open: true
}

console.log(`Бюджет на 1 день ${mainList.budget} рублей`);

for (var i = 0; i < mainList.shopGoods.length; i++) {
  console.log(`Товар на продажу ${mainList.shopGoods[i]}`);   
};

if (mainList.open == true) {
  console.log(`Магазин открыт`);  
};