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
    },
});

export const selectedUserActions = selectedUserSlice.actions;
export default selectedUserSlice.reducer;
