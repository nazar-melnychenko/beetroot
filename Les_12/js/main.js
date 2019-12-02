$(document).ready(function(){
	// RadioButton
	$('#slct1').click(function(){
		/* Заносим выпадающий список в переменную */
		var dropBlock1 = $(this).parent().find('#drop1');

		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( dropBlock1.is(':hidden') ) {
			dropBlock1.slideDown();

			/* Выделяем ссылку открывающую select */
			$(this).addClass('active');

			/* Работаем с событием клика по элементам выпадающего списка */
			$('#drop1').find('li').click(function(){

				/* Заносим в переменную HTML код элемента
				списка по которому кликнули */
				var selectResult = $(this).html();

				/* Находим наш скрытый инпут и передаем в него
				значение из переменной selectResult */
				$(this).parent().parent().find('input').val(selectResult);

				/* Передаем значение переменной selectResult в ссылку которая
				открывает наш выпадающий список и удаляем активность */
				$('#slct1').removeClass('active').html(selectResult);

				/* Скрываем выпадающий блок */
				dropBlock1.slideUp();
			});

			/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} else {
			$(this).removeClass('active');
			dropBlock1.slideUp();
		}

		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});

	$('#slct2').click(function(){
		/* Заносим выпадающий список в переменную */
		var dropBlock2 = $(this).parent().find('#drop2');

		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( dropBlock2.is(':hidden') ) {
			dropBlock2.slideDown();

			/* Выделяем ссылку открывающую select */
			$(this).addClass('active');

			/* Работаем с событием клика по элементам выпадающего списка */
			$('#drop2').find('li').click(function(){

				/* Заносим в переменную HTML код элемента
				списка по которому кликнули */
				var selectResult = $(this).html();

				/* Находим наш скрытый инпут и передаем в него
				значение из переменной selectResult */
				$(this).parent().parent().find('input').val(selectResult);

				/* Передаем значение переменной selectResult в ссылку которая
				открывает наш выпадающий список и удаляем активность */
				$('#slct2').removeClass('active').html(selectResult);

				/* Скрываем выпадающий блок */
				dropBlock2.slideUp();
			});

			/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} else {
			$(this).removeClass('active');
			dropBlock2.slideUp();
		}

		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});

	$('.nike').slick({
		dots: true,
		speed: 500,
		arrows: false,
	});


});