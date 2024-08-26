import apiClient from "@/shared/api";
import { MarkerInterface } from "@/shared/types";

const fintPointsByLocation = async ({ lat, lng, radius }: { lat: number; lng: number; radius: number }) => {
    return await apiClient
        .post("/gateway/object/find/location", {
            lat: lat,
            lng: lng,
            // Здесь инвертирую радиус (значение подобрал эмпирически)
            radius: (1 / radius) * 500000,
        })
        .then((res) => {
            const markers: MarkerInterface[] = res.data.data.objectsList;

            return markers;
        })
        .catch((err) => {
            throw err;
        });
};

export const pointsApi = { fintPointsByLocation };
