import { MoveRightIcon } from 'lucide-react';
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logout } from "../../Auth/api/Logout";
import { useLocation } from 'react-router';

// Top-right CTA with user profile or auth options
const Cta = () => {
  const location = useLocation();
  const [username, setUsername] = useState("");

  // Update username on route change
  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) setUsername(name);
  }, [location.pathname]);

  // If user is logged in, show avatar dropdown
  if (username) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600">
              {username
                .split(' ')
                .map((word) => word[0]?.toUpperCase())
                .join('')}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <a href="profile">Profile</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              onClick={() => {
                Logout(); // Clear localStorage
                setUsername(""); // Clear UI state
              }}
            >
              Logout
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // If user not logged in, show Sign In and CTA
  return (
    <div className="hidden md:flex gap-3 items-center h-full cursor-pointer">
      <a href="signup">
        <div className="px-3 rounded-sm py-1 hover:bg-gray-100">
          Sign In
        </div>
      </a>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2 rounded-2xl flex text-white gap-4 shadow-sm shadow-gray-500">
        Get Started
        <MoveRightIcon />
      </div>
    </div>
  );
};

export default Cta;
