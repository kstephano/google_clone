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

    artists.forEach(artist => {
        if (artist.name.toLowerCase().includes(queryStr.toLowerCase())) {
            console.log(artist);
            results.push(artist);
            hasResults = true;
        }
    });

    if (hasResults === false) results = null;
    return results;
}

module.exports = {
    randomIntFromInterval,
    findArtistByName,
    searchArtist
}