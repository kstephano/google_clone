const allPagesButton = document.querySelector('#all-pages-button');
const randomPageButton = document.querySelector('#random-page-button');
const textInput = document.querySelector('input');

initListeners();

function getSearchInput () {
    return textInput.value;
}

function initListeners() {
    allPagesButton.addEventListener('click', e => search(e));
    randomPageButton.addEventListener('click', randomSearch);
}


function search(e){
    e.preventDefault();
    const input = getSearchInput();
    console.log(input)

    // if text exists
    if (input) {
        fetchQuery();
    } else {
        // do something
    }
}

async function fetchQuery() {
    const response = await fetch(`http://localhost:3000/artists/query${getSearchInput()}`);
    const data = await response.json();

    console.log(data);
    // todo
    window.location.href = 'http://127.0.0.1:5500/client/static/html/results.html'
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