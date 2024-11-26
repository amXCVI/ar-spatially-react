import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { LayerInterface, LayerStatus } from "@/shared/types";

interface LayersStateInterface {
    myObjectsOnly: boolean;
    layersList: LayerInterface[];
}

const initialState: LayersStateInterface = {
    myObjectsOnly: false,
    layersList: [],
};

const layersSlice = createSlice({
    name: "layers",
    initialState: initialState,
    reducers: {
        setLayersList: (state, action: PayloadAction<{ layersList: LayerInterface[] }>) => {
            state.layersList = action.payload.layersList;
        },
        setLayerStatus: (state, action: PayloadAction<{ layerId: string; status: LayerStatus }>) => {
            state.layersList = state.layersList.map((layer) =>
                layer.id === action.payload.layerId ? { ...layer, status: action.payload.status } : layer,
            );
        },

        myObjectsOnly: (state) => {
            state.myObjectsOnly = true;
        },
        allObjects: (state) => {
            state.myObjectsOnly = false;
        },
    },
});

export const layersActions = layersSlice.actions;
export default layersSlice.reducer;
