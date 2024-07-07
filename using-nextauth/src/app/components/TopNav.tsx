"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed min-w-full bg-black shadow overflow-hidden z-50">
      <nav className="flex max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <Link href="/" passHref className="flex items-center space-x-2">
              {/* <Image
                  src="/tailwindui-logo.svg"
                  alt="Tailwind UI"
                  width={250}
                  height={50}
                  className="h-8 w-auto"
                /> */}
              <span className="text-lg font-bold text-white">
                NextAuth Authenticate
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-white hover:text-white">
              Login
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              className="p-2 rounded-md text-white"
              onClick={handleMenuClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <Link
            href="/login"
            className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
};
export default TopNav;
