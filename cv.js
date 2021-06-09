let expandEducation = false;
let isLIMexpanded = false;
let isHNCexpanded = false;
let isOFDexpanded = false;
let isHMAexpanded = false;
let expandImage = "./image/expand.png";
let collapseImage = "./image/collapse.png";
let weatherData

function expandBSC() {
   expandEducation = !expandEducation;
    document.getElementById("BSC").style.display = (expandEducation) ? "inline" :"none";
    document.getElementById("bsc").style.backgroundColor = (expandEducation) ? "#D0D8D2" :"";
    document.getElementById("BSC_image").src = (expandEducation) ? collapseImage : expandImage;
}

function expandLIM() {
    isLIMexpanded = !isLIMexpanded;
     document.getElementById("LIM").style.display = (isLIMexpanded) ? "inline" :"none";
     document.getElementById("lim").style.backgroundColor = (isLIMexpanded) ? "#D0D8D2" :"";
     document.getElementById("LIM_image").src = (isLIMexpanded) ? collapseImage : expandImage;
 }

 function expandHNC() {
    isHNCexpanded = !isHNCexpanded;
     document.getElementById("HN").style.display = (isHNCexpanded) ? "inline" :"none";
     document.getElementById("hnc").style.backgroundColor = (isHNCexpanded) ? "#D0D8D2" :"";
     document.getElementById("HN_image").src = (isHNCexpanded) ? collapseImage : expandImage;
 }

 function expandHMA() {
    isHMAexpanded = !isHMAexpanded;
     document.getElementById("HMA").style.display = (isHMAexpanded) ? "inline" :"none";
     document.getElementById("hma").style.backgroundColor = (isHMAexpanded) ? "#D0D8D2" :"";
     document.getElementById("HMA_image").src = (isHMAexpanded) ? collapseImage : expandImage;
 }


 function expandOFD() {
    isOFDexpanded = !isOFDexpanded;
     document.getElementById("OFD").style.display = (isOFDexpanded) ? "inline" :"none";
     document.getElementById("ofd").style.backgroundColor = (isOFDexpanded) ? "#D0D8D2" :""
     document.getElementById("OFD_image").src = (isOFDexpanded) ? collapseImage : expandImage;
 }
function showWeatherAlert(){
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=sylhet&appid=e0748595c399119a34571cab65adec9a')
   .then(({data}) => {
    let weatherCondition = data.weather[0].description;
    let temperature = data.coord.lat;
    swal({
        title: data.name,
        text: "Condition: "+weatherCondition+"  Temperature: "+temperature+" degree",
        timer: 2000,
        icon: "./image/cloudy.png",
        button: false,
    });
    });
}