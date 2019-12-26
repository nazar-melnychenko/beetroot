window.onload = function () {

	task1.onclick = function () {

		do {
			let firstNumber = +prompt('Введіть перше число');
			if (firstNumber == ''){
				alert('Ви не ввели число');
				return false
			}
			let sign = prompt('Введіть знак (+, -, *, /)');
			if (sign == ''){
				alert('Ви не ввели знак');
				return false
			}
			let secondNumber = +prompt('Введіть друге число');
			if (secondNumber == ''){
				alert('Ви не ввели число');
				return false
			}

			let result = 0;

			switch (sign) {
				case '+':
					result	= firstNumber + secondNumber;
					break;
				case '-':
					result	= firstNumber - secondNumber;
					break;
				case '*':
					result	= firstNumber * secondNumber;
					break;
				case '/':
					result	= firstNumber / secondNumber;
					break;
				default:
					alert ('Ви ввели не коректний знак');
					break;
			}

			alert(`Результат: ${result}`);

			var again = confirm('Рахуєм ще');

		} while (again);

	};

	task2.onclick = function () {

		let number = prompt('Введіть число').split('');
		let shift = +prompt('Введіть на скільки зсунути число');
		let i = shift;

		let arrNumber1 = [];
		let arrNumber2 = [];

		for (i; i < number.length; i++){
			arrNumber1[i] = number[i];
		};

		for (let j = 0; j < shift; j++){
			arrNumber2[j] = number[j];
		};

		alert(arrNumber1.join('') + arrNumber2.join(''));

	};

	task3.onclick = function () {

		let arrDays = ['Понеділок','Вівторок','Середа','Четвер','Пятниця','Субота','Неділя'];

		let day = 0;

		do {
			alert(arrDays[day]);
			var next = confirm('Показати наступний день тижня');
			day++;

			if (day === arrDays.length) {
				day = 0;
			}

		} while (next);

	};

	task4.onclick = function () {

		let arr = [];

		for (let j = 2; j < 10; j++ ) {
			arr.push(`Множення на ${j}\n\r`);
			for (let i = 1; i <= 10; i++) {
				let result = j * i;
				let number = `${j} * ${i}`;
				arr.push(`${number} = ${result}\n\r`);
			}
		}
		alert(arr.join(''));
	};

	task5.onclick = function () {

		let firstNumber = +prompt('Введіть перше число');
		if (firstNumber == ''){
			alert('Ви не ввели число');
			return false
		}
		let secondNumber = +prompt('Введіть дреге число, але більше ніж перше і між цими дво числами загадайте число');
		if (secondNumber == ''){
			alert('Ви не ввели число');
			return false
		}
		for (;;) {
			let average = (secondNumber + firstNumber) / 2;

			let number = prompt(`Ваше число < > чи = ${Math.round(average)}`);

			if(number === '<') {
				secondNumber = (secondNumber + firstNumber) / 2;
			}else if (number === '>') {
				firstNumber = (secondNumber + firstNumber) / 2;
			}else if (number === '=') {
				alert(`Ваше число: ${Math.round(average)}`);
				break;
			} else {
				alert('Ви не вибради значення');
				break;
			}


		}


	};

};
