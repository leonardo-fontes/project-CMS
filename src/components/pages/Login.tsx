import FormLogin from "../forms/FormLogin";

function Login() {
  return (
    <>
      {/* mudar para imagem de fundo */}
      <div className="w-full flex relative min-h-[100vh] font-poppins">
        <div className="z-0 w-1/2 h-full bg-[var(--primary-color)] bg-gradient-to-b from-[var(--primary-color)] to-[var(--gradient-color)]">
          <img
            className="w-32 pt-12 pl-12 object-contain aspect-square cursor-pointer hover:brightness-75 transition duration-300"
            src="icons/logo.png"
            alt=""
          />
        </div>
        <div className="bg-white w-1/2 text-black flex items-center">
          <div className="absolute w-[500px] left-[37%] right-[50%]">
            <FormLogin />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
