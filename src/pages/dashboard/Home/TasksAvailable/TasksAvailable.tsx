import { Check } from "@mui/icons-material";
import { Box, Button, CircularProgress, Stack } from "@mui/joy";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Task } from "../../../../components/Task/Task";
import { getTasks } from "../../../../redux/asyncThunks/home";
import { useAppDispatch } from "../../../../redux/hooks";
import {
  selectAllTasks,
  selectCategorizedTasks,
  selectNewTasks,
  selectSelectedCategory,
} from "../../../../redux/selectors/homePage";
import {
  setCategorizedTasks,
  setCategory,
  setTasks,
} from "../../../../redux/slices/homePage";
import {
  getCategorizedTasks,
  getCategorizedTasksBasedOnStatus,
  getTasksBasedOnStatus,
} from "../../../../utils/helpers";
import { ITask, TaskCategory, TaskStatus } from "../../../../utils/types";
import styles from "./style.module.scss";

export const TasksAvailable = () => {
  const data = useSelector(selectNewTasks);
  const categorizedTasks = useSelector(selectCategorizedTasks);
  const allTasks = useSelector(selectAllTasks);
  const selectedCategoryState = useSelector(selectSelectedCategory);
  const dispatch = useAppDispatch();

  const handleGetData = () => {
    if (allTasks.length === 0) {
      dispatch(getTasks());
    }
  };

  const handleCategoryOnClick = (selectedCategory: TaskCategory) => {
    if (selectedCategoryState === selectedCategory) {
      dispatch(setCategory(undefined));
      dispatch(setCategorizedTasks([]));
    } else {
      dispatch(setCategory(selectedCategory));
      dispatch(
        setCategorizedTasks(getCategorizedTasks(selectedCategory, allTasks))
      );
    }
  };

  const handleTaskOnClick = (id: string) => {
    const editedAllTasks = allTasks
      .map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: TaskStatus.InProgress,
            assignee: "admin",
          };
        } else {
          return task;
        }
      })
      .sort((a, b) => (a.id === id ? -1 : b.id === id ? 1 : 0));
    if (selectedCategoryState) {
      const editedCategorizedTasks = categorizedTasks
        .map((task) => {
          if (task.id === id && task.category === selectedCategoryState) {
            return {
              ...task,
              status: TaskStatus.InProgress,
              assignee: "admin",
            };
          } else {
            return task;
          }
        })
        .sort((a, b) => (a.id === id ? -1 : b.id === id ? 1 : 0));
      dispatch(setCategorizedTasks(editedCategorizedTasks));
    }

    dispatch(setTasks(editedAllTasks));
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
    <div className={styles.mainContainer}>
      <div className={styles.categoryContainer}>
        <Button
          variant={
            selectedCategoryState === TaskCategory.Category1
              ? "solid"
              : "outlined"
          }
          startDecorator={
            selectedCategoryState === TaskCategory.Category1 ? <Check /> : null
          }
          onClick={(e) => handleCategoryOnClick(TaskCategory.Category1)}
        >
          Category 1
        </Button>
        <Button
          variant={
            selectedCategoryState === TaskCategory.Category2
              ? "solid"
              : "outlined"
          }
          startDecorator={
            selectedCategoryState === TaskCategory.Category2 ? <Check /> : null
          }
          onClick={(e) => handleCategoryOnClick(TaskCategory.Category2)}
        >
          Category 2
        </Button>
        <Button
          variant={
            selectedCategoryState === TaskCategory.Category3
              ? "solid"
              : "outlined"
          }
          startDecorator={
            selectedCategoryState === TaskCategory.Category3 ? <Check /> : null
          }
          onClick={(e) => handleCategoryOnClick(TaskCategory.Category3)}
        >
          Category 3
        </Button>
      </div>
      <Stack gap={1} padding={1}>
        {selectedCategoryState
          ? getCategorizedTasksBasedOnStatus(
              TaskStatus.New,
              categorizedTasks
            ).map((task: ITask, index) => {
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
            })
          : getTasksBasedOnStatus(TaskStatus.New, allTasks).map(
              (task: ITask, index) => {
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
              }
            )}
      </Stack>
    </div>
  );
};
