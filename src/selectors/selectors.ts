import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { User, UserUI } from "../types/User";
import { extractData } from "../utils/utils";

export const selectFilteredAdaptedUsers = createSelector(
  (state: RootState) => state.filterUsersReducer,
  (filteredUsers: User[]) => filteredUsers?.map((item) => extractData(item))
);

export const selectSearchString = (state: RootState) => state.searchReducer;

export const selectSelectedUserId = (state: RootState) =>
  state.selectedUserReducer;
