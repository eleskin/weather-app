import './App.css';
import { useWeather } from './hooks.js';

const App = () => {
	const [moscowWeather, setMoscowWeather] = useWeather();
	const [saintPetersburgWeather, setSaintPetersburgWeather] = useWeather();
	
	const handleClickButton = () => {
		setMoscowWeather('524901');
		setSaintPetersburgWeather('498817');
	};
	
	return (
		<div className="App">
			<button onClick={handleClickButton}>Отобразить погоду</button>
			<table>
				<thead>
				<tr>
					{moscowWeather && <th>{moscowWeather?.city?.name}</th>}
					{saintPetersburgWeather && <th>{saintPetersburgWeather?.city?.name}</th>}
				</tr>
				</thead>
				<tbody>
				<tr>
					{moscowWeather && <td>Текущая температура: {moscowWeather?.list[0]?.main.temp}°C</td>}
					{saintPetersburgWeather && <td>Текущая температура: {saintPetersburgWeather?.list[0]?.main.temp}°C</td>}
				</tr>
				<tr>
					{moscowWeather && <td>Ощущается: {moscowWeather?.list[0].main.feels_like}°C</td>}
					{saintPetersburgWeather && <td>Ощущается: {saintPetersburgWeather?.list[0].main.feels_like}°C</td>}
				</tr>
				</tbody>
			</table>
		</div>
	);
};

export default App;
