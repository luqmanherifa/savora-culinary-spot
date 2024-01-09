import React from "react";
import savoraRed from "../../../../public/images/savorared.png";

const Footer = () => {
    return (
        <footer className="mt-20 bg-darkgreen">
            <div className="mx-auto flex w-full max-w-6xl justify-between px-10 py-14">
                <div>
                    <div>
                        <a href="/" className="mb-5 flex w-32 items-center">
                            <img
                                src={savoraRed}
                                className="mr-3 h-8 w-8 rounded-full"
                                alt="image"
                            />
                            <span className="font-bricolage self-center whitespace-nowrap text-xl font-bold text-white hover:underline">
                                Savora
                            </span>
                        </a>
                        <p className="mb-1 text-2xl font-medium text-white">
                            It's like having the entire neighborhood's kitchen
                            in your pocket.
                        </p>
                        <p className="text-2xl font-medium text-white">
                            Enjoy a large variety of meals and deals in Savora
                            app.
                        </p>
                    </div>
                    <div>
                        <ul className="mb-2 mt-5 flex flex-row items-center gap-3 text-sm text-white">
                            <li>
                                <a href="#" className="hover:underline ">
                                    Privacy policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Terms of service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/luqmanherifa"
                                    target="_blank"
                                    className="hover:underline "
                                >
                                    Follow us on GitHub
                                </a>
                            </li>
                        </ul>
                        <div className="text-sm text-white">
                            © 2024 Savora | Savora is built by{" "}
                            <a
                                href="https://github.com/luqmanherifa"
                                target="_blank"
                                className="hover:underline"
                            >
                                Luqman Herifa.
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="rounded-full bg-white p-7">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="70"
                            width="70"
                            viewBox="0 0 448 512"
                            fill="#00880d"
                        >
                            <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
