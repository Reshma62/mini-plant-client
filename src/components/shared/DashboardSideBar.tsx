import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

interface DashboardSideBarProps {
  collapsed: boolean;
}
import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

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
        <Menu className="mt-5">
          <Link className="mb-5 flex justify-center items-center" to="/">
            <img className="w-16 rounded-full" src={Logo} alt="logo" />
          </Link>
          <MenuItem href="/dashboard"> Category</MenuItem>
          <MenuItem href="/dashboard/product"> Product</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default DashboardSideBar;
