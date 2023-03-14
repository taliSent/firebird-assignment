import { createReducer } from "@reduxjs/toolkit";
import {
  clearFilter,
  closeModal,
  deleteUser,
  openModal,
  search,
} from "../actions/actions";
import { User } from "../types/User";

export const filteredUsersReducer = createReducer([] as User[], (builder) => {
  builder
    .addCase(deleteUser, (state, action) => {
      return state.filter((user: User) => user.id != action.payload);
    })
    .addCase(clearFilter, (state, action) => {
      if (Array.isArray(action.payload)) {
        return [...action.payload];
      }
    });
});

export const searchReducer = createReducer("", (builder) => {
  builder.addCase(search, (_, action) => {
    return action.payload;
  });
});

//open modal with certain user info by user id
export const selectedUserReducer = createReducer(
  null as number | null,
  (builder) => {
    builder
      .addCase(openModal, (state, action) => {
        return action.payload;
      })
      .addCase(closeModal, (state, action) => {
        return null;
      });
  }
);
