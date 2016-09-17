# Udacity Nanodegree Project - Neighbourhood Map

### Neighbourhood Map - Visit Barcelona
An single page application shows a map of places to visit in Barcelona. This app is a part of the Front End Web Development Nanodegree at Udacity.

### Libraries, frameworks and APIs used
1. Knockout JS
2. Google Maps
3. Foursquare
4. Fontawesome
5. JQuery

### Project Requirements

* Responsiveness and Usability:
	- All application components render on-screen in a responsive manner;
	- All application components are usable across modern desktop, tablet, and phone browsers.
* App functionality (filter locations, list view, map and markers):
	- Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied.
	- Clicking a marker displays unique information about a location in either an infoWindow or DOM element.
	- Markers should animate when clicked (e.g. bouncing, color change.)
	- Any additional custom functionality provided in the app functions error-free.
* App arhitecture (proper Use of Knockout):
	- Code is properly separated based upon Knockout best practices (follow an MVVM pattern, avoid updating the DOM manually with jQuery or JS, use observables rather than forcing refreshes manually, etc). Knockout should not be used to handle the Google Map API.
	- There are at least 5 locations in the model. These may be hard-coded or retrieved from a data API.
* Asynchronous data usage (asynchronous API requests, error handling):
	- Application utilizes the Google Maps API and at least one non-Google third-party API and all data requests are retrieved in an asynchronous manner.
	- Data requests that fail are handled gracefully using common fallback techniques (i.e. AJAX error or fail methods). 'Gracefully' means the user isn’t left wondering why a component isn’t working. If an API doesn’t load there should be some visible indication on the page (an alert box is ok) that it didn’t load. Note: You do not need to handle cases where the user goes offline.
* Location details functionality (additional location data, error free, usability):
	- Functionality providing additional data about a location is provided and sourced from a 3rd party API. Information can be provided either in the marker’s infoWindow, or in an HTML element in the DOM (a sidebar, the list view, etc.)
	- Provide attribution for the source of additional data. For example, if using Foursquare, indicate somewhere in your UI and in your README that you are using Foursquare data.
	- Application runs without errors.
	- Functionality is presented in a usable and responsive manner.

### How to acces the app
1. Open a browser and visit localhost:8080

```bash
$> cd /path/to/your-project-folder
$> python -m SimpleHTTPServer 8080
```
2. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

```bash
$> cd /path/to/your-project-folder
$> ngrok http 8080
```

### Resources
* [Array.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
* [Foursquare for Developers](https://developer.foursquare.com/)
* [Free Styles for Google Maps](https://snazzymaps.com/)
* [Google Maps APIs](https://developers.google.com/maps/)
* [Font-awesome ](https://maxcdn.bootstrapcdn.com/)
* [Markdown CheatSheet](http://dillinger.io/)
* [Documentation, Live Examples and Tutorials in KnockoutJS](http://knockoutjs.com/documentation/introduction.html)
* And also I had some help from a couple of my friends that are allredy web developers (a lot of thanks to them)
