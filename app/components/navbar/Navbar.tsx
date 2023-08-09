"use client";
import Link from "next/link";
import React from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const router = useRouter();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    router.push("/auth");
  };

  return (
    <div className="absolute top-0 left-0 w-screen py-4">
      <ul className="flex items-center justify-center gap-8 md:text-xl lg:text-2xl">
        <li>
          <Link className="hover:text-gray-200" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-200" href="/saved-recipes">
            Your Recipes
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-200" href="/create-recipe">
            Create Recipe
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-200" href="/auth">
            Your Profile
          </Link>
        </li>
        <li>
          <button onClick={logout}>LOGOUT</button>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
