import React from "react";

const LogoNavbar = ({ logoImage }) => {
    return (
        <a href="/" className="flex items-center gap-3">
            {/* <img src={logoImage} alt="" className="w-8" /> */}
            <img
                src="https://picsum.photos/200/200"
                alt=""
                className="w-8 rounded-full"
            />
            <p className="font-bricolage text-xl font-extrabold text-slate-800">
                Savora
            </p>
        </a>
    );
};

export default LogoNavbar;
