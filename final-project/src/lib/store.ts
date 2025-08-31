import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "../features/theme/themeSlice";
import { postsSlice } from "../features/posts/postSlice";

const rootReducer = combineSlices(themeSlice, postsSlice)

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']