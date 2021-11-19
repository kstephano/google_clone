const results = document.querySelector('#results');

const searched = localStorage.getItem("query");

async function fetchQuery() {
    const response = await fetch(`http://localhost:3000/query/${searched}`);
    const data = await response.json();

    if (data.length != undefined) {
        addNumberOfResults(data);
        appendArtists(data);
    } else {
        document.querySelector('#number-of-results').textContent = `No results found`;
    }
}

function addNumberOfResults(data){
    document.querySelector('#number-of-results').textContent = `Around ${data.length} results found`
}

function appendArtists(artists) {
    artists.forEach(appendArtist);
}

function appendArtist(artistData) {

    const newResult = document.createElement('div')

    const titleElement = document.createElement('a')
    titleElement.setAttribute('class', 'result-title')
    titleElement.setAttribute('href', `${artistData.wikiUrl}`)
    titleElement.textContent = `${artistData.name}`
    newResult.append(titleElement)

    const infoElement = document.createElement('p')
    infoElement.setAttribute('class', 'result-info')
    infoElement.textContent = `Global rank: ${artistData.rank} | Monthly listeners (millions): ${artistData.monthlyListenersInMillions} | Gender: ${artistData.sex}`
    newResult.append(infoElement)

    const resultsPage = document.querySelector('#results')
    resultsPage.append(newResult)
    resultsPage.setAttribute('class', 'result-div')
}

fetchQuery();
