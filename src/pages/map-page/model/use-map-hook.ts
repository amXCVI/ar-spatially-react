const useMapHook = () => {
    const onChangeCoords = (e: {
        topLeftLat: number;
        topLeftLng: number;
        botRightLat: number;
        botRightLng: number;
    }) => {
        console.log(e);
    };

    return { onChangeCoords };
};

export default useMapHook;
