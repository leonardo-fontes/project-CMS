import Button from "../inputs/Button";
import Navbar from "../layout/Navbar";

function Home() {
  return (
    <>
      <div className="w-full flex flex-col  mx-auto container">
        <Navbar />
        <div className="flex justify-center items-center my-16 gap-28 ">
        <div className="flex flex-col gap-6 w-1/3">
          <h4 className="font-bold text-7xl">Transforme vidas com sua história</h4>
          <p className="text-base">
            Faça parte da plataforma que conecta as experiências de pessoas com
            deficiência, doenças raras e sua rede de apoio para transformar
            vidas.
          </p>
          <Button link="https://acesseme.com.br/login" text="Quero compartilhar minha história" classname="w-72 self-start bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)]" />
        </div>
        <img src="/images/people.png" alt="" />
        </div>
        
      </div>
    </>
  );
}

export default Home;
