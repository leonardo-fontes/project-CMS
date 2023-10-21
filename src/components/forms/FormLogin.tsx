import Button from "../inputs/Button";
import Input from "../inputs/Input";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from "../../contexts/Auth/AuthContext";

type Inputs = {
    email: string;
    password: string;
};

function FormLogin() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm<Inputs>();

    const handleLogin: SubmitHandler<Inputs> = async (data) => {
        const isLogged = await auth.signin(data);
        if (isLogged) {
            navigate("/private");
        } else {
            alert("deu errado o login");
        }
    };

    return (
        <form
            className="md:max-w-[600px] max-w-[96vw] w-full bg-[white] shadow-2xl text-black md:p-10 p-4 rounded-3xl flex flex-col gap-2"
            onSubmit={handleSubmit(handleLogin)}
        >
            <div className="flex items-start justify-between pb-4">
                <div className="flex flex-col">
                    <h3 className="font-normal md:text-lg text-md ">
                        Bem vindo à Acesse-me!
                    </h3>
                    <p className="font-medium text-[3.45rem]">Login</p>
                </div>
                <div className="flex flex-col font-normal text-base">
                    <p>Não é registrado?</p>
                    <Link
                        className="text-[var(--primary-color)]"
                        to="/register"
                    >
                        Criar conta
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-9">
                <Input
                    register={register}
                    name="email"
                    type="text"
                    placeholder="Digite seu email"
                    label="Email"
                />
                <Input
                    register={register}
                    name="password"
                    type="password"
                    placeholder="Digite sua senha"
                    label="Senha"
                />
            </div>
            <a
                className="text-end text-[var(--primary-color)] mt-[7px]"
                href="https://acesseme.com.br/resetlogin"
            >
                Esqueceu a senha?
            </a>
            <div className="flex items-center justify-between mt-4">
                <Button
                    type="submit"
                    text="Entrar"
                    classname="bg-[var(--primary-color)] rounded-xl text-white w-full"
                />
            </div>
            <p className="text-center mt-4 text-[#9c9c9c]">OU</p>
            <div className="flex gap-3 mt-4">
                <button
                    type="button"
                    className="w-full flex items-center md:px-10 px-4 gap-5 rounded-md py-3 bg-[#e2d8ff]"
                >
                    <FcGoogle size={28} />
                    <p className="text-[var(--gradient-color)] text-sm">
                        Entre com a google
                    </p>
                </button>
                <button
                    type="button"
                    className="w-[3.5rem] flex items-center justify-center  gap-5 rounded-md py-3 bg-[#f0efef]"
                >
                    <FaFacebook color="#1877f2" size={28} />
                </button>
                <button
                    type="button"
                    className="w-[3.5rem] flex items-center justify-center  gap-5 rounded-md py-3 bg-[#f0efef]"
                >
                    <BsApple color="black" size={28} />
                </button>
            </div>
        </form>
    );
}

export default FormLogin;
