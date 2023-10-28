import Links from "../../inputs/Link";

function ConnectionsHome() {
    return (
        <>
            <div className="flex container mx-auto py-10 items-center justify-between">
                <img
                    className="ml-40 hidden lg:block"
                    src="/images/people.png"
                    alt=""
                />

                <div className="flex flex-col lg:gap-12 gap-8 lg:w-1/2 lg:items-start items-center">
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-merriweather font-bold lg:w-11/12 w-[75%] lg:mr-0 mr-0 md:mr-16">
                        Como as conexões acontecem na Acesse-me
                    </h2>
                    <div className="flex gap-4 lg:ml-0 ml-12">
                        <div className="flex flex-col gap-1">
                            <h4 className="md:text-3xl text-xl font-normal">
                                Linha da vida
                            </h4>
                            <p className="lg:w-3/5 leading-relaxed">
                                É onde você registra a sua história e ajuda
                                outras pessoas através das suas experiências,
                                descobertas, primeiros sinais e diagnósticos.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 lg:ml-0 ml-12">
                        <img className="hidden md:block" alt="" />
                        <div className="flex flex-col gap-1">
                            <h4 className="md:text-3xl text-xl font-medium">
                                Círculos
                            </h4>
                            <p className="lg:w-3/5 leading-relaxed">
                                É onde você vai compartilhar a sua rede de
                                apoio, como profissionais, produtos, associações
                                e ONGs que colaboram na sua jornada de forma
                                positiva.
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
