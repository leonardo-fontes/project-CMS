import { useMemo, useState } from "react";
import Button from "../../inputs/Button";
import { HiMenu } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Links from "../../inputs/Link";
import { useAuth } from "../../../hooks/useAuth";

function Web() {
    const pages = ["login", "register", "forgot-password"];
    const [isVisible, setIsVisible] = useState("hidden");
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const auth = useAuth();

    const hasAuth = useMemo(() => auth.user, [auth.user]);

    const handleLogout = async () => {
        if (hasAuth) {
            auth.signout();
            navigate("/");
        } else {
            navigate("/login");
        }
    };

    function handleClick() {
        isVisible == "hidden" ? setIsVisible("block") : setIsVisible("hidden");
    }
    return (
        <>
            {!pages.filter((page) => pathname.includes(page)).length ? (
                <div className="w-full flex justify-center bg-[var(--primary-color)]">
                    <div className="container mx-auto flex justify-around items-center gap-[16em] md:gap-[28em] lg:gap-[40em] lg:m-0 m-4  lg:py-4">
                        <Link to="/">
                            <img
                                className="w-12 object-contain aspect-square cursor-pointer hover:brightness-75 transition duration-300"
                                src="icons/logo.png"
                                alt=""
                            />
                        </Link>

                        <Button
                            text={hasAuth ? `Sair` : `Entrar`}
                            handleClick={handleLogout}
                            classname="w-20 lg:block hidden bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)] "
                        />
                        <button
                            onClick={handleClick}
                            className="lg:hidden block"
                        >
                            <HiMenu size={50} />
                        </button>
                    </div>
                    <div className={isVisible}>
                        <div className="w-full flex items-center mt-4 justify-center ">
                            <Links
                                link="/login"
                                text="Entrar"
                                classname="w-[90%] lg:block bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)] "
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default Web;
