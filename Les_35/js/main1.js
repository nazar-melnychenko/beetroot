window.onload = () => {
	let input = document.querySelector('input[type="text"]');
	let select = document.querySelector('select');
	let btn = document.querySelector('input[type="button"]');
	let result = document.querySelector('.result');

	btn.onclick = () => {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', `http://www.omdbapi.com/?apikey=518ca0ce&t=${((input).value)}&type=${((select).value)}`, false);
		xhr.send();
		if (xhr.readyState !== 4) {
			result.innerHTML = ( xhr.status + ': ' + xhr.statusText );
		} else {
			let movis = JSON.parse(xhr.responseText);
			result.innerHTML = ( movis.Title );
			let more = document.createElement('input');
			more.value="Більше";
			more.type="button";
			more.style.cssText = "cursor: pointer; margin-left: 20px;";
			result.appendChild(more);
			if (movis.Error) {
				result.innerHTML = (movis.Error);
			}

			more.onclick = () => {
				result.innerHTML = '';
				for (let k in movis){
					result.innerHTML += (k+' - '+movis[k]+'<br>');

				}
				if (movis.Poster) {
					result.innerHTML += (`<img src="${movis.Poster}" alt="">`);
				}
			}



		}
	}
};