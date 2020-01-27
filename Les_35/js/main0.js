window.onload = () => {
	let input = document.querySelector('input[type="text"]'),
		select = document.querySelector('select'),
		btn = document.querySelector('input[type="button"]'),
		result = document.querySelector('.result'),
		text = document.querySelector('.text'),
		close = document.querySelector('span'),
		styles = document.querySelector('.modalWindow ');



	btn.onclick = () => {
		result.innerHTML = '';
		if ((input).value !== '') {
			fetch (`http://www.omdbapi.com/?apikey=518ca0ce&t=${((input).value)}&type=${((select).value)}`)
				.then(response => response.json())
				.then(response => {
					result.innerHTML = ( response.Title );
					let more = document.createElement('input');
					more.value="Більше";
					more.type="button";
					more.style.cssText = "cursor: pointer; margin-left: 20px;";
					result.appendChild(more);
					if (response.Error) {
						result.innerHTML = (response.Error);
					}

					more.onclick = () => {
						result.innerHTML = '';
						for (let k in response){
							result.innerHTML += (k+' - '+response[k]+'<br>');

						}
						if (response.Poster) {
							result.innerHTML += (`<img src="${response.Poster}" alt="">`);
						}
					}
				});
		} else {
			fetch(`https://swapi.co/api/people/?page=1`)
				.then(response => response.json() )
				.then(response => {
					for (let key in response.results) {
						result.innerHTML += `${response.results[key].name}<input type="button" value="Більше" class ="more"><br>`;
					}
					let more = document.querySelectorAll('.more');
					// pages = Math.round(response.count / response.results.length);

					more.forEach((item,i) => {
						item.addEventListener('click',() =>{
							styles.classList.add('active');
						});
						item.addEventListener('click',() =>{
							for (let key in response.results[i]) {
								text.innerHTML += (`${key} - ${response.results[i][key]}<br>`);
							}
						})
					});
					close.addEventListener('click',() =>{
						styles.classList.remove('active');
						text.innerHTML = '';
					});

				})
				.catch(err => console.error(err))



		}

	}

};