import { Tab, TabList, Tabs } from "@mui/joy";
import { FC } from "react";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../redux/hooks";
import { selectCurrantTab } from "../../../redux/selectors/homePage";
import { setTabName } from "../../../redux/slices/homePage";
import { TabNames } from "../../../utils/types";
import { InProgress } from "./InProgress/InProgress";
import { TasksAvailable } from "./TasksAvailable/TasksAvailable";

export const Home: FC = () => {
  const dispatch = useAppDispatch();
  const currentTab = useSelector(selectCurrantTab);

  const handleOnChangeTab = (tabName: string) => {
    dispatch(setTabName(tabName as TabNames));
  };

  return (
    <>
      <Tabs
        defaultValue={currentTab}
        onChange={(e, value) => handleOnChangeTab(value as string)}
      >
        <TabList sx={{ justifyContent: "center" }}>
          <Tab color="primary" value={TabNames.TasksAvailable}>
            {TabNames.TasksAvailable}
          </Tab>
          <Tab color="primary" value={TabNames.InProgress}>
            {TabNames.InProgress}
          </Tab>
        </TabList>
      </Tabs>
      {currentTab === TabNames.TasksAvailable && <TasksAvailable />}
      {currentTab === TabNames.InProgress && <InProgress />}
    </>
  );
};
