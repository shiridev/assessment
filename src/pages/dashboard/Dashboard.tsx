import { FC } from "react";
import { DashboardHeader } from "../../components/DashboardHeader/DahsboardHeader";
import { DrawerMenu } from "../../components/DrawerMenu/DrawerMenu";
import { PagesNames } from "../../utils/types";
import { History } from "./History/History";
import { Home } from "./Home/Home";
import { Invoices } from "./Invoice/Invoice";

interface props {
  page: PagesNames;
}

export const Dashboard: FC<props> = ({ page }) => {
  return (
    <div style={{ height: "100%" }}>
      <DashboardHeader />
      <DrawerMenu />
      <div>
        {page === PagesNames.DashboardHome && <Home />}
        {page === PagesNames.DashboardHistory && <History />}
        {page === PagesNames.DashboardInvoice && <Invoices />}
      </div>
    </div>
  );
};
