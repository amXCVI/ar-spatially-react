import { SECTORS_COUNT, worlds } from "./data";

const getWorldBySector = (selectedSector: number, delta: number) => {
    try {
        return worlds.at((selectedSector + delta) % SECTORS_COUNT);
    } catch (error) {
        throw new Error(`Couldn't find a sphere with index ${selectedSector}`);
    }
};

const useWorldInfoHook = ({ selectedSector, delta }: { selectedSector: number; delta: number }) => {
    const world = getWorldBySector(selectedSector, delta);

    return { world };
};

export { useWorldInfoHook };
