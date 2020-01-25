window.onload = () => {
	let input = document.querySelector('input[type="text"]');
	let select = document.querySelector('select');
	let btn = document.querySelector('input[type="button"]');
	let result = document.querySelector('.result');

	btn.onclick = () => {
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
	}
};