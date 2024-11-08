import { api } from "./httpReq";

export const addUser = async (data) => {
  return await api.post("/auth/register", data);
};

export const loginUser = async (data) => {
  console.log(data, "login");

  const user = await api.post("/auth/login", data);
  console.log(user, "login");
  return user;
};
