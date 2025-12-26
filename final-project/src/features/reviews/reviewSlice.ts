import { createSlice } from "@reduxjs/toolkit";
import { reviews } from "../../constants/reviews";

export const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    currentIndex: 0,
    reviews: reviews,
  },
  reducers: {
    prevReview(state) {
      state.currentIndex =
        state.currentIndex === 0
          ? state.reviews.length - 1
          : state.currentIndex - 1;
    },
    nextReview(state) {
      state.currentIndex =
        state.currentIndex === state.reviews.length - 1
          ? 0
          : state.currentIndex + 1;
    },
  },
});

export const { prevReview, nextReview } = reviewSlice.actions;
