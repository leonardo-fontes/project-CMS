import Button from "../../inputs/Button";

function Company() {
  return (
    <>
      <div className="flex mx-auto container justify-center py-12 items-center">
        <div className="flex flex-col w-1/2 gap-10">
          <h3 className="text-4xl font-bold w-4/5">Seja uma empresa parceira</h3>
          <p className="w-9/12">Ser uma empresa parceira da Acesse-me é posicionar sua marca positivamente. Aqui você divulga o seu produto ou serviço alcançando o seu público alvo de forma efetiva, criando conexões reais e mostrando que você se importa.</p>
          <Button
            text="Quero ser uma empresa parceira"
            link="https://www.acesseme.com/partners"
            classname="w-64 bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)]"
          />
        </div>
        <img className="w-auto" src="/images/empresa.png" alt="" />
      </div>
    </>
  );
}

export default Company;
