import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../hooks/api/useGetUsers";
import {
  filteredUsersReducer,
  selectedUserReducer,
  searchReducer,
} from "./reducer";

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    filterUsersReducer: filteredUsersReducer,
    searchReducer: searchReducer,
    selectedUserReducer: selectedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
