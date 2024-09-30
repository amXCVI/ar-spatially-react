import { MouseEvent, TouchEvent, useEffect, useRef, useState } from "react";

import { SECTORS_COUNT } from "./data";

const useSpheresHook = () => {
    const spheresImageRef = useRef<HTMLDivElement | null>(null);
    const [selectedSector, setSelectedSector] = useState<number>(0);

    const [rotation, setRotation] = useState(0);
    const [startX, setStartX] = useState(0);
    const speedFactor = 0.01; // коэффициент для замедления вращения

    const handleTouchStart = (e: TouchEvent) => {
        e.preventDefault();
        console.log("handleTouchStart");
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        console.log("handleTouchMove");
        const moveX = e.touches[0].clientX - startX;
        const angle = moveX * speedFactor; // уменьшить скорость вращения
        setRotation((prevRotation) => prevRotation + angle);
    };

    const handleTouchEnd = () => {
        console.log("handleTouchEnd");
        const sectorAngle = 360 / SECTORS_COUNT;

        // Округлить текущий угол до ближайшего сектора
        const closestSector = Math.round(rotation / sectorAngle) * sectorAngle;

        // Установить новую позицию с "прилипанием" к сектору
        setRotation(closestSector);
    };

    const handleRotate = (event: MouseEvent<HTMLDivElement>) => {
        console.log("handleRotate");
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

            console.log(sector * (360 / SECTORS_COUNT));
            // Установить новую позицию с "прилипанием" к сектору
            setRotation((e) => e - (sector - 3) * (360 / SECTORS_COUNT));
        }
    };

    const handleRotateToSector = (event: number) => {
        const sectorAngle = 360 / SECTORS_COUNT;

        setRotation((e) => e + sectorAngle * event);
    };

    useEffect(() => {
        const sectorAngle = 360 / SECTORS_COUNT;

        const sector = -rotation / sectorAngle;

        console.log(sector);

        setSelectedSector(sector);
    }, [rotation]);

    return {
        spheresImageRef,
        selectedSector,
        rotation,
        SECTORS_COUNT,
        handleRotate,
        handleTouchMove,
        handleTouchStart,
        handleTouchEnd,
        handleRotateToSector,
    };
};

export { useSpheresHook };
