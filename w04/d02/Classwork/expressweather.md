#ExpressWeather

<img src="http://imustruth.typepad.com/photos/uncategorized/2007/06/14/al_roker.jpg">
> One of the big concepts to take from this class is the idea of applications talking to other applications and how to implement those interfaces. Let's build an application that talks to the WeatherUnderground API.


Write an Express server that meets the following specs

- GET /
  - Displays a "Welcome! Let's check the weather."
- GET /forecasts/*CITY*/*STATE*
  - Displays a basic weather breakdown for the City

###Bonus
- GET /forecasts/*CITY*/*STATE*/*HOUR*
  - Displays a weather forecast for the time indicated by the request. Let's pretend our users all use military time.
- Each page should have a link back to the main page.
- If the temperature in a city is below 50 degrees, render the HTML in blue.
- Render the cute little weather-related gif in the response.
