import Links from "../../inputs/Link";

function CompanyHome() {
  return (
    <>
      <div className="flex mx-auto container justify-center py-12 items-center">
        <div className="flex flex-col lg:mx-0 md:mx-12 mx-4 lg:w-1/2 gap-4">
          <h3 className="text-4xl font-bold lg:w-4/5 font-merriweather">
            Seja uma empresa parceira
          </h3>
          <p className="lg:w-10/12">
            Ser uma empresa parceira da Acesse-me é posicionar sua marca
            positivamente. Aqui você divulga o seu produto ou serviço alcançando
            o seu público alvo de forma efetiva, criando conexões reais e
            mostrando que você se importa.
          </p>
          <Links
            text="Quero ser uma empresa parceira"
            link="https://www.acesseme.com/partners"
            classname="md:w-80 bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)]"
          />
        </div>
        <img
          className="w-auto lg:block hidden"
          src="/images/empresa.png"
          alt=""
        />
      </div>
    </>
  );
}

export default CompanyHome;
