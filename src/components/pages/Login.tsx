import FormLogin from "../forms/FormLogin";
import Container from "../layout/Container";
import Navbar from "../layout/Navbar";
import AboutHome from "../partials/Home/AboutHome";
import BlogHome from "../partials/Home/BlogHome";

function Login() {
  return (
    <>
      <div className="w-full relative h-screen flex text-white">
        <div className="w-[50%] z-0 h-full bg-[var(--primary-color)] bg-gradient-to-b from-[var(--primary-color)] to-[var(--gradient-color)]">
          <img
            className="w-32 pt-12 object-contain aspect-square cursor-pointer hover:brightness-75 transition duration-300"
            src="icons/logo.png"
            alt=""
          />
        </div>
        <div className="bg-white z-0 w-[50%]"></div>
        <div className="w-full z-10 absolute top-[30%] left-[34%]">
          <FormLogin />
        </div>
      </div>
    </>
  );
}

export default Login;
