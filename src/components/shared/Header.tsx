import { Link, NavLink } from "react-router-dom";
import Logo from "@/assets/logo.png";
import { Input } from "../ui/input";
import { MenuItems } from "@/utils/data";
import { ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-secondaryColor/15 px-4 md:px-6 lg:px-8 sticky">
      <header className="flex container mx-auto h-20 w-full shrink-0 items-center px-4 md:px-6 justify-between">
        <Link to="/" className="mr-6 hidden lg:flex">
          <img className="w-20 rounded-full" src={Logo} alt="logo" />
        </Link>
        <div>
          <Input placeholder="Search" className="w-96" />
        </div>
        <div className="flex gap-5 items-center">
          {MenuItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-primaryColor font-medium"
                    : "text-secondary-foreground"
                }  text-lg capitalize ${
                  item.path === "/dashboard"
                    ? "bg-primaryColor/25 py-1 px-4 rounded-md"
                    : ""
                }`
              }
              key={item.id}
              to={item.path}
            >
              {item.name}
            </NavLink>
          ))}

          <div className="relative">
            <ShoppingBag size={30} className="text-primaryColor" />
            <span className="absolute top-0 -right-3 inline-flex items-center justify-center p-2 w-6 h-6 leading-4 text-xs font-bold text-red-100 transform bg-primaryColor rounded-full">
              2
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
