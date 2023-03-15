import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { User } from "../types/User";
import { extractData } from "../utils/utils";

export const selectFilteredAdaptedUsers = createSelector(
  (state: RootState) => state.filterUsersReducer,
  (filteredUsers: User[]) => filteredUsers?.map((item) => extractData(item))
);

export const selectSearchString = (state: RootState) => state.searchReducer;

export const selectSelectedUserId = (state: RootState) =>
  state.selectedUserReducer;
