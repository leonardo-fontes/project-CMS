import Button from "../inputs/Button";

function Navbar() {
  return (
    <>
      <div className="w-full my-4 ">
        <div className="flex justify-around gap-[40em] container mx-auto py-4">
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
            classname="w-20 bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)] "
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
