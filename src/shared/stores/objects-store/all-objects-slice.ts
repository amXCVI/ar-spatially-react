import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ObjectInterface } from "@/shared/types";

interface AllObjectsStateInterface {
    objectsList: ObjectInterface[];
    loading: boolean;

    objectsFilterString: string;
}
const initialState: AllObjectsStateInterface = {
    objectsList: [],
    loading: false,
    objectsFilterString: "",
};

const allObjectsSlice = createSlice({
    name: "all-objects",
    initialState: initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },

        // objects
        setObjectsToList: (state, action: PayloadAction<{ objects: ObjectInterface[] }>) => {
            state.objectsList = action.payload.objects;
        },
        addObjectsToList: (state, action: PayloadAction<{ objects: ObjectInterface[] }>) => {
            state.objectsList = state.objectsList.concat(action.payload.objects);
        },
        deleteObjectFromList: (state, action: PayloadAction<{ objectId: string }>) => {
            state.objectsList = state.objectsList.filter((item) => item.id !== action.payload.objectId);
        },
        unshiftObjectToList: (state, action: PayloadAction<{ object: ObjectInterface }>) => {
            state.objectsList.unshift(action.payload.object);
        },

        // ObjectsStringFilter
        onChangeFilterString: (state, action: PayloadAction<string>) => {
            state.objectsFilterString = action.payload;
        },

        // ObjectActions
        likeUnlikeObject: (state, action: PayloadAction<{ objectId: string; userLike: boolean }>) => {
            state.objectsList = state.objectsList.map((item) =>
                item.id === action.payload.objectId ? { ...item, userLike: action.payload.userLike } : item,
            );
        },
        favoriteObject: (state, action: PayloadAction<{ objectId: string; userFavorite: boolean }>) => {
            state.objectsList = state.objectsList.map((item) =>
                item.id === action.payload.objectId ? { ...item, userFavorite: action.payload.userFavorite } : item,
            );
        },
    },
});

export const allObjectsActions = allObjectsSlice.actions;
export default allObjectsSlice.reducer;
