import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

interface DashboardSideBarProps {
  collapsed: boolean;
}

const DashboardSideBar = ({ collapsed }: DashboardSideBarProps) => {
  return (
    <div>
      <Sidebar
        toggled={collapsed}
        breakPoint="md"
        className="bg-primaryColor/15 h-full"
        collapsed={collapsed}
        transitionDuration={500}
        backgroundColor="bg-primaryColor/15"
      >
        <Menu>
          <MenuItem href="/dashboard"> Category</MenuItem>
          <MenuItem href="/dashboard/product"> Product</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default DashboardSideBar;
