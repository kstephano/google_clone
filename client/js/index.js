const allPagesButton = document.querySelector('#all-pages-button')
const randomPageButton = document.querySelector('#random-page-button')


function saveTextInput () {
        const textInput = document.querySelector('input').value
        return textInput
}

allPagesButton.addEventListener('click', search)
randomPageButton.addEventListener('click', randomSearch)

function search(){
    let searchedText = saveTextInput()
    console.log(searchedText)
    if (searchedText) {
        if (searchedText.toLowerCase() == "artists") {
            searchAllArtists()
        } else {
            searchForArtist()
        }
    }
}

function randomSearch(){
    let luckyText = saveTextInput()
    console.log(luckyText)
    if (luckyText) {
        if (luckyText.toLowerCase() == "artists") {
            console.log('YES')
            getRandomArtist()
        } else {
            getArtist()
        }
    }
}
