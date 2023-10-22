import Button from "../inputs/Button";
import Input from "../inputs/Input";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type Data = {
  first_name: string;
  last_name: string;
  email: string;
  confirm_email: string;
  username: string;
  password: string;
  birthdate: string;
  mobilelogin: string;
};

function FormRegister() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Data>();

  const handleRegister: SubmitHandler<Data> = async (data) => {
    
};

  return (
    <form className="md:max-w-[500px] w-[94vw] bg-white shadow-2xl text-black md:p-10 p-5 rounded-3xl flex flex-col md:gap-2"
    onSubmit={handleSubmit(handleRegister)}>
      <div className="flex md:mr-4 items-center justify-between">
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg ">Bem vindo à Acesse-me!</h3>
          <p className="ml-2 pb-5 font-semibold text-4xl">Registrar</p>
        </div>
        <div className="flex flex-col">
          <p>Já é registrado?</p>
          <Link className="text-[var(--primary-color)]" to="/login">
            Entrar
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-8 md:justify-between">
          <Input
            name="first_name"
            register={register}
            className="border-[1px] md:w-48  w-full border-[#ADADAD] lg:py-[19px] py-[12px] lg:px-[25px] px-[15px]  shadow-md"
            placeholder="nome"
            label="Nome"
          />
          <Input
            name="last_name"
            register={register}
            className="border-[1px] md:w-48 w-full border-[#ADADAD] lg:py-[19px] py-[12px] lg:px-[25px] px-[15px]  shadow-md"
            placeholder="sobrenome"
            label="Sobrenome"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Input
            name="email"
            register={register}
            type="email"
            className="border-[1px] border-[#ADADAD] lg:py-[19px] py-[12px] lg:px-[25px] px-[15px]  shadow-md"
            placeholder="email"
            label="Email"
          />
          <Input
            name="confirm_email"
            register={register}
            type="email"
            className="border-[1px] border-[#ADADAD] lg:py-[19px] py-[12px] lg:px-[25px] px-[15px]  shadow-md"
            placeholder="Confirme seu email"
            label="Confirme seu email"
          />
        </div>
        <div className="flex justify-between gap-4">
          <Input
            name="username"
            register={register}
            className="border-[1px] lg:w-48 w-full border-[#ADADAD] shad lg:py-[19px] py-[12px] lg:px-[25px] px-[15px]  shadow-md"
            placeholder="Username"
            label="Usuario"
          />
          <Input
            name="password"
            register={register}
            type="password"
            className="border-[1px] lg:w-48 w-full border-[#ADADAD] lg:py-[19px] py-[12px] lg:px-[25px] px-[15px]  shadow-md"
            placeholder="senha"
            label="Senha"
          />
        </div>
        <div className="flex justify-between lg:items-start items-end gap-4">
          <Input
            name="birthdate"
            register={register}
            type="date"
            className="border-[1px]  lg:w-48 w-full border-[#ADADAD] lg:py-[19px] py-[12px] lg:px-[25px] px-[15px]  shadow-md"
            placeholder="00/00/0000"
            label="Data de Nascimento"
          />
          <Input
            name="mobilelogin"
            register={register}
            type="Number"
            className="border-[1px] lg:w-48 w-full border-[#ADADAD] lg:py-[19px] py-[12px] lg:px-[25px] px-[15px]  shadow-md"
            placeholder="(00)00000-0000"
            label="Telefone"
          />
        </div>
      </div>
      <div className="my-6">
        <input name="agree" type="checkbox" />
        <label className="ml-2" htmlFor="agree">
          Eu confirmo que concordo com seu site{" "}
          <a className="underline" href="https://acesseme.com.br/site/privacy">
            Políticas de privacidade
          </a>
          <span className="mx-1">e</span>
          <a className="underline" href="https://acesseme.com.br/site/terms">
            Termos e condições
          </a>{" "}
        </label>
      </div>
      <div className="flex items-center justify-between mt-4">
        <Button
          text="Registrar"
          classname="bg-[var(--primary-color)] rounded-xl text-white w-full"
        />
      </div>
    </form>
  );
}

export default FormRegister;
