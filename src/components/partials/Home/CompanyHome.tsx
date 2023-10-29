import Links from "../../inputs/Link";

function CompanyHome() {
  return (
    <>
      <div className="flex px-3 mx-auto container justify-around py-12 items-center">
        <div className="flex flex-col lg:mx-0 md:mx-12 mx-4 gap-8">
          <h3 className="text-4xl font-bold font-merriweather">
            Seja uma <br /> empresa parceira
          </h3>
          <p className="pb-4">
            Ser uma empresa parceira da Acesse-me é posicionar sua <br />marca
            positivamente. Aqui você divulga o seu produto ou <br />serviço alcançando
            o seu público alvo de forma efetiva, criando <br /> conexões reais e
            mostrando que você se importa.
          </p>
          <Links
            text="Quero ser uma empresa parceira"
            link="#"
            classname="md:w-80 bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)]"
          />
        </div>
        <img
          className="w-auto lg:block hidden"
          src="/images/empresa.png"
          alt="" aria-hidden={true}
        />
      </div>
    </>
  );
}

export default CompanyHome;
