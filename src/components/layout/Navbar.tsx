import { useContext, useState } from "react";
import Button from "../inputs/Button";
import { HiMenu } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

function Navbar() {
    const pages = ["login", "register"];
    const [isVisible, setIsVisible] = useState("hidden");
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const auth = useContext(AuthContext);

    const handleLogout = async () => {
        if (auth.user) {
            await auth.signout();
            navigate("/");
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
                            link={!auth.user ? `/login` : `/`}
                            text={!auth.user ? `Entrar` : `Sair`}
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
                            <Button
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

export default Navbar;
