import { AxiosResponse } from "axios";
import { endPoints } from "../config/APIUrls";
import { http } from "../config/config";
import { IAuth } from "../utils/types";

interface loginRequestBody {
  username: string;
  password: string;
}

export const loginRequest = async (username: string, password: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await http.post<loginRequestBody, AxiosResponse<IAuth>>(
    endPoints.login,
    {
      username: username,
      password: password,
    }
  );
  return res;
};
