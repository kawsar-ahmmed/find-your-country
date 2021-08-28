

const loadData = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => getData(data))
}
loadData()

const getData = countris => {
    const getSection = document.getElementById('load-data');
    for(country of countris){
        const div = document.createElement('div');
        div.classList.add('country-button')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <button onclick="loarCountryData('${country.name}')">Country Info</button>
        `
        getSection.appendChild(div)
    }
    // console.log(countris)
}

const loarCountryData = countryInfo => {
    const countryUrl = `https://restcountries.eu/rest/v2/name/${countryInfo}`
    fetch(countryUrl)
    .then(res => res.json())
    .then(data => countryData(data[0]))

}

const countryData = countryDetails => {
    const countryDiv = document.getElementById('country-data');
    countryDiv.innerHTML = `
    <p>${countryDetails.name}</p>
    <img width = 150px; src="${countryDetails.flag}" alt="">
    `
    // console.log(countryDetails)
}