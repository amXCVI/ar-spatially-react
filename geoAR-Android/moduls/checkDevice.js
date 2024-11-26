// Инициализация переменной
let deviceAndroid = false;
let deviceIOS = false;

function checkDevice() {
  // Проверка, запущена ли страница на Android устройстве
  if (/Android/i.test(navigator.userAgent)) {
    deviceAndroid = true;
    console.log("Is Android device:", deviceAndroid); // Вывод результата в консоль
    return "Android";
  }

  // Проверка, запущена ли страница на iOS устройстве
  if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    deviceIOS = true;
    console.log("Is iOS device:", deviceIOS); // Вывод результата в консоль
    return "IOS";
  }

  return "other";
}

export {checkDevice};
