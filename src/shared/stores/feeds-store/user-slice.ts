import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { UserProfileInterface } from "@/shared/types";

interface UserStateInterface {
    currentUserProfile: UserProfileInterface | null;
}
const initialState: UserStateInterface = {
    currentUserProfile: null,
};

const selectedUserSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setCurrentUserProfile: (state, action: PayloadAction<UserProfileInterface | null>) => {
            state.currentUserProfile = action.payload;
        },
        addSubscribtion: (state) => {
            state.currentUserProfile = state.currentUserProfile
                ? { ...state.currentUserProfile, subscribersCount: state.currentUserProfile.subscriptionsCount + 1 }
                : null;
        },
        removeSubscribtion: (state) => {
            state.currentUserProfile = state.currentUserProfile
                ? { ...state.currentUserProfile, subscribersCount: state.currentUserProfile.subscriptionsCount - 1 }
                : null;
        },
    },
});

export const selectedUserActions = selectedUserSlice.actions;
export default selectedUserSlice.reducer;
