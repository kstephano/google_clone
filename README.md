# google_clone
Clone of the Google home page. Data that can be searched in an array of artists with attributes: name, monthlyListenersInMillions, rank, wikiUrl.

## Installation & Usage
### Installation
* Clone or download the repo.
* Open terminal and navigate to the google_clone folder.
* Run `npm install`, `npm i jest -D supertest`, `npm install cors`, and `npm install express` to install dependencies.

## Usage
### Dev
* Run `npm run start` to launch server. The server runs on port 3000. If this is in use, terminate the currect process with npx kill-port 3000, and then re-run the command.
* Run `npm test` to launch the test suite.
* Run `npm run coverage` to launch the test for coverage.
* Right click on the index.html file in the client folder and select Open With Live Server to view the main page.
### Server functionality
The server has one main route /artists. This page displays all artists as a list of json objects. Endpoints for this route include:
* /random which retrieves a random artist in json format.
* /:name which retrieves an artist with the given name in json format.
* /query/:query which is used to search the data and output results depending on the given search criteria. Suitable strings include: "artist", "high"/"low" AND "rank"/"listen", as well as substrings of a name of an artist in the array. If no suitable criteria is found a status code of 400 is send a long with a message that the search query couldn't retrieve anything.

## Bugs
* Client side code is still in-progress.
* Needs to finish the api call methods in order to retrieve data from the server and display on the webpage.
