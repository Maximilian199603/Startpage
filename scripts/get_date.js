function showTimeAndWeather() {
	const date = new Date();

	let today = date.toLocaleString("en", { weekday: "long" });
	let hour = date.toLocaleString("pl", { hour: "2-digit" }); // use 24h time format
	let minute = date.toLocaleString("en", { minute: "2-digit" });
	let second = date.toLocaleString("en", { second: "2-digit" });
	let day = date.toLocaleString("en", { day: "2-digit" });
	let month = date.toLocaleString("en", { month: "2-digit" });
	let year = date.toLocaleString("en", { year: "numeric" });

	minute = addZero(minute);
	second = addZero(second);
	//Procure weather data from localstorage save it in the weather string
	let weatherdata = parseWeatherData(getWeatherInfoFromLocalStorage());
	let temperature = weatherdata.temperature;
	let icon = getCharCodeFromMap(weatherdata.icon, weatherdata.description);
	let weather = `Weather`;
	document.getElementById(
		"date"
	).innerHTML = `${today} | ${hour}:${minute}:${second} | ${icon}&nbsp;&nbsp;${temperature}°`;
	setTimeout(showTimeAndWeather, 0);
}

function addZero(i) {
	if (i.length < 2) i = "0" + i;
	return i;
}

function getWeatherInfoFromLocalStorage() {
    // Define the default object for unknown weather
    const unknownWeather = {
        error: 'Weather data could not be fetched.'
    };

    try {
        // Attempt to retrieve the weatherInfo from localStorage
        const weatherInfo = localStorage.getItem('weatherInfo');

        // Check if weatherInfo is null or undefined
        if (weatherInfo === null || weatherInfo === undefined) {
            return unknownWeather; // Return the default object
        }

        // Return the parsed weatherInfo
        return JSON.parse(weatherInfo); // Assuming weatherInfo is stored as JSON
    } catch (error) {
        console.error('Error retrieving weather information:', error.message);
        return unknownWeather; // Return the default object if there's an error
    }
}

function parseWeatherData(weatherData) {
    if (weatherData.error === 'Weather data could not be fetched.') {
        return {
            icon: '?',
			description: '?',
            temperature: '?'  
        };
    }

    const icon = weatherData.weather[0].icon;
	const description = weatherData.weather[0].description;
    const temperature = weatherData.main.temp;
    

    return {
        icon: icon || '?',
		description: description || '?',
        temperature: temperature || '?'
    };
}

function updateWeatherChar(input) {
    // Get the current hour
    const now = new Date();
    const hour = now.getHours();

    // Determine if it is day or night
    const isDay = hour >= 6 && hour < 22;
    const correctChar = isDay ? 'd' : 'n';

    // Extract the character from the input
    const currentChar = input.charAt(2);

    // Check if the current character matches the expected one
    if (currentChar !== correctChar) {
        // Replace the character and return the updated string
        return input.slice(0, 2) + correctChar;
    }

    // Return the original input if no update is needed
    return input;
}


function createWeatherMap() {
	
	    const charCodeMap = new Map([
		['01d', ''], // clear sky day
        ['01n', ''], // clear sky night
		['02d', ''], // a few clouds day
        ['02n', ''], // a few clouds night
		['03d', ''], // scattered clouds day
        ['03n', ''], // scattered clouds night
		['04d', ''], // broken clouds day
		['04n', ''], // broken clouds night
		['09d', ''], // shower rain day
		['09n', ''], // shower rain night
		['10d', ''], // shower rain day
		['10n', ''], // shower rain night
        ['11d', ''], // thunderstorm day
        ['11n', ''], // thunderstorm night
        ['10d', ''], // thunderstorm with rain
        ['13d', ''], // snow day
		['13n', ''], // snow night
		['50d', ''], // hazard day
		['50n', ''], // hazard night
    ]);

    // Set default mapping for unrecognized codes
    charCodeMap.default = '?';

    return charCodeMap;
}

function createSpecialWeatherMap() {
    const specialWeatherMap = new Map([
        ['mist', ''],
        ['smoke', ''],
        ['haze', ''],
        ['sand/dust whirls', ''],
        ['fog', ''],
        ['sand', ''],
        ['dust', ''],
        ['volcanic ash', ''],
        ['squalls', ''],
        ['tornado', '󰼸'],
		//['701', ''], // mist
		//['711', ''], // smoke
		//['721', ''], // haze
		//['731', ''], // dust
		//['741', ''], // mist
		//['751', ''], // sandstorm
		//['761', ''], // dust
		//['762', ''], // ash
		//['771', ''], // sqall
		//['781', '󰼸'], // tornado
    ]);
    
    // Set default mapping for unrecognized descriptions
    specialWeatherMap.default = '?';
    
    return specialWeatherMap;
}

function getCharCodeFromMap(code, description) {
    const weatherMap = createWeatherMap();
    
    if (code === '50d' && description || code === '50n' && description) {
        const specialWeatherMap = createSpecialWeatherMap();
        return specialWeatherMap.get(description) || specialWeatherMap.default;
    }
    const correctedCode = updateWeatherChar(code);
    return weatherMap.get(correctedCode) || weatherMap.default;
}


showTimeAndWeather();
