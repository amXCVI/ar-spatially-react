import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { PostInterface } from "@/shared/types";

interface AllFeedsStateInterface {
    currentPage: number;
    totalPages: number;
    feedsList: PostInterface[];
}
const initialState: AllFeedsStateInterface = {
    currentPage: 1,
    totalPages: 0,
    feedsList: [],
};

const allFeedsSlice = createSlice({
    name: "all-feeds",
    initialState: initialState,
    reducers: {
        // pages
        setTotalPages: (state, action: PayloadAction<number>) => {
            state.totalPages = action.payload;
        },
        incrementCurrentPage: (state) => {
            // Проверяю, чтобы текущая страница не оказалась больше чем есть страниц всего
            state.currentPage = state.currentPage === state.totalPages ? state.totalPages : state.currentPage + 1;
        },
        decrementCurrentPage: (state) => {
            // Проверяю, чтобы текущая страница не оказалась меньше 0
            state.currentPage = state.currentPage === 1 ? 1 : state.currentPage - 1;
        },

        // posts
        addPostsToList: (state, action: PayloadAction<{ posts: PostInterface[] }>) => {
            state.feedsList = state.feedsList.concat(action.payload.posts);
        },
    },
});

export const allFeedsActions = allFeedsSlice.actions;
export default allFeedsSlice.reducer;
