import DashboardSideBar from "@/components/shared/DashboardSideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <DashboardSideBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
