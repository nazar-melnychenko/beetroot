window.onload = function () {

	task1.onclick = function () {

		let name = prompt('Введіть своє ім*я.');

		if (name === '' || name == null){
			alert ('Ви не ввели своє ім*я.');
			return false;

		} else {
			alert('Привіт ' + name + '!');
		}
	};

	task2.onclick = function () {

		const year = 2019;

		let years = prompt('Введіть свій рік народження');

		let calc = year - years;

		if (years.replace (/\d/g, '').length){
			alert ('Введіть тільки цифри');
			return false;

		} else if (years === ''){
			alert ('Ви не ввели свій рік народження.');
			return false;

		} else if(calc > '115'){
			alert ('Ви помилились з роком свого народження!');
			return false;
		} else {
			alert('Вам ' + calc + ' років.');
		}
	};

	task3.onclick = function () {

		let lengthSquare = prompt('Введіть довжину сторони квадрата.');

		if (lengthSquare.replace (/\d/g, '').length){
			alert ('Введіть тільки цифри');
			return false;

		} else if (lengthSquare === ''){
			alert ('Ви не ввели довжину сторони квадрата.');
			return false;
		} else {
			alert('Периметр квадрата: ' + (lengthSquare * 4));
		}
	};

	task4.onclick = function () {

		let circleRadius = prompt('Введіть радіус круга');

		if (circleRadius.replace (/\d/g, '').length){
			alert ('Введіть тільки цифри');
			return false;

		} else if (circleRadius === ''){
			alert ('Ви не ввели радіус круга.');
			return false;

		} else {
			alert('Периметр квадрата: ' + Math.round(Math.PI * Math.pow(circleRadius, 2)));
		}
	};

	task5.onclick = function () {

		let distance = prompt('Введіть відстань між містами');

		if (distance.replace (/\d/g, '').length){
			alert ('Введіть тільки цифри');
			return false;

		} else if (distance === '' || distance == 0){
			alert ('Ви не ввели відстань, або ввели 0!');
			return false;

		}

		let time = prompt('За скільки часу хочете добратись');

		if (time.replace (/\d/g, '').length) {
			alert('Введіть тільки цифри');
			return false;

		} else if (time === '' || time == 0){
			alert ('Ви не ввели час, або ввели 0!');
			return false;

		}

		let speed = distance / time;

		if (speed < 30) {
			alert('Щоб проїхати ' +distance+ 'км за ' + time+ 'год рухайтесь з швидкістю ' + speed + ' км/год. Так і заснути можна за рульом )))');
		} else if (speed > 30 && speed < 100) {
			alert('Щоб проїхати ' +distance+ 'км за ' + time+ 'год рухайтесь з швидкістю ' + speed + ' км/год. Безпечна швидкість )))');
		} else {
			alert('Щоб проїхати ' +distance+ 'км за ' + time+ 'год рухайтесь з швидкістю ' + speed + ' км/год. Так і на штраф можна нарватись )))');
		}
	};

	task6.onclick = function () {

		const course = 1.12;

		let dollar = prompt('Введіть суму в доларах');

		if (dollar.replace (/\d/g, '').length){
			alert ('Введіть тільки цифри');
			return false;

		} else if (dollar === '' || dollar == 0){
			alert ('Ви не ввели суму, або ввели 0!');
			return false;

		} else {
			alert('Ви отримаєте ' + Math.round(course * dollar) + ' євро.');
		}


	};

	task7.onclick = function () {

		const file = 850;

		let flashDriveGb = prompt ('Введіть об\'єм флешки в Gb');

		if (flashDriveGb.replace (/\d/g, '').length){
			alert ('Введіть тільки цифри');
			return false;

		}

		let flashDriveMb = flashDriveGb * 1024;

		if (flashDriveGb === '' || flashDriveMb < 850){
			alert ('Ви не ввели об\'єм, або ввели менше 850 Мб!');
			return false;

		}

		let numberFiles = Math.floor(flashDriveMb / file);
		let remainder = flashDriveMb % file;

		alert('На флешку ' +flashDriveGb+ 'Гб поміститься файлів: ' +numberFiles+ '. Залишок вільного місця: ' +remainder+ 'Мб');

	};

	task8.onclick = function () {

		let amountMoney = prompt('Введіть суму грошей');

		if (amountMoney.replace (/\d/g, '').length){
			alert ('Введіть тільки цифри');
			return false;

		} else if (amountMoney === '' || amountMoney == 0){
			alert ('Ви не ввели суму, або ввели 0!');
			return false;

		}

		let priceChocolates = prompt('Введіть кількість шоколадок');

		if (priceChocolates.replace (/\d/g, '').length){
			alert ('Введіть тільки цифри');
			return false;

		} else if (priceChocolates === '' || priceChocolates == 0){
			alert ('Ви не ввели кількість, або ввели 0!');
			return false;

		}

		let buyChocolate = Math.floor(amountMoney / priceChocolates);

		let restMoney = amountMoney % priceChocolates;

		alert('За: ' + amountMoney + 'грн. купите: ' + buyChocolate + ' шоколадок, по ціні: ' + priceChocolates + 'грн. Здача ' + restMoney + 'грн.');

		if (restMoney > 0) {
			alert('Можете докласти ще: ' + (priceChocolates - restMoney) + 'грн., та купити: ' + (buyChocolate + 1) + ' шоколадок)');
		}
	};

	task9.onclick = function () {

		let number = prompt('Введіть цифри, букви щоб перевернути їх:');

		alert(number.split('').reverse().join(''));

	};

	task10.onclick = function () {

		let depositAmount = prompt('Введіть суму вкладу');

		if (depositAmount.replace (/\d/g, '').length){
			alert ('Введіть тільки цифри');
			return false;

		} else if (depositAmount === '' || depositAmount == 0){
			alert ('Ви не ввели суму, або ввели 0!');
			return false;

		}

		let month = prompt('Введіть кількість місяців');

		if (month.replace (/\d/g, '').length){
			alert ('Введіть тільки цифри');
			return false;

		} else if (month === '' || month < 1 || month > 12){
			alert ('Ви не ввели кількість місяців, або ввели 0, або більше 12!');
			return false;

		}

		let percent = prompt('Введіть процентну ставку річних');

		if (percent.replace (/\d/g, '').length){
			alert ('Введіть тільки цифри');
			return false;

		} else if (percent === '' || percent == 0){
			alert ('Ви не ввели кількість, або ввели 0!');
			return false;

		}

		alert('Сума нарахованих відсотків: ' + Math.round((depositAmount * percent * (month * 30)) / (365 * 100)) + 'грн.');
	};
};