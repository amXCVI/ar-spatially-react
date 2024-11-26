import { calcToPlane } from "./geoToPlane.js";

let deviceData = {
  latitudeDevice: 0.0,
  longitudeDevice: 0.0,
  angleDevice: 0.0,
};
watchLocation();
/* Постоянное обновление данных о геолокации устройства */
async function watchLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(devicePosition, handleError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

/* Обработка ошибок геолокации */
function handleError(error) {
  let errorMessage = "";
  switch (error.code) {
    case error.PERMISSION_DENIED:
      errorMessage = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      errorMessage = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      errorMessage = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      errorMessage = "An unknown error occurred.";
      break;
  }
  console.error("Error getting geolocation: ", errorMessage);
  alert(errorMessage);
}

/* Обработка данных о местоположении устройства */
function devicePosition(position) {
  deviceData.latitudeDevice = position.coords.latitude;
  deviceData.longitudeDevice = position.coords.longitude;

  document.getElementById("latDevice").value = deviceData.latitudeDevice;
  document.getElementById("lonDevice").value = deviceData.longitudeDevice;

  let lat = document.getElementById("inputLat").value;
  let lon = document.getElementById("inputLon").value;

  if (lat == 0) {
    document.getElementById("inputLat").value = deviceData.latitudeDevice;
  }
  if (lon == 0){
    document.getElementById("inputLon").value = deviceData.longitudeDevice;
  }

  checking();
}

/* Расчет Расстояния от пользователя, до введённых координат */
function checking() {
  let xPosition = 0.0;
  let zPosition = 0.0;

  const inputLat = parseFloat(document.getElementById("inputLat").value);
  const inputLon = parseFloat(document.getElementById("inputLon").value);

  if (!isNaN(inputLat) && !isNaN(inputLon)) {
    let calcDevice = calcToPlane(
      deviceData.latitudeDevice,
      deviceData.longitudeDevice
    ); //------ Device to Plane

    let calcObj = calcToPlane(inputLat, inputLon);

    if (calcDevice.x && calcDevice.z && calcObj.x && calcObj.z) {
      //------------------------------ Расчет Расстояния
      xPosition = calcDevice.x - calcObj.x;
      zPosition = calcDevice.z - calcObj.z;
      let distance = 
        Math.sqrt(xPosition * xPosition + zPosition * zPosition
      ).toFixed(2);
      document.getElementById("distance").value = distance;
      
      checkDistance(distance);
    }
  }
}

/* Функция отображения или скрытия кнопки для запуска AR */
function checkDistance(distance){
  
      /* Если "Расстояние до объекта" < "Допустимое расстояние", то отображаем кнопку*/
      let dis = parseFloat(document.getElementById("permissDistance").value);

      if (distance <= dis){
        
        document.getElementById("linkImage").style.display = "block";
      }else{
        
        document.getElementById("linkImage").style.display = "none";
      }
}
/* При изменении значений в полях "Широта" и "Долгота" */
document.getElementById("inputLat").addEventListener("input", checking);
document.getElementById("inputLon").addEventListener("input", checking);

/* При изменении значения в поле "Допустимое расстояние до объекта" запускаем функцию checkDistance*/
document.getElementById("permissDistance").addEventListener("input", function(){
  
  checkDistance(document.getElementById("distance").value);
});

document.getElementById("linkImage").addEventListener("click", function(){
  
  document.getElementById("popup").style.display = "none";
  document.getElementById("arModel").style.display = "block";
});