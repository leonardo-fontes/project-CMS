import Links from "../../inputs/Link";

function ConnectionsHome() {
  return (
    <>
      <div className="flex bg-no-repeat bg-[length:100%_100%]  md:bg-[url('images/bgbubbles-img.webp')] py-10 items-center justify-around">
        <img
          className="w-[550px] ml-10 hidden lg:block"
          src="/images/connections.webp"
          alt="Combinação com 4 ilustrações de pessoas com deficiência."
        />

        <div className="flex flex-col lg:gap-12 gap-8 lg:items-start items-center md:justify-normal justify-center md:px-0 px-8">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-merriweather font-bold md:mr-16">
            Como as conexões <br /> acontecem na Acesse-me
          </h2>
          <div className="flex gap-4">
            <img
              className="md:w-20 w-8 object-contain"
              src="/images/lifeline_icon.webp"
              alt="" aria-hidden={true}
            />
            <div className="flex flex-col">
              <h4 className="md:text-3xl text-lg font-semibold">Linha da vida</h4>
              <p className="leading-relaxed text-[14px]">
                É onde você registra a sua história e ajuda outras pessoas{" "}
                <br />
                através das suas experiências, descobertas, primeiros <br />{" "}
                sinais e diagnósticos.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              className="md:w-20 w-8 object-contain"
              src="/images/circles_icon.webp"
              alt="" aria-hidden={true}
            />
            <div className="flex flex-col gap-1">
              <h4 className="md:text-3xl text-lg font-semibold">Círculos</h4>
              <p className=" leading-relaxed text-[14px]">
                É onde você vai compartilhar a sua rede de apoio, como <br />
                profissionais, produtos, associações e ONGs que <br /> colaboram
                na sua jornada de forma positiva.
              </p>
            </div>
          </div>
          <Links
            link="/register"
            text="Quero fazer o meu cadastro"
            classname="md:w-64 w-[80vw] ml-0 md:ml-12 lg:ml-0 md:self-start bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)]"
          />
        </div>
      </div>
    </>
  );
}

export default ConnectionsHome;
