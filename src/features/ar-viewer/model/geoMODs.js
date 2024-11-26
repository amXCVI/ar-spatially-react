/*
1. geoDevice.js - модуль для получения данных о GPS и направлении пользователя в мире 
2. geoToPlane.js - модуль перевода широты и долготы в плоскостные координаты
3. modelLoad.js - модуль three.js
4. checkDevice.js - Модуль определения Device
*/
import { checkDevice } from "./checkDevice.js";
import { deviceData, getMobileOperatingSystem, watchLocation } from "./geoDevice.js";
import { calcToPlane } from "./geoToPlane.js";
import { arSupport, checkARSupport, sessionAR, updateModel, updateRotateGroup } from "./modelLoad.js";

let device = ""; // Android / IOS / other

/* Запуск функций при загрузке DOM */
document.addEventListener("DOMContentLoaded", function () {
    getMobileOperatingSystem(); //---------- Компас
    watchLocation(); //--------------------- GPSLocation
    checkARSupport(); //-------------------- Узнаем, поддерживается ли WebXR
    openPopup(); //------------------------- Открываем панель POP-UP
    device = checkDevice(); //-------------- С какого устройства запущена страница: Android / IOS / other
});

/* После полной загрузки страницы заполняем поля широта и долгота данными полученными от gps */
window.addEventListener("load", function () {
    if (deviceData.latitudeDevice && deviceData.longitudeDevice) {
        document.getElementById("inputLat").value = deviceData.latitudeDevice;
        document.getElementById("inputLon").value = deviceData.longitudeDevice;
    }
    if (arSupport) {
        document.getElementById("ARButton").style.display = "none";
    }
});

/* При нажатии на кнопку "я готов" */
// document.getElementById("readyButton").addEventListener("click", function () {
//     if (arSupport) {
//         //----------------------------------------------------------------------------------- Если режим AR поддерживается
//         /* Расчет положения 3Dmodels на сцене */
//         let xPosition = 0.0;
//         let zPosition = 0.0;

//         const inputLat = parseFloat(document.getElementById("inputLat").value);
//         const inputLon = parseFloat(document.getElementById("inputLon").value);

//         if (!isNaN(inputLat) && !isNaN(inputLon)) {
//             //---------------------------------------------------- Если координаты 3D модели получены...

//             let calcDevice = calcToPlane(deviceData.latitudeDevice, deviceData.longitudeDevice); //------ Device to Plane
//             let calcObj = calcToPlane(inputLat, inputLon); //-------------------------------------------- 3Dmodels to Plane

//             if (calcDevice.x && calcDevice.z && calcObj.x && calcObj.z) {
//                 //------------------------------ Расчет положения 3Dmodels на сцене
//                 xPosition = calcDevice.x - calcObj.x;
//                 zPosition = calcDevice.z - calcObj.z;
//             }
//         }

//         /* Внесение изменений в положение 3Dmodels на сцене и запуск AR*/
//         if (xPosition !== undefined && zPosition !== undefined && xPosition != 0.0 && zPosition != 0.0) {
//             updateModel(xPosition, zPosition);
//             deviceData.angleDevice ? updateRotateGroup(deviceData.angleDevice) : undefined;
//             document.getElementById("ARButton").click();
//         } else {
//             document.getElementById("ARButton").click();
//         }

//         console.log(xPosition + " / " + zPosition);
//     } else {
//         alert("Ваше устройство не поддерживает WebXR");
//     }
// });

/* ОТЛАДКА */

/* РАБОТА с popup для ОТЛАДКИ */
// Функция для открытия pop-up
function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlays").style.display = "block";
}

// Функция для закрытия pop-up
function closePopup() {
    if (arSupport) {
        document.getElementById("popup").style.display = "none";
        document.getElementById("overlays").style.display = "none";
    }
}

/* Кнопка скрытия popup */
// document.getElementById("closePopup").addEventListener("click", function () {
//     const inputLat = parseFloat(document.getElementById("inputLat").value);
//     const inputLon = parseFloat(document.getElementById("inputLon").value);
//     if (!isNaN(inputLat) && !isNaN(inputLon)) {
//         document.getElementById("popup").style.display = "none";
//         document.getElementById("infoPanel").style.display = "block";
//     }
//     // Задержка в 3 секунды перед отображением кнопки "Я готов"
//     setTimeout(function () {
//         document.getElementById("readyButton").style.display = "block";
//     }, 5000);
// });

/* Кнопка скрытия инфо панели*/
// document.getElementById("readyButton").addEventListener("click", function () {
//     document.getElementById("infoPanel").style.display = "none";
// });

/* ================================================= */

// Возвращает широту и долготу полученные от gps или null при ошибке
const getDeviceData = () => {
    if (deviceData.latitudeDevice && deviceData.longitudeDevice) {
        return { lat: deviceData.latitudeDevice, lng: deviceData.longitudeDevice };
    } else {
        return null;
    }
};

const renderArObject = ({ lat, lng }) => {
    if (arSupport) {
        //----------------------------------------------------------------------------------- Если режим AR поддерживается
        /* Расчет положения 3Dmodels на сцене */
        let xPosition = 0.0;
        let zPosition = 0.0;

        const inputLat = lat;
        const inputLon = lng;

        if (!isNaN(inputLat) && !isNaN(inputLon)) {
            //---------------------------------------------------- Если координаты 3D модели получены...

            let calcDevice = calcToPlane(deviceData.latitudeDevice, deviceData.longitudeDevice); //------ Device to Plane
            let calcObj = calcToPlane(inputLat, inputLon); //-------------------------------------------- 3Dmodels to Plane

            if (calcDevice.x && calcDevice.z && calcObj.x && calcObj.z) {
                //------------------------------ Расчет положения 3Dmodels на сцене
                xPosition = calcDevice.x - calcObj.x;
                zPosition = calcDevice.z - calcObj.z;
            }
        }

        /* Внесение изменений в положение 3Dmodels на сцене и запуск AR*/
        if (xPosition !== undefined && zPosition !== undefined && xPosition != 0.0 && zPosition != 0.0) {
            updateModel(xPosition, zPosition);
            deviceData.angleDevice ? updateRotateGroup(deviceData.angleDevice) : undefined;
            document.getElementById("ARButton").click();
        } else {
            document.getElementById("ARButton").click();
        }

        console.log(xPosition + " / " + zPosition);
    } else {
        alert("Ваше устройство не поддерживает WebXR");
    }
};
export {
    getDeviceData, // ------------------------------ // Возвращает широту и долготу полученные от gps или null при ошибке
    renderArObject,
};
