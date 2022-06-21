
let recipe_type;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e90365cb8amsh65be988104b6c59p1617adjsn62278d9dae50',
		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
	}
};

function getAllrecipe()
    fetch('http://www.themealdb.com/api/json/v1/1/search.php?f=a', options)