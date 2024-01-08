import React from "react";

const Button = ({
    link,
    text,
    color = "text-darkgreen bg-lightgreen hover:bg-lightgreenhover",
}) => {
    return (
        <a href={link}>
            <div
                className={`inline-flex cursor-pointer items-center rounded-2xl px-5 py-2 text-center text-sm font-medium ${color}`}
            >
                {text}
            </div>
        </a>
    );
};

export default Button;
