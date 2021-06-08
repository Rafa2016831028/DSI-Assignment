var expandEducation = false;
var isexpandLIM = false;
var isexpandHN = false;
var isOFDexpanded = false;
var isHMAexpanded = false;
var expandImage = "./image/expand.png";
var collapseImage = "./image/collapse.png";
var weatherData

function expandBSC() {
   expandEducation = !expandEducation;
    document.getElementById("BSC").style.display = (expandEducation) ? "inline" :"none";
    document.getElementById("BSC_image").src = (expandEducation) ? collapseImage : expandImage;
}

function expandLIM() {
    isexpandLIM = !isexpandLIM;
     document.getElementById("LIM").style.display = (isexpandLIM) ? "inline" :"none";
     document.getElementById("LIM_image").src = (isexpandLIM) ? collapseImage : expandImage;
 }

 function expandHN() {
    isexpandHN = !isexpandHN;
     document.getElementById("HN").style.display = (isexpandHN) ? "inline" :"none";
     document.getElementById("HN_image").src = (isexpandHN) ? collapseImage : expandImage;
 }

 function expandHMA() {
    isHMAexpanded = !isHMAexpanded;
     document.getElementById("HMA").style.display = (isHMAexpanded) ? "inline" :"none";
     document.getElementById("HMA_image").src = (isHMAexpanded) ? collapseImage : expandImage;
 }


 function expandOFD() {
    isOFDexpanded = !isOFDexpanded;
     document.getElementById("OFD").style.display = (isOFDexpanded) ? "inline" :"none";
     document.getElementById("OFD_image").src = (isOFDexpanded) ? collapseImage : expandImage;
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