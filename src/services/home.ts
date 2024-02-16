import { endPoints } from "../config/APIUrls";
import { http } from "../config/config";
import { ITask } from "../utils/types";

export const getAllTasksRequest = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const token = localStorage.getItem("token");
  const res = await http.post<Array<ITask>>(endPoints.getTasks, null, {
    headers: { Authorization: token },
  });
  return res;
};
