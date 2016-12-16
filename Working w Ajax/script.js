const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities=[];

const searchInput = $('.search');
const suggestions = $('.suggestions');


fetch(endpoint).then(chunk => chunk.json()).then(data => cities.push(...data));

function findMatches(toFind, cities){
	return cities.filter(place => {
		const regex = new RegExp(toFind, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(){
	var input = $(this)[0].value;
	console.log(input);
	const matchedArray = findMatches(input, cities);
	const html = matchedArray.map(place => {
		const regex = new RegExp(input, 'gi');
		const cityName = place.city.replace(regex, `<span class="hl">${input}</span>`);
		const stateName = place.state.replace(regex, `<span class="hl">${input}</span>`);
		return `
			<li>
				<span class="name">${cityName}, ${stateName}</span>
				<span class="population">${numberWithCommas(place.population)}</span>
			</li>
		`;
	}).join("");
	suggestions.innerHTML = html;
}




searchInput.on('change', displayMatches);
searchInput.on('keyup', displayMatches);