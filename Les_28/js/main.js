window.onload = function () {

	task1.onclick = function () {

		let salaries = {
			"Вася": 100,
			"Петя": 300,
			"Даша": 250
		};
		let sum = 0;
		for (k in salaries) {
			sum += salaries[k];
		}
		alert(`Сума всіх зарплат: ${sum} грн.`);
	};

	task2.onclick = function () {

		let salaries = {
			"Вася": 100,
			"Петя": 200,
			"Даша": 250,
			"Маша": 950,
			"Іван": 250,
			"Тарас": 150,
		};
		let salariesAll = [];
		for (k in salaries) {
			salariesAll.push(salaries[k]);
		}
		let maxSalaries = Math.max.apply(null, salariesAll);

		alert(`Максимальна запрлата: ${maxSalaries} грн.`);
	};
};
