import { useState } from "react";
import Links from "../Links/Links";
import { IoMenu, } from "react-icons/io5";
import { MdRestaurantMenu } from "react-icons/md";

const Nav = () => {
  const [open, setOpen]=useState(false)
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "NotFound", path: "*" },
  ];

  return (
    <nav className="text-black bg-yellow-200 p-6">
      <div onClick={() => setOpen(true)}  className="md:hidden">
      
      {
        open === true ? 
        <MdRestaurantMenu className="text-2xl"></MdRestaurantMenu> : <IoMenu className="text-2xl "></IoMenu>
      }
      
      </div>
        <ul className="md:flex absolute bg-yellow-200 px-6">
            {
                routes.map(route => <Links key={route.id} route={route}></Links>)
            }
        </ul>
    </nav>
  );
};

export default Nav;