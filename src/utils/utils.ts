import { useMemo } from "react";
import { User } from "../types/User";

export const extractData = (user: User) => {
  const { id, name, username, email } = user;
  return { id, name, username, email };
};

export const wait = (func: Function, ms = 1000) => {
  setTimeout(() => func(), ms);
};

export const findUserInfoById = (
  data: User[] | undefined,
  selectedUserId: number | null
) => {
  if (!selectedUserId || !data) return;
  const user = data.find((item: User) => item.id === +selectedUserId);
  if (!user) return;
  const { address, company } = user;
  const addressStr = `${address.city} ${user?.address.street} ${user?.address.suite}`;
  const companyStr = `${company.name}`;
  return { addressStr, companyStr };
};
