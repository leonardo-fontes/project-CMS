import { useState } from "react";
import Button from "../inputs/Button";
import { HiMenu } from "react-icons/hi";

function Navbar() {
  const [isVisible, setIsVisible] = useState("hidden");

  function handleClick() {
    isVisible == "hidden" ? setIsVisible("block") : setIsVisible("hidden");
  }
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-around items-center gap-[16em] md:gap-[28em] lg:gap-[40em] lg:m-0 m-4  lg:py-4">
          <a href="https://www.acesseme.com/">
            <img
              className="w-12 object-contain aspect-square cursor-pointer hover:brightness-75 transition duration-300"
              src="icons/logo.png"
              alt=""
            />
          </a>

          <Button
            link="https://acesseme.com.br/login"
            text="Entrar"
            classname="w-20 lg:block hidden bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)] "
          />
          <button onClick={handleClick} className="lg:hidden block">
            <HiMenu size={50} />
          </button>
        </div>
        <div className={isVisible}>
          <div className="w-full flex items-center mt-4 justify-center ">
          <Button
            link="https://acesseme.com.br/login"
            text="Entrar"
            classname="w-[90%] lg:block bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)] "
          />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Navbar;
