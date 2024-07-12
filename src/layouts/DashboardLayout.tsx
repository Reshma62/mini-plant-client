import DashboardSideBar from "@/components/shared/DashboardSideBar";
import { Outlet } from "react-router-dom";

import { useState } from "react";
import { Menu } from "lucide-react";
const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <div className="bg-slate-100 h-screen">
      <div
        style={{
          display: "flex",
          height: "100svh",
          minHeight: "400px",
          maxHeight: "100%",
        }}
      >
        <DashboardSideBar collapsed={collapsed} />
        <main className="p-10 flex-1">
          <div>
            <button
              className="sb-button md:hidden"
              onClick={() => setCollapsed(!collapsed)}
            >
              <Menu />
            </button>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
