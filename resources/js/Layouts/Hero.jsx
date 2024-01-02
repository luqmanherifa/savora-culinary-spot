import React from "react";
import hero from "../../../public/images/hero.jpg";

const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto mt-3 relative">
            <img src={hero} alt="" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div className="flex justify-center mb-3">
                    <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="80"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M100 50c0 27.62-22.39 50-50 50S0 77.62 0 50 22.39 0 50 0s50 22.38 50 50Z"
                            fill="#fff"
                        ></path>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M47.85 47.04c-.22 5.76-3.21 10.69-7.53 13.39-2.08 1.3-3.55 3.49-3.67 6.09l-.38 8.54c-.1 2.31-1.86 4.12-3.98 4.12-2.13 0-3.88-1.82-3.98-4.13l-.38-8.84c-.11-2.59-1.54-4.82-3.58-6.15-4.49-2.93-7.48-8.13-7.64-14.25-.15-5.73.32-11.81 1.21-17.55.33-2.12 2.15-3.58 4.12-3.18 1.94.35 3.25 2.36 2.92 4.47-.65 4.22-1.06 7.08-1.1 12.25-.01 1.47 1.08 2.66 2.43 2.66 1.34 0 2.46-1.18 2.46-2.64l-.02-15c0-2.36 1.94-4.23 4.17-3.83 1.76.31 2.97 2.11 2.97 4.04l.02 14.79c0 1.46 1.08 2.64 2.42 2.64 1.35 0 2.43-1.19 2.43-2.65-.02-5.17-.44-8.03-1.1-12.25-.33-2.11.98-4.12 2.93-4.47 1.91-.39 3.79 1.06 4.11 3.18.96 6.13 1.41 12.63 1.17 18.77Zm20.9-24.12c9.72 0 14.58 14.59 14.58 24.22 0 5.21-2.84 9.7-6.74 12.36-1.87 1.27-3.17 3.29-3.28 5.63l-.46 9.92c-.11 2.3-1.91 4.11-4.1 4.12-2.19-.01-3.99-1.81-4.1-4.12l-.46-9.92c-.11-2.34-1.41-4.36-3.28-5.63-3.9-2.66-6.74-7.15-6.74-12.36 0-9.64 4.86-24.22 14.58-24.22Z"
                            fill="#E52535"
                        ></path>
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                    Hungry? Just Savora it!
                </h3>
                <p className="w-[30rem]">
                    Order your favorite meals here, on our web. As smooth as in
                    the app. Same fast delivery. Countless restos to try.
                </p>
                <div className="mt-5 p-5 bg-white rounded-xl">
                    <div className="flex justify-start mb-2">
                        <p className="text-slate-800">Your location</p>
                    </div>
                    <div>
                        <form className="flex items-center">
                            <label htmlFor="voice-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 21 21"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="voice-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                                    placeholder="Search location..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                                Explore
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
