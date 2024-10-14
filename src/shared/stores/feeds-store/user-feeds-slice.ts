import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserFeedsStateInterface {
    currentPage: number;
    totalPages: number;
}
const initialState: UserFeedsStateInterface = {
    currentPage: 0,
    totalPages: 1,
};

const userFeedsSlice = createSlice({
    name: "user-feeds",
    initialState: initialState,
    reducers: {
        setTotalPages: (state, action: PayloadAction<number>) => {
            state.totalPages = action.payload;
        },
        incrementCurrentPage: (state) => {
            // Проверяю, чтобы текущая страница не оказалась больше чем есть страниц всего
            state.currentPage = state.currentPage === state.totalPages ? state.totalPages : state.currentPage + 1;
        },
        decrementCurrentPage: (state) => {
            // Проверяю, чтобы текущая страница не оказалась меньше 0
            state.currentPage = state.currentPage === 0 ? 0 : state.currentPage - 1;
        },
    },
});

export const userFeedsActions = userFeedsSlice.actions;
export default userFeedsSlice.reducer;
