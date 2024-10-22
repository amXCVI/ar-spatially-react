import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootStateInterface } from "@/app/store-provider";

import { UserSubscriberInterface } from "@/shared/types";

interface SubscribtionsStateInterface {
    subscribtions: UserSubscriberInterface[];
}
const initialState: SubscribtionsStateInterface = {
    subscribtions: [],
};

const subscribtionsSlice = createSlice({
    name: "subscribtions",
    initialState: initialState,
    reducers: {
        setSubscribtions: (state, action: PayloadAction<UserSubscriberInterface[]>) => {
            state.subscribtions = action.payload;
        },
        addSubscribtion: (state, action: PayloadAction<{ subscribtion: UserSubscriberInterface }>) => {
            state.subscribtions.push(action.payload.subscribtion);
        },
        deleteSubscribtion: (state, action: PayloadAction<{ subscribtionId: string }>) => {
            state.subscribtions = state.subscribtions.filter((item) => item.userId !== action.payload.subscribtionId);
        },
    },
});

const selectSubscribtionById = (state: RootStateInterface, userId: string) =>
    state.subscribtionsSlice.subscribtions?.find((obj) => obj.userId === userId);

export const subscribtionsSelectors = { selectSubscribtionById };
export const subscribtionsActions = subscribtionsSlice.actions;
export default subscribtionsSlice.reducer;
