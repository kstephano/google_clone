const allPagesButton = document.querySelector('#all-pages-button')
const randomPageButton = document.querySelector('#random-page-button')

initListeners();

function getSearchInput () {
    const textInput = document.querySelector('input').value;
    return textInput;
}

function initListeners() {
    allPagesButton.addEventListener('click', search)
    randomPageButton.addEventListener('click', randomSearch)
}


function search(){
    let query = getSearchInput();
    console.log(query)

    // if text exists
    if (query) {
        if (query.toLowerCase() == "artists") {
            searchAllArtists()
        } else {
            searchForArtist()
        }
    }
}

async function fetchQuery(e) {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/artists/query${getSearchInput()}`);
    const data = await response.json();

    // todo
    // window.location.href = 
}

function randomSearch(){
    let luckyText = saveTextInput()
    console.log(luckyText)
    if (luckyText) {
        if (luckyText.toLowerCase() == "artists") {
            getRandomArtist()
        } else {
            getArtistWiki(luckyText)
        }
    }
}

function getRandomArtist() {
    fetch('http://localhost:3000/artists/random')
    .then(r => r.json())
    .then(data => window.location.href = `${data.wikiUrl}`)
    .catch(console.warn)
}

function getArtistWiki(luckyText) {
    let luckyTextModified = luckyText.replace(/\s/g, '%20');
    fetch(`http://localhost:3000/artists/${luckyTextModified}`)
    .then(r => r.json())
    .then(data => window.location.href = `${data.wikiUrl}`)
    .catch(console.warn)
}