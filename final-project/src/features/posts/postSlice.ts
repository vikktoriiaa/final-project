import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: { currentPage: 0 },
  reducers: {
    prevPage(state, action) {
      const maxPage = action.payload;
      state.currentPage =
        state.currentPage === 0 ? maxPage : state.currentPage - 1;
    },
    nextPage(state, action) {
      const maxPage = action.payload;
      state.currentPage =
        state.currentPage === maxPage ? 0 : state.currentPage + 1;
    },
  },
});

export const { prevPage, nextPage } = postsSlice.actions;
