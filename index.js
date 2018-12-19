let request = require('request');
let argv = require('yargs').argv;
let apiKey = process.env.API_KEY;
//let city = 'rome';
let city = argv.c || 'rome';
let units = argv.d || '';
if (units === "metric"){
	var degree = 'Celsius';
	console.log("The temperature metric is in " + degree + ".");
} else if (units === "imperial"){
	var degree = 'Fahrenheit';
	console.log("The temperature metric is in " + degree + ".");
} else {
	var degree = 'Kelvin';
	console.log("The temperature metric is in " + degree + ".");
}

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`
//for Fahrenheit --->units=imperial, for Celsius --->units=metric, Kelvin=default
//console.log(url)
let user = argv.u || 'my friend';
console.log("Hello " + user + "!");

request(url, function (err, response, body) {
	if(err){
		console.log('error:', error);
	} else {
		//console.log('body:', body);
		let weather = JSON.parse(body);
		console.log(weather);
		let message = `It's ${weather.main.temp} ${degree} degrees in ${weather.name}! Also, humidity is ${weather.main.humidity} %`;
		console.log(message);
	}
});
