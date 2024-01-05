import React from "react";
import hero from "../../../../public/images/hero.jpg";

const Hero = () => {
    return (
        <div className="relative mx-auto mt-3 max-w-7xl">
            <img src={hero} alt="" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
                <div className="mb-3 flex justify-center">
                    <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="80"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M100 50c0 27.62-22.39 50-50 50S0 77.62 0 50 22.39 0 50 0s50 22.38 50 50Z"
                            fill="#fff"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M47.85 47.04c-.22 5.76-3.21 10.69-7.53 13.39-2.08 1.3-3.55 3.49-3.67 6.09l-.38 8.54c-.1 2.31-1.86 4.12-3.98 4.12-2.13 0-3.88-1.82-3.98-4.13l-.38-8.84c-.11-2.59-1.54-4.82-3.58-6.15-4.49-2.93-7.48-8.13-7.64-14.25-.15-5.73.32-11.81 1.21-17.55.33-2.12 2.15-3.58 4.12-3.18 1.94.35 3.25 2.36 2.92 4.47-.65 4.22-1.06 7.08-1.1 12.25-.01 1.47 1.08 2.66 2.43 2.66 1.34 0 2.46-1.18 2.46-2.64l-.02-15c0-2.36 1.94-4.23 4.17-3.83 1.76.31 2.97 2.11 2.97 4.04l.02 14.79c0 1.46 1.08 2.64 2.42 2.64 1.35 0 2.43-1.19 2.43-2.65-.02-5.17-.44-8.03-1.1-12.25-.33-2.11.98-4.12 2.93-4.47 1.91-.39 3.79 1.06 4.11 3.18.96 6.13 1.41 12.63 1.17 18.77Zm20.9-24.12c9.72 0 14.58 14.59 14.58 24.22 0 5.21-2.84 9.7-6.74 12.36-1.87 1.27-3.17 3.29-3.28 5.63l-.46 9.92c-.11 2.3-1.91 4.11-4.1 4.12-2.19-.01-3.99-1.81-4.1-4.12l-.46-9.92c-.11-2.34-1.41-4.36-3.28-5.63-3.9-2.66-6.74-7.15-6.74-12.36 0-9.64 4.86-24.22 14.58-24.22Z"
                            fill="#E52535"
                        ></path>
                    </svg>
                </div>
                <h3 className="mb-3 text-3xl font-semibold text-white">
                    Hungry? Just Savora it!
                </h3>
                <p className="mb-6 w-[30rem] text-base font-light text-white">
                    Order your favorite meals here, on our web. As smooth as in
                    the app. Same fast delivery. Countless restos to try.
                </p>
                <div className="rounded-2xl bg-white p-5">
                    <div className="mb-2 flex justify-start">
                        <p className="text-sm font-medium text-gray-800">
                            Your location
                        </p>
                    </div>
                    <div>
                        <form className="flex items-center">
                            <label htmlFor="voice-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative w-full">
                                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                    <svg
                                        className="h-4 w-4 text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="16"
                                        width="10"
                                        viewBox="0 0 320 512"
                                        fill="currentColor"
                                    >
                                        <path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="voice-search"
                                    className="block w-full rounded-full border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900"
                                    placeholder="Search location..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="ms-2 inline-flex items-center rounded-full bg-darkgreen px-4 py-2.5 text-sm font-medium text-white hover:bg-darkgreenhover"
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
