import React from "react";

const DashboardSidebar = ({
    activeButton,
    handleComponentChange,
    buttonText,
    text,
}) => {
    return (
        <li>
            <button
                type="button"
                className="text-slate-800 hover:text-red-600"
                onClick={() => handleComponentChange(buttonText)}
            >
                <span
                    className={`font-bricolage text-sm font-semibold ${
                        activeButton === buttonText && "text-red-600"
                    }`}
                >
                    {text}
                </span>
            </button>
        </li>
    );
};

export default DashboardSidebar;
