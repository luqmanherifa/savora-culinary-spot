import Button from "@/Components/Button";
import LogoNavbar from "@/Components/Navbar/LogoNavbar";
import MenuNavbar from "@/Components/Navbar/MenuNavbar";
import UserDropdownButton from "@/Components/Navbar/UserDropdownButton";
import UserNavbar from "@/Components/Navbar/UserNavbar";
import React, { useState } from "react";
// import logoImage from "/images/motocraft.png";

const Navbar = ({ homeColor, recommendationsColor, auth }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const isAuthorized =
        auth?.user?.role === "superadmin" || auth?.user?.role === "admin";

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <div className="border-b border-slate-300">
                <div className="mx-auto flex h-16 justify-between text-slate-50 max-w-7xl">
                    <div className="flex flex-row gap-10">
                        <div className="flex items-center">
                            {/* <LogoNavbar logoImage={logoImage} /> */}
                            <LogoNavbar />
                        </div>

                        <nav className="items-center gap-8 text-sm font-semibold text-slate-800 flex">
                            <MenuNavbar
                                link="/"
                                menuColor={homeColor}
                                text="Home"
                            />
                            <MenuNavbar
                                link="/recommendations"
                                menuColor={recommendationsColor}
                                text="Recommendations"
                            />
                        </nav>
                    </div>

                    <div className="flex flex-row gap-5">
                        <div className="flex items-center">
                            <label htmlFor="simple-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="simple-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                                    placeholder="Search branch name..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="p-2.5 ms-2 text-sm font-medium text-btntext bg-btnbg rounded-lg hover:bg-btnhover"
                            >
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>

                        <div className="justify-end flex w-40">
                            {auth?.user ? (
                                <div>
                                    <div className="mt-3 flex justify-end">
                                        <UserNavbar
                                            toggleDropdown={toggleDropdown}
                                            auth={auth}
                                        />
                                    </div>

                                    {isDropdownOpen && (
                                        <UserDropdownButton
                                            auth={auth}
                                            isAuthorized={isAuthorized}
                                            css="relative"
                                        />
                                    )}
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <Button
                                        text="Log in/Sign up"
                                        link="/login"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
