const helpers = require('../helpers/artistsFuncs');
const artists = require('../data/artists');

describe('randomIntFromInterval', () => {
    it('should return a random int between 1 and 10', () => {
        const randInt = helpers.randomIntFromInterval(1, 10);
        expect(randInt).toBeGreaterThanOrEqual(1);
        expect(randInt).toBeLessThanOrEqual(10);
    })

    it('should return a random index within the artists array', () => {
        const randIndex = helpers.randomIntFromInterval(0, artists.length);
        expect(randIndex).toBeGreaterThanOrEqual(0);
        expect(randIndex).toBeLessThanOrEqual(artists.length);
    })
});

describe('findArtistByName', () => {
    it('should find the correct artist given the name', () => {
        const artist = helpers.findArtistByName("Justin Bieber");
        expect(artist).toEqual(artists[0]);
    })

    it('should find the correct artist given the name, regardless of capitalisation of letter', () => {
        const artist = helpers.findArtistByName("jUstIn biEBeR");
        expect(artist).toEqual(artists[0]);
    })

    it('should return null when given the wrong name', () => {
        const artist = helpers.findArtistByName("jUstan biEBar");
        expect(artist).toEqual(null);
    })
});

describe('searchArtist', () => {
    it('should return a list containing the correct artist given the exact name', () => {
        const results = helpers.searchArtist("Justin Bieber");
        expect(results[0]).toEqual(artists[0]);
    });

    it('should return a list containing the correct artist given part of the name', () => {
        const results = helpers.searchArtist("Bieber");
        expect(results[0]).toEqual(artists[0]);
    });

    it('should return a list containing artists with "er" in their name', () => {
        const results = helpers.searchArtist("er");
        expect(results).toEqual([
            { rank: 1, name: "Justin Bieber", monthlyListenersInMillions: 82.27, wikiUrl: "https://en.wikipedia.org/wiki/Justin_Bieber" },
            { rank: 2, name: "Ed Sheeran", monthlyListenersInMillions: 79.30, wikiUrl: "https://en.wikipedia.org/wiki/Ed_Sheeran" },
        ]);
    });

    it("should return null when the query doesn't match any artists", () => {
        const results = helpers.searchArtist("empty");
        expect(results).toEqual(null);
    });
})