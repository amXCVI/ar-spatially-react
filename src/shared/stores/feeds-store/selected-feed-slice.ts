import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { PostInterface } from "@/shared/types";

interface UserFeedsStateInterface {
    currentFeed: PostInterface | null;
}
const initialState: UserFeedsStateInterface = {
    currentFeed: null,
};

const selectedFeedSlice = createSlice({
    name: "selected-feed",
    initialState: initialState,
    reducers: {
        setCurrentFeed: (state, action: PayloadAction<PostInterface | null>) => {
            state.currentFeed = action.payload;
        },
        setLikeToCurrentFeed: (state, action: PayloadAction<{ userLike: boolean; likesCount: number }>) => {
            if (state.currentFeed) {
                state.currentFeed = {
                    ...state.currentFeed,
                    likes: action.payload.likesCount,
                    userLike: action.payload.userLike,
                };
            }
        },
    },
});

export const selectedFeedActions = selectedFeedSlice.actions;
export default selectedFeedSlice.reducer;
