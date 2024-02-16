import { Box, Button, CircularProgress, Stack } from "@mui/joy";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Task } from "../../../../components/Task/Task";
import { getTasks } from "../../../../redux/asyncThunks/home";
import { useAppDispatch } from "../../../../redux/hooks";
import {
  selectAllTasks,
  selectInProgressTasks,
} from "../../../../redux/selectors/homePage";
import { setTasks } from "../../../../redux/slices/homePage";
import { ITask, TaskStatus } from "../../../../utils/types";

export const InProgress = () => {
  const data = useSelector(selectInProgressTasks);
  const allTasks = useSelector(selectAllTasks);
  const dispatch = useAppDispatch();

  const handleGetData = () => {
    if (allTasks.length === 0) {
      dispatch(getTasks());
    }
  };

  const handleTaskOnClick = (id: string) => {
    const editedTasks = allTasks
      .map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: TaskStatus.Compelte,
          };
        } else {
          return task;
        }
      })
      .sort((a, b) => (a.id === id ? -1 : b.id === id ? 1 : 0));
    dispatch(setTasks(editedTasks));
  };

  useEffect(() => {
    handleGetData();
  }, []);

  if (data.loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        <CircularProgress variant="solid" />
      </Box>
    );
  }

  if (data.error) {
    toast.error(data.error);
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        <Button onClick={handleGetData}>Refetch Data</Button>
      </Box>
    );
  }

  return (
    <>
      <Stack gap={1} padding={1}>
        {data.inProgressTasks.map((task: ITask, index) => {
          return (
            <Task
              key={task.id}
              index={index}
              id={task.id}
              amount={task.amount}
              status={task.status}
              description={task.description}
              handleOnClick={handleTaskOnClick}
            />
          );
        })}
      </Stack>
    </>
  );
};
