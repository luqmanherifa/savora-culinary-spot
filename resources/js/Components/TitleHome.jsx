import React from "react";

const TitleHome = ({ text }) => {
    return (
        <h3 className="flex justify-center text-2xl font-semibold text-gray-800">
            {text}
        </h3>
    );
};

export default TitleHome;
