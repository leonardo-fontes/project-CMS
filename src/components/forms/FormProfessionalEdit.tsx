import Button from "../inputs/Button";
import Input from "../inputs/Input";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import api from "../../service/api";
import { useAuth } from "../../hooks/useAuth";
import schema from "../../validator/auth/register";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObject, ObjectSchema } from "yup";

export type RegisterData = {
  name: string;
  email: string;
  username: string;
  password: string;
  birthdate: string;
  mobilelogin: string;
  agree: boolean;
};

function FormProfessionalEdit() {
  const navigate = useNavigate();
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterData>({
    resolver: yupResolver<RegisterData>(
      schema as unknown as ObjectSchema<RegisterData, AnyObject, "">
    ),
  });

  const agree = watch("agree");

  const handleRegister: SubmitHandler<RegisterData> = async (data) => {
    try {
      await api.register(data);
      await auth.signin({ email: data.email, password: data.password });
      navigate("/plataform");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="flex flex-col gap-8" action="">
      <Input
        name="crm"
        register={register}
        error={errors.name?.message}
        placeholder=""
        label="CRM"
      />
      <Input
        name="nome"
        register={register}
        error={errors.name?.message}
        placeholder=""
        label="Nome"
      />
      <Input
        name="especialidade"
        register={register}
        error={errors.name?.message}
        placeholder=""
        label="Especialidades/Áreas de atuação"
      />
      <Input
        name="email"
        register={register}
        error={errors.name?.message}
        placeholder=""
        label="E-mail"
      />

      <Button
        type="submit"
        classname="bg-[#6F3DFF] py-5 mt-8 text-white font-semibold rounded-full text-center"
        text="Salvar alterações"
      />
    </form>
  );
}

export default FormProfessionalEdit;
