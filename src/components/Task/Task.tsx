import { Button, Chip, Divider, Typography } from "@mui/joy";
import styles from "./style.module.scss";
import { TaskStatus } from "../../utils/types";
import { FC } from "react";

interface props {
  index: number;
  id: string;
  description: string;
  status: TaskStatus;
  amount: number;
  handleOnClick?: (id: string) => void;
}

export const Task: FC<props> = ({
  index,
  id,
  description,
  status,
  amount,
  handleOnClick,
}) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <Typography level="h4" pr={2}>
          {index + 1}
        </Typography>
        <Divider orientation="vertical" />
        <div className={styles.descriptionContainer}>
          <Typography level="body-md" px={2}>
            {description}
          </Typography>
          <Chip sx={{ mr: 1 }}>{status}</Chip>
          <Chip sx={{ mr: 2 }}>{`$${amount}`}</Chip>
        </div>
      </div>
      {status !== TaskStatus.Compelte && (
        <Button
          variant="outlined"
          onClick={(e) => (handleOnClick ? handleOnClick(id) : null)}
        >
          {status === TaskStatus.InProgress
            ? "Complete"
            : status === TaskStatus.New
            ? "Assign"
            : ""}
        </Button>
      )}
    </div>
  );
};
