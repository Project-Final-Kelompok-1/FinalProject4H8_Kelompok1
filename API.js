const searchButton = document.querySelector("#button-addon2");
const inputKota = document.querySelector('.input-kota')

searchButton.addEventListener('click', function() {

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputKota.value+"&appid=4ad1b859d99bdb37a570973a4e9b91ae&units=metric")
        .then(response => response.json())
        .then(response => {
            let result = document.querySelector('.result')

            result.innerHTML = `<h1>${response.name}</h1><br>
                                <h5><span class="temp">${response.main.temp}°С</span> </h5>
                                <h5><span class="temp">condition ${response.weather[0].description}</span></h5>
                                <h5>Wind Speed : ${response.wind.speed} Km/h</h5>` 
        })
    inputKeyword.value = null;

})