
import FormLogin from "../forms/FormLogin";
import { Link } from "react-router-dom";

function Login() {

 
  return (
    <>
      {/* mudar para imagem de fundo */}
      <div className="w-full flex relative min-h-[100vh] font-poppins">
        <div className="z-0 w-1/2 h-full bg-[var(--primary-color)] bg-gradient-to-b from-[var(--primary-color)] to-[var(--gradient-color)]">
          <Link to='/'>
            <img
              className="md:w-32 w-12 md:pt-12 md:pl-12 pl-4 pt-4 object-contain aspect-square cursor-pointer hover:brightness-75 transition duration-300"
              src="icons/logo.png"
              alt=""
            />
          </Link>

        </div>
        <div className="bg-white w-1/2 text-black flex md:items-center">
          <div className="absolute w-11/12 left-[5%] md:left-[22%] top-[4rem] md:top-[10rem] lg:top-[10%] md:w-[500px] lg:left-[35%] lg:right-[50%]">
            <FormLogin />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
