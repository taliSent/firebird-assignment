import { createAction } from "@reduxjs/toolkit";
import { User } from "../types/User";

export const filterUsers = createAction<number[]>("FILTER_USERS");
export const deleteUser = createAction<number>("DELETE_USER");
export const clearFilter = createAction<User[] | undefined>("CLEAR_FILTER");

export const search = createAction<string>("SEARCH");

export const openModal = createAction<number>("OPEN_MODAL");
export const closeModal = createAction("CLOSE_MODAL");
