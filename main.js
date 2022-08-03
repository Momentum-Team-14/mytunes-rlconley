console.log('connected!')

let resultsDiv = document.querySelector('#results')
console.log('results div', resultsDiv)



let searchBaseUrl = 'https://api.artic.edu/api/v1/artworks/search?q='

let searchForm = document.querySelector('#search-form')

searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let searchBox = document.querySelector('#search-box')
    let searchUrl = `${searchBaseUrl}${searchBox.value}`
    console.log('search url', searchUrl)
    getSearchResults(searchUrl)
})

function getSearchResults(url) {
    fetch(url, {
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

}