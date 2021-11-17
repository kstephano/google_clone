const results = document.querySelector('#results');

results.textContent = localStorage.getItem("query");
const searched = localStorage.getItem("query")

async function fetchQuery() {
    console.log(`http://localhost:3000/query/${searched}`)
    const response = await fetch(`http://localhost:3000/query/${searched}`);
    const data = await response.json();

    console.log(data);
    return data;
}

fetchQuery()