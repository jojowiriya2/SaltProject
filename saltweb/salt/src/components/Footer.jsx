import React from 'react'
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { navLinks } from "../assets";

const Footer = () => {
  const [Active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)
  
  return (
    <footer className="flex w-full flex-row flex-wrap items-center p-12 justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 SPC
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
      {navLinks.map((link) => (
            <li key={link.id} className={`${Active === link.title ? " text-brown-400" : "text-black" } hover:text-blue-400 text-[18px] font-small cursor-pointer`} onClick={() => setActive(link.title)} >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
      </ul>
    </footer>
  )
}

export default Footer