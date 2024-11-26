export let deviceData = {
  latitudeDevice: 0.0,
  longitudeDevice: 0.0,
  angleDevice: 0.0,
};

/* Постоянное обновление данных о геолокации устройства */
export async function watchLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(devicePosition, handleError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

/* Обработка ошибок геолокации */
function handleError(error) {
  console.error("Error getting geolocation: ", error);
}

/* Обработка данных о местоположении устройства */
function devicePosition(position) {
  deviceData.latitudeDevice = position.coords.latitude;
  deviceData.longitudeDevice = position.coords.longitude;
  let lat = document.getElementById("inputLat").value;
  let lon = document.getElementById("inputLon").value;
  if(lat == 0 && lon == 0){
  document.getElementById("inputLat").value = deviceData.latitudeDevice;
  document.getElementById("inputLon").value = deviceData.longitudeDevice;}
}

/* Определение угла поворота от азимута устройства */
export function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var alphaValues = [];
  var alphaFiltered = 0;

  function filterAlpha(alpha) {
    alphaValues.push(alpha);
    if (alphaValues.length > 10) {
      alphaValues.shift();
    }
    alphaFiltered = alphaValues.reduce((a, b) => a + b, 0) / alphaValues.length;
    return alphaFiltered.toFixed(2);
  }

  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      DeviceOrientationEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            window.addEventListener(
              "deviceorientation",
              function (event) {
                let alpha = event.alpha; // Угол отклонения по оси Z (компасный угол)

                if (alpha !== null && alpha !== undefined) {
                  deviceData.angleDevice = filterAlpha(alpha);
                }
              },
              true
            );
          }
        })
        .catch(console.error);
    } else {
      alert("Ваше устройство не поддерживает DeviceOrientationEvent.");
    }
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    if (window.DeviceOrientationEvent) {
      window.addEventListener(
        "deviceorientation",
        function (event) {
          let alpha = event.alpha;
          if (alpha !== null && alpha !== undefined) {
            deviceData.angleDevice = alpha;
          }
        },
        true
      );
    } else {
      alert("Ваше устройство не поддерживает DeviceOrientationEvent.");
    }
  }
  return "unknown";
}
