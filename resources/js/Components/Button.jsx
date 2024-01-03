import React from "react";

const Button = ({
    link,
    target,
    text,
    color = "text-darkgreen bg-lightgreen hover:bg-lightgreenhover",
}) => {
    return (
        <a
            href={link}
            target={target}
            className={`inline-flex items-center rounded-2xl px-5 py-2 text-center text-sm font-medium ${color}`}
        >
            {text}
        </a>
    );
};

export default Button;
