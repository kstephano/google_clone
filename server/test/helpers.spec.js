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

describe('sortByListenersAscending', () => {
    it('should sort artists by monthly listeners in ascending order', () => {
        const sorted = artists.sort(helpers.sortByListenersAscending);
        expect(sorted[0]).toEqual(
            { rank: 20, name: "Eminem", sex: "Male", monthlyListenersInMillions: 47.06, wikiUrl: "https://en.wikipedia.org/wiki/Eminem" }
        );
    })
});

describe('sortByListenersDescending', () => {
    it('should sort artists by monthly listeners in descending order', () => {
        const sorted = artists.sort(helpers.sortByListenersDescending);
        expect(sorted[0]).toEqual(
            { rank: 1, name: "Justin Bieber", sex: "Male", monthlyListenersInMillions: 82.27, wikiUrl: "https://en.wikipedia.org/wiki/Justin_Bieber" }
        );
    })
});

describe('sortByRankAscending', () => {
    it('should sort artists by rank in ascending order', () => {
        const sorted = artists.sort(helpers.sortByRankAscending);
        expect(sorted[0]).toEqual(
            { rank: 1, name: "Justin Bieber", sex: "Male", monthlyListenersInMillions: 82.27, wikiUrl: "https://en.wikipedia.org/wiki/Justin_Bieber" }
        );
    })
});

describe('sortByRankDescending', () => {
    it('should sort artists by rank in descending order', () => {
        const sorted = artists.sort(helpers.sortByRankDescending);
        expect(sorted[0]).toEqual(
            { rank: 20, name: "Eminem", sex: "Male", monthlyListenersInMillions: 47.06, wikiUrl: "https://en.wikipedia.org/wiki/Eminem" }
        );
    })
});

describe('searchArtist', () => {
    it('should return a list of artists sorted by relevence (rank/listeners) given the criteria"artist" ', () => {
        // Sort artists array back into original positions to use in test assertions
        artists.sort(helpers.sortByRankAscending);

        const results = helpers.searchArtist("artist");
        expect(results).toEqual(artists);
    })
    it('should return a list containing the correct artist given the exact name', () => {
        const results = helpers.searchArtist("Justin Bieber");
        expect(results[0]).toEqual(artists[0]);
    })

    it('should return a list containing the correct artist given part of the name', () => {
        const results = helpers.searchArtist("Bieber");
        expect(results[0]).toEqual(artists[0]);
    })

    it('should return a list containing artists with "er" in their name', () => {
        const results = helpers.searchArtist("er");
        expect(results).toEqual([
            { rank: 1, name: "Justin Bieber", sex: "Male", monthlyListenersInMillions: 82.27, wikiUrl: "https://en.wikipedia.org/wiki/Justin_Bieber" },
            { rank: 2, name: "Ed Sheeran", sex: "Male", monthlyListenersInMillions: 79.30, wikiUrl: "https://en.wikipedia.org/wiki/Ed_Sheeran" },
        ]);
    })

    it("should return null when the query doesn't match any artists", () => {
        const results = helpers.searchArtist("empty");
        expect(results).toEqual(null);
    })

    it("should return a list of artists by rank in ascending order when given the criteria 'high' 'rank'", () => {
        const results = helpers.searchArtist("highrank");
        const sortedArtists = artists.sort(helpers.sortByListenersDescending);
        expect(results).toEqual(sortedArtists);
        expect(results[0]).toEqual(sortedArtists[0]);
        expect(results[results.length - 1]).toEqual(sortedArtists[results.length - 1]);
    })

    it("should return a list of artists by rank in descending order when given the criteria 'low' 'rank'", () => {
        const results = helpers.searchArtist("lowrank");
        const sortedArtists = artists.sort(helpers.sortByRankDescending);
        expect(results).toEqual(sortedArtists);
        expect(results[0]).toEqual(sortedArtists[0]);
        expect(results[results.length - 1]).toEqual(sortedArtists[results.length - 1]);
    })

    it("should return a list of artists by monthly listeners in ascending order when given the criteria 'high' 'listen'", () => {
        const results = helpers.searchArtist("highlisteners");
        const sortedArtists = artists.sort(helpers.sortByListenersDescending)
        expect(results).toEqual(sortedArtists);
        expect(results[0]).toEqual(sortedArtists[0]);
        expect(results[results.length - 1]).toEqual(sortedArtists[results.length - 1]);
    })

    it("should return a list of artists by monthly listeners in descending order when given the criteria 'low' 'listen'", () => {
        const results = helpers.searchArtist("lowlisteners");
        const sortedArtists = artists.sort(helpers.sortByListenersAscending)
        expect(results).toEqual(sortedArtists);
        expect(results[0]).toEqual(sortedArtists[0]);
        expect(results[results.length - 1]).toEqual(sortedArtists[results.length - 1]);
    })

    it("should return a list of male artists when the query includes 'male'", () => {
        const results = helpers.searchArtist("male artists");
        expect(results).toContainEqual(
            expect.objectContaining({ rank: 8, name: "Drake", sex: "Male", monthlyListenersInMillions: 58.05, wikiUrl: "https://en.wikipedia.org/wiki/Drake_(musician)" })
        )
        expect(results).not.toContainEqual(
            expect.objectContaining({ rank: 7, name: "Doja Cat", sex: "Female", monthlyListenersInMillions: 59.04, wikiUrl: "https://en.wikipedia.org/wiki/Doja_Cat" })
        )
    })

    it("should return a list of female artists when the query includes 'female'", () => {
        const femaleResults = helpers.searchArtist("female artists");
        expect(femaleResults).toContainEqual(
            expect.objectContaining({ rank: 7, name: "Doja Cat", sex: "Female", monthlyListenersInMillions: 59.04, wikiUrl: "https://en.wikipedia.org/wiki/Doja_Cat" })
        )
        expect(femaleResults).not.toContainEqual(
            expect.objectContaining({ rank: 8, name: "Drake", sex: "Male", monthlyListenersInMillions: 58.05, wikiUrl: "https://en.wikipedia.org/wiki/Drake_(musician)" })
        )
    })
})