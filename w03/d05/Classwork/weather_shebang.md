## Node Weather

You've been tasked with creating a Node program for retrieving the current weather conditions in a given city. For example, running `node weather.js 'milwaukee' 'WI'` in the command line should output: `THE CURRENT TEMPERATURE IS: 70.5 DEGREES F`

#### Step 1

Create an account and sign up for an API key at the [weather underground developer center](http://www.wunderground.com/weather/api/d/login.html).

#### Step 2

Explore the Weather Underground API documentation to determine how to structure your query.

#### Step 3

Use `request` to query the API. Then write your program such that it meets the specification above.


#### Step 4

Make sure your program works with two-word cities, i.e. "Green Bay"

#### Step 5

Add the hourly forecast to your program. You should have the additional output of something like this:

```
At 8:00 AM it'll be 72 degrees fahrenheit
At 9:00 AM it'll be 73 degrees fahrenheit
At 10:00 AM it'll be 75 degrees fahrenheit
At 11:00 AM it'll be 77 degrees fahrenheit
At 12:00 PM it'll be 79 degrees fahrenheit
At 1:00 PM it'll be 80 degrees fahrenheit
At 2:00 PM it'll be 83 degrees fahrenheit
At 3:00 PM it'll be 85 degrees fahrenheit
At 4:00 PM it'll be 87 degrees fahrenheit
At 5:00 PM it'll be 87 degrees fahrenheit
At 6:00 PM it'll be 87 degrees fahrenheit
At 7:00 PM it'll be 86 degrees fahrenheit
At 8:00 PM it'll be 84 degrees fahrenheit
At 9:00 PM it'll be 82 degrees fahrenheit
At 10:00 PM it'll be 81 degrees fahrenheit
At 11:00 PM it'll be 81 degrees fahrenheit
At 12:00 AM it'll be 80 degrees fahrenheit
At 1:00 AM it'll be 79 degrees fahrenheit
At 2:00 AM it'll be 79 degrees fahrenheit
At 3:00 AM it'll be 79 degrees fahrenheit
At 4:00 AM it'll be 79 degrees fahrenheit
At 5:00 AM it'll be 77 degrees fahrenheit
At 6:00 AM it'll be 77 degrees fahrenheit
At 7:00 AM it'll be 75 degrees fahrenheit
```
### Step 6
Make it an executable.
