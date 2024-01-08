import React from "react";

const CuisineCard = ({ link, image, text }) => {
    return (
        <a href={`/cuisine/${link}`}>
            <div>
                <img
                    className="mx-auto mb-4 w-40 rounded-full"
                    src={image}
                    alt=""
                />
                <p className="flex justify-center text-sm font-medium text-gray-800">
                    {text}
                </p>
            </div>
        </a>
    );
};

export default CuisineCard;
