import { Chip, Divider, Typography } from "@mui/joy";
import { FC } from "react";
import { TaskStatus } from "../../utils/types";
import styles from "./style.module.scss";

interface props {
  index: number;
  description: string;
  status: TaskStatus;
  amount: number;
}

export const Invoice: FC<props> = ({
  index,
  description,
  status,
  amount,
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
    </div>
  );
};
