import React from "react";

const InspoCard = ({ link, image, text }) => {
    return (
        <a href={`/inspo/${link}`}>
            <div className="rounded-2xl border border-gray-300 bg-white p-6 pt-4 hover:bg-lightgreen">
                <img className="mx-auto w-28" src={image} alt="" />
                <p className="flex justify-center text-sm font-medium text-gray-800">
                    {text}
                </p>
            </div>
        </a>
    );
};

export default InspoCard;
