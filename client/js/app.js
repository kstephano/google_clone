function getRandomArtist() {
    fetch('http://localhost:3000/artists/random')
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(console.warn)
}

module.exports = { getRandomArtist }