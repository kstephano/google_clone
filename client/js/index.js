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
        // fetchQuery();
        localStorage.setItem("query", input);
        window.location.href = 'http://127.0.0.1:5500/client/static/html/results.html';
    } else {
        // do something
    }
}

// to put inside results.js
// async function fetchQuery() {
//     const response = await fetch(`http://localhost:3000/query/${getSearchInput()}`);
//     const data = await response.json();

//     console.log(data);
//     // todo
//     // window.location.href = 'http://127.0.0.1:5500/client/static/html/results.html'
//     return data;
// }

function randomSearch(){
    const luckyText = getSearchInput()

    if (luckyText) {
        if (luckyText.toLowerCase() == "artists") {
            getRandomArtist()
        } else {
            getArtistWiki(luckyText)
        }
    } else {
        getRandomArtist();
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