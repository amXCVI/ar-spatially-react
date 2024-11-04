import { Action, Reducer, combineReducers, configureStore } from "@reduxjs/toolkit";

import { allFeedsSlice, selectedFeedSlice, selectedUserSlice, subscribtionsSlice } from "@/shared/stores/feeds-store";
import { allObjectsSlice } from "@/shared/stores/objects-store";

const combinedReducer = combineReducers({
    selectedFeedSlice: selectedFeedSlice,
    allFeedsSlice: allFeedsSlice,
    selectedUserSlice: selectedUserSlice,
    subscribtionsSlice: subscribtionsSlice,
    allObjectsSlice: allObjectsSlice,
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
