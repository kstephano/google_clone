# google_clone
Clone of the Google home page. Data that can be searched in an array of artists with attributes: name, monthlyListenersInMillions, rank, wikiUrl.

## Installation & Usage
### Installation
* Clone or download the repo.
* Open terminal and navigate to the google_clone folder.
* Run `npm install`, `npm i jest -D supertest`, `npm install cors`, and `npm install express` to install dependencies.

## Usage
### Dev
* Run `npm run start` to launch server. The server runs on port 3000. If this is in use, terminate the currect process with `npx kill-port 3000`, and then re-run the command.
* Run `npm test` to launch the test suite.
* Run `npm run coverage` to launch the test for coverage.
* Right click on the index.html file in the client folder and select Open With Live Server to view the main page.
### Server functionality
The server has an /artists route as well as a /query/:query endpoint for searching. /artists displays all artists as a list of json objects. Endpoints in the server include:
* /random which retrieves a random artist in json format.
* /:name which retrieves an artist with the given name in json format.
* /query/:query which is used to search the data and output results depending on the given search criteria. Suitable strings include: "artist", "high"/"low" AND "rank"/"listen", "male"/"female" as well as substrings of a name of an artist in the array. If no suitable criteria is found a status code of 404 is send a long with a message that the search query couldn't retrieve anything.

### Client side functionality
If the user types 'artists' into the search bar and clicks the Google search button, it returns a results page with all artists in the database. If the user clicks 'I'm Feeling Lucky', it will send you to a random artists' Wiki page.
If the user types an artist's name and clicks Google search, it returns a results page with all artists with that name. Clicking 'I'm Feeling Lucky' will take you to that artist's Wiki page (if they exist in the database).
Other options to try in the search bar: 'artistsmale', 'artistsfemale', 'artistshighrank', 'artistslowlisten'.
