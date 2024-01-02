import { Link } from "@inertiajs/inertia-react";
import React from "react";
import ListUserNavbar from "./ListUserNavbar";

const UserDropdownButton = ({ auth, isAuthorized, css }) => {
    return (
        <div
            id="dropdownInformation"
            className={`${css} z-10 mt-2 w-44 divide-y divide-slate-100 rounded-lg border border-slate-300 bg-white`}
        >
            <div className="px-4 py-3 text-sm text-slate-900">
                <div className="flex gap-2">
                    <span className="line-clamp-1 font-semibold">
                        {auth.user.name}{" "}
                    </span>
                    {isAuthorized && (
                        <span className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                            >
                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                            </svg>
                        </span>
                    )}
                </div>
            </div>
            {isAuthorized && <ListUserNavbar link="/admin" text="Admin" />}
            <ListUserNavbar link="/dashboard" text="Dashboard" />
            <div className="py-1">
                <Link
                    method="post"
                    href={route("logout")}
                    as="button"
                    className="block w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
                >
                    Log out
                </Link>
            </div>
        </div>
    );
};

export default UserDropdownButton;
