const allPagesButton = document.querySelector('#all-pages-button')
const randomPageButton = document.querySelector('#random-page-button')

function saveTextInput () {
        const textInput = document.querySelector('input').value
        return textInput
}

let luckyText = allPagesButton.addEventListener('click', saveTextInput)
let searchText = randomPageButton.addEventListener('click', saveTextInput)


if (luckyText) {
    if (luckyText.toLowerCase() === "artists") {
        // getRandomArtist()
        console.log("Artist")
    } else {
    getArtist(luckyText)
    }
} else if (searchText) {
    if (luckyText.toLowerCase() === "artists") {
        searchAllArtists()
    } else {
        searchForArtist(searchText)
    }
} else {
    console.log("dumb")
}