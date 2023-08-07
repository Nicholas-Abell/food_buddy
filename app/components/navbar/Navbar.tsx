import Link from "next/link";
import React from "react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="absolute top-0 left-0 w-screen py-4">
      <ul className="flex items-center justify-center gap-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/saved-recipes">Your Recipes</Link>
        </li>
        <li>
          <Link href="/create-recipe">Create Recipe</Link>
        </li>
        <li>
          <Link href="/auth">Your Profile</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
