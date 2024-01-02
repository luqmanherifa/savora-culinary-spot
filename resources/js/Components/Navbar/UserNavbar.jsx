import React from "react";

const UserNavbar = ({ toggleDropdown, auth }) => {
    return (
        <button
            id="dropdownInformationButton"
            data-dropdown-toggle="dropdownInformation"
            className="inline-flex items-center rounded-lg bg-btnbg px-4 py-2.5 text-center text-sm font-medium text-btntext hover:bg-btnhover"
            type="button"
            onClick={toggleDropdown}
        >
            <span className="line-clamp-1">{auth.user.name}</span>
            <svg
                className="ml-2.5 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                />
            </svg>
        </button>
    );
};

export default UserNavbar;
