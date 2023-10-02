import Button from "../../inputs/Button";

function VoluntaryHome() {
  return (
    <div className="container mx-auto flex flex-col lg:px-48 md:px-12 my-12 lg:my-16 gap-6 md:items-start items-center">
      <h2 className="text-4xl font-bold lg:w-4/5 lg:ml-0 ml-4 font-merriweather">Programa de voluntariado da Acesse-me</h2>
      <p className="mt-8 lg:ml-0 ml-4">
        Estamos procurando talentos para nos ajudar a construir o futuro da
        Acesse-me. Sua ajuda poderá impactar positivamente a vida de pessoas com
        deficiência e doenças raras. Faça parte da transformação!
      </p>
      <Button
        text="Quero ser uma pessoa voluntária"
        link="https://docs.google.com/forms/d/e/1FAIpQLSeO6uJBKhVrm7aQHnvXUlxeocIXRovzkLQ3ZHpMX-pQt-6gYA/viewform?vc=0&c=0&w=1&flr=0"
        classname="md:w-80 w-[22rem] bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)]"
      />
    </div>
  );
}

export default VoluntaryHome;
