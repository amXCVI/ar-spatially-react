import { MouseEvent, useRef, useState } from "react";
import { SECTORS_COUNT } from "./data";

const useSpheresHook = () => {
    const spheresImageRef = useRef<HTMLDivElement | null>(null);
    const [selectedSector, setSelectedSector] = useState<number>(0);

    const handleRotate = (event: MouseEvent<HTMLDivElement>) => {
        if (spheresImageRef.current) {
            // Получаем координаты элемента
            const rect = spheresImageRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Получаем координаты клика
            const clickX = event.clientX;
            const clickY = event.clientY;

            // Вычисляем угол
            const angle = Math.atan2(clickY - centerY, clickX - centerX); // угол в радианах
            const normalizedAngle = (angle + Math.PI) / (2 * Math.PI); // приведение угла к диапазону [0, 1]
            const sector = Math.floor(normalizedAngle * SECTORS_COUNT); // делим круг на секторы

            setSelectedSector((e) => e + sector - 3); // 3 подобрано эмпирически. Сдвиг от оси Х до нужной точки активности
        }
    };

    return { spheresImageRef, selectedSector, SECTORS_COUNT, handleRotate };
};

export { useSpheresHook };
