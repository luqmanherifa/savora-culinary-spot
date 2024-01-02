import React from "react";

const Button = ({
    link,
    target,
    text,
    color = "text-btntext bg-btnbg hover:bg-btnhover",
}) => {
    return (
        <a
            href={link}
            target={target}
            className={`inline-flex items-center rounded-lg px-3 py-2 text-center font-bricolage text-sm font-medium ${color}`}
        >
            {text}
        </a>
    );
};

export default Button;
