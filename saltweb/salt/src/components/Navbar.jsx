import React from "react";
import { useState } from "react";
import { navLinks } from "../assets";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";


const NavbarP = () => {
    React.useEffect(() => {
        window.addEventListener(
          "resize",
          () => window.innerWidth >= 960 && setOpenNav(false)
        );
      }, []);
     
    const [openNav, setOpenNav] = React.useState(false);
    const [Active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)
  
    const navList = (
      <ul className="mb-4 mt-2  mr-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {navLinks.map((link) => (
            <li key={link.id} className={`${Active === link.title ? " text-brown-400" : "text-black" } hover:text-blue-400 text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)} >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
      </ul>
    );
  return (
    <>
      <Navbar sticky="top" className="sticky top z-10 h-max max-w-full  rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900 ">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            SPC
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Contact us now</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Contact us now</span>
          </Button>
        </Collapse>
      </Navbar>
    </>
  )
}

export default NavbarP