import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Option,
  Select,
  Stack,
  selectClasses,
} from "@mui/joy";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Task } from "../../../components/Task/Task";
import { getTasks } from "../../../redux/asyncThunks/home";
import { useAppDispatch } from "../../../redux/hooks";
import {
  selectAllTasks,
  selectNewTasks,
} from "../../../redux/selectors/homePage";
import {
  generateYearsArray,
  getTasksBasedOnStatus,
  months,
} from "../../../utils/helpers";
import { ITask, TaskStatus } from "../../../utils/types";

export const History = () => {
  const years = generateYearsArray(1990, 2024);

  const data = useSelector(selectNewTasks);
  const allTasks = useSelector(selectAllTasks);
  const dispatch = useAppDispatch();

  const handleGetData = () => {
    if (allTasks.length === 0) {
      dispatch(getTasks());
    }
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
          padding: 1,
        }}
      >
        <Select
          placeholder="Select Month"
          indicator={<KeyboardArrowDown />}
          sx={{
            width: 240,
            [`& .${selectClasses.indicator}`]: {
              transition: "0.2s",
              [`&.${selectClasses.expanded}`]: {
                transform: "rotate(-180deg)",
              },
            },
          }}
        >
          {months.map((month) => {
            return (
              <Option key={month} value={month}>
                {month}
              </Option>
            );
          })}
        </Select>
        <Select
          placeholder="Select Year"
          indicator={<KeyboardArrowDown />}
          sx={{
            width: 240,
            [`& .${selectClasses.indicator}`]: {
              transition: "0.2s",
              [`&.${selectClasses.expanded}`]: {
                transform: "rotate(-180deg)",
              },
            },
          }}
        >
          {years.map((year) => {
            return (
              <Option key={year} value={year}>
                {year}
              </Option>
            );
          })}
        </Select>
      </Box>
      <Stack gap={1} padding={1}>
        {getTasksBasedOnStatus(TaskStatus.Compelte, allTasks).map(
          (task: ITask, index) => {
            return (
              <Task
                key={task.id}
                index={index}
                id={task.id}
                amount={task.amount}
                status={task.status}
                description={task.description}
              />
            );
          }
        )}
      </Stack>
    </>
  );
};
