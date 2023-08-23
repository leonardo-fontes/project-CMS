import Button from "../../inputs/Button";

function Voluntary() {
  return (
    <div className="container mx-auto flex flex-col px-48 my-16 gap-6">
      <h2 className="text-4xl font-bold w-4/5">Programa de voluntariado da Acesse-me</h2>
      <p className="mt-8">
        Estamos procurando talentos para nos ajudar a construir o futuro da
        Acesse-me. Sua ajuda poderá impactar positivamente a vida de pessoas com
        deficiência e doenças raras. Faça parte da transformação!
      </p>
      <Button
        text="Quero ser uma pessoa voluntária"
        link="https://docs.google.com/forms/d/e/1FAIpQLSeO6uJBKhVrm7aQHnvXUlxeocIXRovzkLQ3ZHpMX-pQt-6gYA/viewform?vc=0&c=0&w=1&flr=0"
        classname="w-72 bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)]"
      />
    </div>
  );
}

export default Voluntary;
