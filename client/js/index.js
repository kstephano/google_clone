const allPagesButton = document.querySelector('#all-pages-button');
const randomPageButton = document.querySelector('#random-page-button');
const textInput = document.querySelector('input');

initListeners();

function getSearchInput () {
    return textInput.value;
}

function initListeners() {
    allPagesButton.addEventListener('click', search);
    randomPageButton.addEventListener('click', randomSearch);
}


function search(e){
    e.preventDefault();
    const input = getSearchInput();
    console.log(input)

    // if text exists
    if (input) {
        localStorage.setItem("query", input);
        window.location.href = './results.html';
    }
}

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
