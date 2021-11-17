const artists = require('../data/artists');

/**
 * Gets a random number from a given interval.
 * 
 * @param {The minimum value to define the lower boundary of the interval} min 
 * @param {The maximum value to define the upper boundary of the interval} max 
 * @returns A random int from the given interval.
 */
 function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Finds an artist using the given name.
 * 
 * @param {The name (string) of the artist to retrieve} name 
 * @returns The artist object that matches the name.
 */
function findArtistByName(name) {
    let result = null;

    artists.forEach(artist => {
        if(artist.name.toLowerCase() === name.toLowerCase()) result = artist;
    })
    return result;
}

/**
 * Search for the artists whose names match the given query string
 * 
 * @param {The input from the user to use to search the artists} queryStr 
 * @returns The list of artists which match the given string. Null if no results were found.
 */
function searchArtist(queryStr) {
    let results = [];
    let hasResults = false;

    if (queryStr.toLowerCase().includes("high") && queryStr.toLowerCase().includes("rank")) {
        results = artists.sort(sortByRankDescending);
        hasResults = true;
    } else if (queryStr.toLowerCase().includes("low") && queryStr.toLowerCase().includes("rank")) {
        results = artists.sort(sortByRankAscending);
        hasResults = true;
    } else if (queryStr.toLowerCase().includes("high") && queryStr.toLowerCase().includes("listen")) {
        results = artists.sort(sortByListenersDescending).reverse();
        hasResults = true;
    } else if (queryStr.toLowerCase().includes("low") && queryStr.toLowerCase().includes("listen")) {
        results = artists.sort(sortByListenersAscending);
        hasResults = true;
    } else {
        // iterate over artists and push matching artists onto the results array
        artists.forEach(artist => {
            if (artist.name.toLowerCase().includes(queryStr.toLowerCase())) {
                results.push(artist);
                hasResults = true;
            }
        });
    }
    // set results to null if no results were found
    if (hasResults === false) results = null;
    return results;
}

function sortByListenersAscending(artist1, artist2) {
    return artist1.monthlyListenersInMillions - artist2.monthlyListenersInMillions;
}

function sortByListenersDescending(artist1, artist2) {
    return artist1.monthlyListenersInMillions + artist2.monthlyListenersInMillions;
}

function sortByRankAscending(artist1, artist2) {
    return artist1.rank - artist2.rank;
}

function sortByRankDescending(artist1, artist2) {
    return artist1.rank + artist2.rank;
}

module.exports = {
    randomIntFromInterval,
    findArtistByName,
    searchArtist,
    sortByListenersAscending,
    sortByListenersDescending,
    sortByRankAscending,
    sortByRankDescending
}