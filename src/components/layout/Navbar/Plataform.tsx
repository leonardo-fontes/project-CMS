import React from "react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import Button from "../../inputs/Button";
import { useAuth } from "../../../hooks/useAuth";
import Icon from "../../icons";

const Plataform: React.FC = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    const handleLogout = async () => {
        auth.signout();
        navigate("/");
    };

    return (
        <div className="w-full min-[1920px]:container min-[1920px]:mx-auto flex shadow-navbarPlataform">
            <div className="w-full flex justify-between px-[60px] py-[6px]">
                <div className="flex gap-5 items-center">
                    <LinkRouter to="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 50 50"
                            fill="none"
                        >
                            <rect
                                width="48"
                                height="48"
                                rx="24"
                                fill="url(#paint0_linear_1385_4015)"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.5771 11.0554C15.8385 11.7977 12.1559 15.6618 11.2531 20.8389C10.5706 24.7529 11.2799 28.5719 13.2424 31.549C13.8417 32.4581 15.3231 33.9703 16.2 34.5681C19.4262 36.7674 23.6344 37.047 26.8584 35.2763C27.6734 34.8287 28.1537 34.4938 28.8693 33.8744L29.5145 33.3159L29.5654 33.6995C29.6835 34.5893 30.4729 35.5554 31.3003 35.8226C31.8405 35.9972 32.6906 35.9968 33.2409 35.8218C33.843 35.6303 34.5826 34.8944 34.8251 34.2453L35 33.7772L34.9788 23.3182L34.9575 12.8592L34.7684 12.4787C34.5127 11.9642 34.0051 11.4716 33.4711 11.2197C33.0922 11.041 32.9203 11.0112 32.2659 11.0112C31.5925 11.0112 31.4486 11.0378 31.0444 11.2362C30.2279 11.6372 29.5341 12.6424 29.5341 13.4247C29.5341 13.5777 29.5165 13.7029 29.4949 13.7029C29.4734 13.7029 29.1392 13.4688 28.7523 13.1828C27.4867 12.2469 25.8437 11.5018 24.3048 11.1658C23.5996 11.0118 21.2915 10.9434 20.5771 11.0554ZM24.5928 18.0768C26.1267 18.593 27.3009 19.6185 27.9615 21.0192C28.3476 21.8376 28.4669 22.3569 28.5656 23.6464C28.6931 25.3143 28.821 28.6083 28.7638 28.7571C28.6611 29.0248 28.3652 28.8827 27.6211 28.2084L26.8733 27.5307L26.3897 27.9202C25.7692 28.4204 25.0539 28.7702 24.2222 28.9806C23.6724 29.1196 23.3966 29.1414 22.5903 29.1095C20.9865 29.046 20.0282 28.6194 18.8441 27.4421C18.0869 26.6893 17.7122 26.0683 17.3898 25.0317C17.2334 24.5286 17.2035 24.2633 17.2089 23.4248C17.2144 22.5671 17.2462 22.3266 17.427 21.7777C18.0777 19.8018 19.6374 18.3917 21.7003 17.9144C22.4697 17.7363 23.8036 17.8112 24.5928 18.0768Z"
                                fill="white"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1385_4015"
                                    x1="24"
                                    y1="0"
                                    x2="24"
                                    y2="48"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#5600C2" />
                                    <stop offset="1" stopColor="#6F3DFF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </LinkRouter>
                    <div className="relative">
                        <Icon
                            name="search"
                            className="absolute top-1/2 -translate-y-1/2 left-3"
                        />
                        <input
                            name="search"
                            placeholder="Pesquisa"
                            className="border-[#a5a8aa] border-[1px] p-3 pl-12 outline-none rounded-full"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z"
                            fill="#515151"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.89 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
                            fill="#515151"
                        />
                    </svg>
                    <Button
                        text={`Sair`}
                        onClick={handleLogout}
                        classname="p-0 bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)] "
                    />
                </div>
            </div>
        </div>
    );
};

export default Plataform;
