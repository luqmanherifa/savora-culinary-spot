import React from "react";

const CityCard = ({ name_city, slug_city }) => {
    return (
        <a href={`/city/${slug_city}`}>
            <div className="rounded-full border border-gray-300 hover:bg-lightgreen">
                <div className="px-5 py-2">
                    <p className="line-clamp-1 w-52 text-center text-sm font-semibold text-darkgreen">
                        {name_city}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default CityCard;
