import React from "react";

const FeatureCard = ({ image, text, css1, css2 }) => {
    return (
        <div className={`rounded-2xl border p-2 py-12 ${css1}`}>
            <img
                className="mx-auto w-[14.3rem] rounded-xl object-cover"
                src={image}
                alt="image"
            />
            <div className="p-3">
                <p className={`w-52 text-2xl font-semibold ${css2}`}>{text}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
