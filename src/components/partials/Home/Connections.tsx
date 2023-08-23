import Button from "../../inputs/Button";

function Connections() {
  return (
    <>
      <div className="flex container mx-auto py-10 items-center justify-between">
        <img className="ml-40" src="/images/people.png" alt="" />

        <div className="flex flex-col gap-12 w-1/2">
          <h2 className="text-5xl font-bold w-4/5">
            Como as conexões acontecem na Acesse-me
          </h2>
          <div className="flex gap-4">
            <img src="/icons/icon1.svg" alt="" />
            <div className="flex flex-col gap-1">
              <h4 className="text-3xl font-medium">Linha da vida</h4>
              <p className="w-3/5 leading-relaxed">
                É onde você registra a sua história e ajuda outras pessoas
                através das suas experiências, descobertas, primeiros sinais e
                diagnósticos.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="/icons/icon2.svg" alt="" />
            <div className="flex flex-col gap-1">
              <h4 className="text-3xl font-medium">Círculos</h4>
              <p className="w-3/5 leading-relaxed">
                É onde você vai compartilhar a sua rede de apoio, como
                profissionais, produtos, associações e ONGs que colaboram na sua
                jornada de forma positiva.
              </p>
              
            </div>
            
          </div>
          <Button
                link="https://acesseme.com.br/login"
                text="Quero fazer o meu cadastro"
                classname="w-60 bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)]"
              />
        </div>
      </div>
    </>
  );
}

export default Connections;
