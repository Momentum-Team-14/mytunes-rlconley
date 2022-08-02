console.log('connected!')

let resultsDiv = document.querySelector('#results')
console.log('results div', resultsDiv)

let searchUrl = 'https://api.artic.edu/api/v1/artworks?page=2&limit=100'

fetch(searchUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
})
    // response is whatever the fetch returns
    .then(function (response) {
        return response.json()
    })
    // data is whatever the above code returns, in this case response.json()
    .then(function (data) {
        console.log(data.data)
    })