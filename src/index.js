import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Home = () => {
	const [isDay, setDay] = useState(true);
	const [isLightOn, setIsLightOn] = useState(false);
	const [temperature, setTemperature] = useState(72);
	const [temperatureScale, setTemperatureScale] = useState('F'); // Default to Fahrenheit

	const handleLightToggle = () => {
		setIsLightOn(prevIsLightOn => !prevIsLightOn);
	};

	const convertToFahrenheit = celsius => (celsius * 9) / 5 + 32;
	const convertToCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9;

	const increaseTemperature = () => {
		setTemperature(prevTemp => {
			const newTemp = prevTemp + 1;
			return temperatureScale === 'F' ? newTemp : convertToFahrenheit(newTemp);
		});
	};

	const decreaseTemperature = () => {
		setTemperature(prevTemp => {
			const newTemp = prevTemp - 1;
			return temperatureScale === 'F' ? newTemp : convertToFahrenheit(newTemp);
		});
	};

	return (
		<div className={`room ${isDay ? 'day' : 'night'}`}>
			<p>
				<h1>There is {isDay ? 'Day' : 'Night'}</h1>
			</p>

			<button onClick={() => setDay(!isDay)}>
				Set {isDay ? 'Night' : 'Day'}
			</button>
			<div className="container">
				<div className="controls">
					<button
						onClick={handleLightToggle}
						className={`toggle-button ${isLightOn ? 'on' : 'off'}`}
					>
						{isLightOn ? 'Turn OFF' : 'Turn ON'}
					</button>
					<p className="status">Light Status: {isLightOn ? 'ON' : 'OFF'}</p>
				</div>
				<div className="temperature-controls">
					<p className="temperature">
						<h2>Room Temperature: {temperature}°{temperatureScale}</h2>
						<h2>Temperature in Celsius: {convertToCelsius(temperature).toFixed(2)}°C</h2>
					</p>

					<button onClick={increaseTemperature} className="temp-button">
						<h2> + </h2>
					</button>
					<button onClick={decreaseTemperature} className="temp-button">
						<h2> - </h2>
					</button>
					<button onClick={() => setTemperatureScale('F')} className="scale-button">
						Fahrenheit
					</button>
					<button onClick={() => setTemperatureScale('C')} className="scale-button">
						Celsius
					</button>
				</div>
			</div>
			<Clock />
			<CountdownTimer />
		</div>
	);
};

const Time = props => {
	const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const dayOfWeek = daysOfWeek[props.passDate.getDay()];

	return (
		<div className="mt-3">
			<h2>{props.passDate.toLocaleTimeString()}</h2>
			<h5 className="mt-2">{props.toggleDate && `${dayOfWeek}, ${props.passDate.toLocaleDateString()}`}</h5>
		</div>
	);
};

const Toggle = props => {
	return (
		<div className="form-check form-check-inline">
			<input
				className="form-check-input"
				type="checkbox"
				id="toggle-date"
				checked={props.dateValue}
				onChange={props.toggleDate}
			/>
			<label
				className="form-check-label"
				htmlFor="toggle-date"
				style={{ cursor: 'pointer', userSelect: 'none' }}
			>
				{props.dateValue ? 'Hide' : 'Show'} Date
			</label>
		</div>
	);
};

class Clock extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentDate: new Date(),
			toggleDate: false,
		};

		this.toggleDate = this.toggleDate.bind(this);
	}

	componentDidMount() {
		this.intervalDate = setInterval(() => this.updateDate(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalDate);
	}

	updateDate() {
		this.setState({
			currentDate: new Date(),
		});
	}

	toggleDate() {
		this.setState(prevState => ({
			toggleDate: !prevState.toggleDate,
		}));
	}

	render() {
		return (
			<div className="container py-5">
				<div className="jumbotron text-center bg-white shadow-lg">
					<Toggle toggleDate={this.toggleDate} dateValue={this.state.toggleDate} />
					<Time passDate={this.state.currentDate} toggleDate={this.state.toggleDate} />
				</div>
			</div>
		);
	}
}

const CountdownTimer = () => {
	const [count, setCount] = useState(10);
	const [paused, setPaused] = useState(true);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (!paused) {
				setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [paused]);

	const togglePause = () => {
		setPaused(prevPaused => !prevPaused);
	};

	const resetTimer = () => {
		setCount(100);
		setPaused(true);
	};

	return (
		<div className="countdown-timer">
			<h1>⏱ {count}</h1>
			<button onClick={togglePause}>{paused ? '▶️ Start' : 'Pause ✋'}</button>
			<button onClick={resetTimer}>Reset</button>
		</div>
	);
};

ReactDOM.render(<Home />, document.getElementById('root'));
