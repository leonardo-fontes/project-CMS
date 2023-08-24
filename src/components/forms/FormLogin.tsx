import Button from "../inputs/Button"
import Input from "../inputs/Input"

function FormLogin() {
    return (
        <form className="max-w-[600px] bg-white shadow-2xl text-black p-5 rounded-xl flex flex-col gap-2">
          {/* <h3 className="pb-3 text-center">Login</h3> */}
          <Input className="border-[1px] border-black" label="Login" />
          <Input className="border-[1px] border-black" label="Senha" />
          <div className="flex items-center justify-center my-4 gap-2">
            <input type="checkbox" className="indeterminate:bg-red-700" />
            <span>Mantenha-me conectado</span>
          </div>
          <div className="flex items-center justify-between ">
            <a className="" href="https://acesseme.com.br/resetlogin">
              Esqueceu a senha?
            </a>
            <Button
              text="Login"
              link=""
              classname="bg-[var(--primary-color)] text-white w-20"
            />
          </div>
        </form>
    )
}

export default FormLogin