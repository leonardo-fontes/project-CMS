import FormRegister from "../forms/FormRegister";

function Register() {
  return (
    <>
      {/* substituir fundo por imagem */}
      <div className="w-full flex relative min-h-[100vh]" >
        <div className="z-0 w-1/2 h-full bg-[var(--primary-color)] bg-gradient-to-b from-[var(--primary-color)] to-[var(--gradient-color)]">
          <img
            className="lg:w-32 w-12 lg:pt-12 pt-4 lg:pl-12 pl-4 object-contain aspect-square cursor-pointer hover:brightness-75 transition duration-300"
            src="icons/logo.png"
            alt=""
          />
        </div>
        <div className="bg-white w-1/2 text-black flex items-center">
          <div className="absolute w-[500px] lg:mt-0 pt-12 lg:left-[37%] left-[3%] lg:right-[50%] flex items-center">
            <FormRegister/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
