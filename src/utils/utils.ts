import { useMemo } from "react";
import { User } from "../types/User";

export const extractData = (user: User) => {
  const { id, name, username, email } = user;
  return { id, name, username, email };
};

export const wait = (func: Function, ms = 800) => {
  setTimeout(() => func(), ms);
};

export const findUserInfoById = (data: any, selectedUserId: number | null) => {
  console.log(data, selectedUserId);
  if (!selectedUserId) return;
  const user = data?.find((item: User) => item.id === selectedUserId);
  return `{Adress: ${user?.address} Company: ${user?.company}}`;
};
