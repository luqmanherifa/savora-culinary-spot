import React from "react";

const RestoCard = ({
    name_resto,
    slug_resto,
    cuisine_1_resto,
    cuisine_2_resto,
    cuisine_3_resto,
    regency_resto,
    city_resto,
    star_resto,
    nullImage,
}) => {
    return (
        <a href={`/resto/${slug_resto}`}>
            <div className="rounded-2xl border border-gray-300 bg-white p-2 hover:bg-lightgreen">
                <img
                    className="mx-auto h-48 w-[14.3rem] rounded-xl object-cover"
                    src={nullImage}
                    alt=""
                />
                <div className="flex flex-col gap-1 p-3 text-sm">
                    <p className="mb-1 line-clamp-2 h-12 w-52 text-base font-semibold">
                        {name_resto}
                    </p>
                    <p className="line-clamp-1 w-52">
                        {cuisine_1_resto}
                        {cuisine_2_resto ? `, ${cuisine_2_resto}` : null}
                        {cuisine_3_resto ? `, ${cuisine_3_resto}` : null}
                    </p>
                    <div className="flex gap-2">
                        <div className="flex gap-1">
                            <svg
                                className="text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="18"
                                viewBox="0 0 576 512"
                                fill="currentColor"
                            >
                                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                            <p>{star_resto}</p>
                        </div>
                        <p>•</p>
                        <div className="flex gap-1">
                            <svg
                                className="text-red-600"
                                xmlns="http://www.w3.org/2000/svg"
                                height="16"
                                width="12"
                                viewBox="0 0 384 512"
                                fill="currentColor"
                            >
                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg>
                            <p className="flex w-32 gap-1">
                                {regency_resto},{" "}
                                <span className="line-clamp-1 w-24">
                                    {city_resto}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default RestoCard;
