import { Book, Brain, Icon, MoveRightIcon } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full h-18  flex items-center justify-between py-5 px-12 shadow-sm">
      {/* Heading */}
         <a href="/">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <Brain className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
        <span className="font-bold text-2xl text-gray-900 tracking-tight  ">
            SkillForge
        </span>
      </div>
         </a>

      {/* navlinks */}
      <div className="hidden md:flex items-center gap-5 px-4 h-full cursor-pointer">
      {["Home","Features","About us","My courses"].map((item) => (
        <a href={item} className="group relative font-medium text-lg text-gray-600 hover:text-gray-900" key={item}>{item}
        <span className="absolute left-0 -bottom-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 h-0.5 w-0 group-hover:w-full"></span>
        </a>
    ))}
    </div>

    {/* cta button */}
    <div className="hidden md:flex gap-3 items-center h-full cursor-pointer">
        <a href="signup" >
        <div className=" px-3  rounded-sm py-1 hover:bg-gray-100 ">
          Sign In
          </div></a>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2 rounded-2xl flex text-white gap-4 shadow-sm shadow-gray-500">
          Get Started<MoveRightIcon />
          </div>
    </div>
    </nav>
  );
};

export default Navbar;
