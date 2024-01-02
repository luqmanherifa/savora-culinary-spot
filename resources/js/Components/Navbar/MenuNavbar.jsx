import React from "react";

const MenuNavbar = ({ link, menuColor, text }) => {
    return (
        <div>
            <a
                href={`${link}`}
                className={`text-left font-bricolage text-sm font-semibold hover:text-red-600 ${menuColor}`}
            >
                {text}
            </a>
        </div>
    );
};

export default MenuNavbar;
