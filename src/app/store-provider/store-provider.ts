import { Action, Reducer, combineReducers, configureStore } from "@reduxjs/toolkit";

import {
    allFeedsSlice,
    allObjectsSlice,
    layersSlice,
    selectedFeedSlice,
    selectedUserSlice,
    subscribtionsSlice,
} from "@/shared/stores";

const combinedReducer = combineReducers({
    selectedFeedSlice: selectedFeedSlice,
    allFeedsSlice: allFeedsSlice,
    selectedUserSlice: selectedUserSlice,
    subscribtionsSlice: subscribtionsSlice,
    allObjectsSlice: allObjectsSlice,
    layersSlice: layersSlice,
});

const rootReducer: Reducer = (state: RootStateInterface, action: Action) => {
    // Если делается выход - очищаю весь стор
    // if (action.type === "user/logout") {
    //     state = {} as RootStateInterface;
    // }
    return combinedReducer(state, action);
};

export type RootStateInterface = ReturnType<typeof combinedReducer>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
});
