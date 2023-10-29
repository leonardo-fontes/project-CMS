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
        <div className="w-full z-10 md:pt-[80px] pt-1 md:border-none border-b-[1px] border-white flex justify-center ${} bg-[var(--gradient-color)]">
          <div className="container flex justify-between px-3 md:justify-around items-center lg:m-0 m-4 lg:pt-4">
            <Link to="/">
              <img
                className="w-12 object-contain aspect-square cursor-pointer hover:brightness-75 transition duration-300"
                src="icons/logo.png"
                alt=""
              />
            </Link>
            <button onClick={handleClick} className="lg:hidden block">
              <HiMenu className="text-white" size={50} />
            </button>
            <div className="md:flex hidden text-white items-center justify-center gap-24">
              {" "}
              <Link to="#">Como funciona</Link>
              <Link to="#">Empresa parceira</Link>
              <Link to="#">Blog</Link>
              <Button
                text={hasAuth ? `Sair` : `Entrar`}
                handleClick={handleLogout}
                classname="w-20 lg:block hidden bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)] "
              />
            </div>
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
