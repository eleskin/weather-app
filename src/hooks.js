import { useState } from 'react';

export const useWeather = () => {
	const [weather, setWeather] = useState();
	
	const handleGetWeather = (city) => {
		fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${city}&appid=3e00312a89f890731d064527d27cade0&units=metric`)
			.then((response) => response.json())
			.then((data) => setWeather(data));
	};
	
	return [weather, handleGetWeather];
};
