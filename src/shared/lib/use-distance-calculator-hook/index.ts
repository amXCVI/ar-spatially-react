const useDistanceCalculatorHook = () => {
    // https://stackoverflow.com/questions/70604402/how-to-calculate-the-distance-between-differents-lat-long-and-display-on-map-dyn

    const toRadians = (degrees: number) => {
        const pi = Math.PI;
        return degrees * (pi / 180);
    };

    const haversineDistance = (origin: { lat: number; lng: number }, destination: { lat: number; lng: number }) => {
        const { lat: lat1, lng: lon1 } = origin;
        const { lat: lat2, lng: lon2 } = destination;
        const radius = 6371; // earth radius in km

        const dlat = toRadians(lat2 - lat1);
        const dlon = toRadians(lon2 - lon1);
        const a =
            Math.sin(dlat / 2) * Math.sin(dlat / 2) +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dlon / 2) * Math.sin(dlon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = radius * c;

        return d;
    };

    const getPosition = () => {
        // Simple wrapper
        return new Promise<GeolocationPosition>((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej);
        });
    };

    const haversineDistanceByMyLocation = async ({ lat, lng }: { lat: number; lng: number }) => {
        const myPosition = await getPosition();

        const distance = haversineDistance(
            { lat: myPosition.coords.latitude, lng: myPosition.coords.longitude },
            { lat, lng },
        );

        if (distance >= 10) {
            return `${distance.toFixed(0)} km`;
        }

        if (distance >= 1) {
            return `${distance.toFixed(1)} km`;
        }

        if (distance < 1) {
            return `${(distance * 1000).toFixed(0)} m`;
        }

        return "";
    };

    return { haversineDistance, haversineDistanceByMyLocation };
};

export { useDistanceCalculatorHook };
