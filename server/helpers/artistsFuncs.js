const artists = require('../data/artists');

/**
 * 
 * Method to get a random number from a given interval.
 * 
 * @param {The minimum value to define the lower boundary of the interval} min 
 * @param {The maximum value to define the upper boundary of the interval} max 
 * @returns A random int from the given interval.
 */
 function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function findArtistByName(name) {
    let result = null;

    artists.forEach(artist => {
        if(artist.name.toLowerCase() === name.toLowerCase()) result = artist;
    })
    return result;
}

// function searchName(queryStr) {
//     let results = [];

//     artists.forEach(artist => {
//         if (artist.name.includes(queryStr)) results.push(artist);
//     })


// }

module.exports = {
    randomIntFromInterval,
    findArtistByName
}