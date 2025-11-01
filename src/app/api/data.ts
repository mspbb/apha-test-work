const FRUITS_URL = 'https://www.fruityvice.com/api/fruit/';
const ALL = 'all'

export async function fetchFruits() {
	try {
		const response = await fetch(FRUITS_URL + ALL, { 'method': 'GET' });
		let parsed = await response.json();
		return parsed;
	} catch (error) {
		console.error('Error:', error);
		throw new Error('Failed to fetch fruits data.');
	}
}

export async function fetchFruit(id: number) {
	try {
		const response = await fetch(FRUITS_URL + id, { 'method': 'GET' });
		let parsed = await response.json();
		console.log(parsed);
		return parsed;
	} catch (error) {
		console.error('Error:', error);
		throw new Error('Failed to fetch fruits data.');
	}
}