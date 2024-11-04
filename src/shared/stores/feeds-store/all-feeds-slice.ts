import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { FeedsPageModes, PostInterface } from "@/shared/types";

interface AllFeedsStateInterface {
    feedsList: PostInterface[];
    loading: boolean;

    feedsPageMode: FeedsPageModes;
    feedsFilterString: string;
}
const initialState: AllFeedsStateInterface = {
    feedsList: [],
    loading: false,
    feedsPageMode: FeedsPageModes.ALL_FEED,
    feedsFilterString: "",
};

const allFeedsSlice = createSlice({
    name: "all-feeds",
    initialState: initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },

        // posts
        setPostsToList: (state, action: PayloadAction<{ posts: PostInterface[] }>) => {
            state.feedsList = action.payload.posts;
        },
        addPostsToList: (state, action: PayloadAction<{ posts: PostInterface[] }>) => {
            state.feedsList = state.feedsList.concat(action.payload.posts);
        },
        deletePostFromList: (state, action: PayloadAction<{ postId: string }>) => {
            state.feedsList = state.feedsList.filter((item) => item.id !== action.payload.postId);
        },
        unshiftPostToList: (state, action: PayloadAction<{ post: PostInterface }>) => {
            state.feedsList.unshift(action.payload.post);
        },

        // Feeds page modes
        setFeedsPageMode: (state, action: PayloadAction<FeedsPageModes>) => {
            state.feedsList = initialState.feedsList;
            state.feedsPageMode = action.payload;
        },

        // FeedsStringFilter
        onChangeFilterString: (state, action: PayloadAction<string>) => {
            state.feedsFilterString = action.payload;
        },

        // Likes
        setLikeToPost: (state, action: PayloadAction<{ postId: string; userLike: boolean; likesCount: number }>) => {
            state.feedsList = state.feedsList.map((feed) =>
                feed.id === action.payload.postId
                    ? { ...feed, likes: action.payload.likesCount, userLike: action.payload.userLike }
                    : { ...feed },
            );
        },
    },
});

export const allFeedsActions = allFeedsSlice.actions;
export default allFeedsSlice.reducer;
