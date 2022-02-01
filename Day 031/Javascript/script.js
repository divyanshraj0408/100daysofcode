window.addEventListener("load", () => {
    let longitude
    let latitude
    let temperatureDescription = document.querySelector(".teperature-description")
    let temperatureDegree = document.querySelector(".weather-display-el")
    let locationTimezone = document.querySelector(".area-display-el")


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            longitude = position.coords.longitude
            latitude = position.coords.latitude

            const api = `http://api.weatherapi.com/v1/current.json?key={API-Key}&q=${latitude},${longitude}&aqi=no`
            fetch(api)
                .then(data => {
                    return data.json()
                })
                .then(data => {
                    console.log(data)
                    const { feelslike_c, condition } = data.current
                    console.log(data.current)
                    console.log(data.current.condition)
                    const { text } = data.current.condition.text
                        // Set DOM Element from the API
                    temperatureDegree.textContent = feelslike_c
                    temperatureDescription.textContent = text
                })
        })


    } else {
        h1.textContent = "Please enable location"
    }
})