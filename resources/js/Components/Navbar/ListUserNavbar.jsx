import React from "react";

const ListUserNavbar = ({ link, text }) => {
    return (
        <ul
            className="py-1 text-sm text-slate-700"
            aria-labelledby="dropdownInformationButton"
        >
            <li>
                <a
                    href={`${link}`}
                    className="block px-4 py-2 hover:bg-slate-100"
                >
                    {text}
                </a>
            </li>
        </ul>
    );
};

export default ListUserNavbar;
