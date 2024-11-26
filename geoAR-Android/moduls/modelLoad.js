// Импорт необходимых модулей из библиотеки Three.js
import * as THREE from "three";
import { ARButton } from "three/addons/webxr/ARButton.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";

let camera, scene, renderer, group;
let model,mixer,animations; // Объявляем переменную для модели

export let sessionAR = false;
export let arSupport = false;

// Создаем Raycaster и вектор для мыши
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
// Создаем часы для отслеживания времени
    const clock = new THREE.Clock();
// Инициализация сцены
init();
/* Инициализация сцены. Добавление источников света, 3D модели, камеры, кнопки AR */
function init() {
  // Создаем контейнер для рендера и добавляем его в DOM
  const container = document.createElement("div");
  document.body.appendChild(container);

  // Создаем новую сцену
  scene = new THREE.Scene();

  // Создаем камеру с перспективной проекцией
  camera = new THREE.PerspectiveCamera(
    70, // Угол обзора
    window.innerWidth / window.innerHeight,
    0.01, // Ближняя плоскость отсечения
    200 // Дальняя плоскость отсечения
  );

  // Создаем рендерер с антиалиасингом и прозрачностью
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate);
  renderer.xr.enabled = true; // Включаем поддержку WebXR
  container.appendChild(renderer.domElement);

  // Добавляем кнопку для включения AR
  document.body.appendChild(ARButton.createButton(renderer));
  
  // Добавляем обработчики событий для начала и конца AR-сессии
  renderer.xr.addEventListener('sessionstart', () => {
    sessionAR = true;
    console.log('AR session started');
  });

  renderer.xr.addEventListener('sessionend', () => {
    sessionAR = false;
    console.log('AR session ended');
    location.reload();
  });
  
  // Добавляем HDRI map, Свет, Группу, 3D модель
  const rgbeLoader = new RGBELoader();
  rgbeLoader.load('https://cdn.glitch.global/ccb48a0d-9a6b-4b12-8142-563a460af515/cloudy.hdr?v=1728761459557', function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    // scene.background = new THREE.Color( 'black' ); //------------------- Устанавливаем цвет background вместо текстуры
    scene.environment = texture;
    render();

    // Создаем группу
    group = new THREE.Group();
    group.position.set(0, 0, 0);
    scene.add(group);

    // Добавляем освещение
    var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1);
    group.add( light );

    

    // Загружаем модель GLTF и добавляем её в сцену
    const loader = new GLTFLoader();
    loader.load("https://cdn.glitch.global/ccb48a0d-9a6b-4b12-8142-563a460af515/Babochka.glb?v=1728940909711", function (gltf) {
      model = gltf.scene;
      model.position.set(0, 0, -1.5); // Устанавливаем начальную позицию модели
      model.scale.set(1, 1, 1); // Устанавливаем масштаб модели
      model.material = new THREE.MeshStandardMaterial();
      animations = gltf.animations;
      
      group.add(model); // Добавляем модель в сцену
      
          // Создаем AnimationMixer и включаем анимацию с индексом 0
    const mixer = new THREE.AnimationMixer(model);
    const action = mixer.clipAction(animations[0]);
    action.play();
      
      var spotLight = new THREE.SpotLight( 0xffffff, 2 );
    // spotLight.position.set( 100, 1000, 100 );
    spotLight.position.set( 1, 1, 1000 );

    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 512;
    spotLight.shadow.mapSize.height = 512;

    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;

    model.add( spotLight );

      
    // Обновляем анимацию в цикле рендеринга
    function animate() {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        mixer.update(delta);
        renderer.render(scene, camera);
    }
    animate();
      render();
    }, undefined, function (error) {
      console.error('An error happened during GLTF loading', error);
    });

  }, undefined, function (error) {
    console.error('An error happened during texture loading', error);
  });

  
  if(sessionAR !== true){
    // Добавляем обработчик события изменения размера окна
    window.addEventListener("resize", onWindowResize);
  }
}

// Функция для обработки нажатий и касаний
function handleInteraction(event) {
    // Вычисляем позицию мыши или касания в нормализованных координатах устройства
    if (event.touches) {
        mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (event.touches[0].clientY / window.innerHeight) * 2 + 1;
    } else {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    }

    // Обновляем Raycaster с текущей позиции мыши и камеры
    raycaster.setFromCamera(mouse, camera);

    // Определяем пересечения с объектами сцены
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        // Останавливаем текущую анимацию и запускаем анимацию с индексом 1
        mixer.stopAllAction();
        const action = mixer.clipAction(animations[1]);
        action.play();
    }
}

// Обрабатываем нажатие мыши
window.addEventListener('click', handleInteraction);

// Обрабатываем касание
window.addEventListener('touchstart', handleInteraction);

// Функция для загрузки модели
function updateModel(xPosition,zPosition) {
  if (model) {
    model.position.set(xPosition, 0, zPosition); // Обновляем позицию модели
    model.scale.set(5,5,5);
  }
  
}


/* Обновление вращения группы */
function updateRotateGroup(angleDevice) {
  var angleInDegrees = angleDevice - 180;
  var angleInRadians = angleInDegrees * (Math.PI / 180); // Преобразуем градусы в радианы
  if (group) {
    group.rotation.set(0, -angleInRadians, 0);
    console.log(group.rotation)
  }
}

/* Обновляем параметры камеры и рендера при изменении размера окна */
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

/* Рендеринг */
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();

/* Анимация */
// Анимация и рендеринг сцены
function animate() {
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
}

function checkARSupport() {
    if (navigator.xr) {
        navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
            if (supported) {
                console.log("AR режим поддерживается");
                arSupport = true;
                // Здесь можно добавить логику для отображения кнопки AR или других элементов
            } else {
                console.log("AR режим не поддерживается");
                arSupport = false
                // Здесь можно добавить логику для скрытия кнопки AR или отображения сообщения пользователю
            }
        }).catch((error) => {
            console.error("Ошибка при проверке поддержки AR: ", error);
        });
    } else {
        console.log("WebXR не поддерживается этим браузером");
        arSupport = false;
        // Здесь можно добавить логику для скрытия кнопки AR или отображения сообщения пользователю
    }
}

export {updateRotateGroup, updateModel, checkARSupport};