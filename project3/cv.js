var expandEducation = false;
var weatherData

function expandBSC() {
   expandEducation = !expandEducation;
    document.getElementById("BSC").style.display = (expandEducation) ? "inline" :"none";
}
function showWeatherAlert(){
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=sylhet&appid=e0748595c399119a34571cab65adec9a')
   .then((response) => {
    console.log(response.data);
    weatherData = response.data;
    var weatherCondition = weatherData.weather[0].description;
    var temperature = weatherData.coord.lat;
    swal({
        title: weatherData.name,
        text: "Condition: "+weatherCondition+"  Temperature: "+temperature+" degree",
        timer: 2000,
        icon: "./image/cloudy.png",
        button: false,
    });
    });
}