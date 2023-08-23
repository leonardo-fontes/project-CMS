import Button from "../../inputs/Button";

function MeetUs() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center container mx-auto py-24">
      <h3 className="text-5xl w-5/12 text-center font-bold leading-normal">Conheça a vida e história de pessoas com deficiência</h3>
      <Button
        text="Seja Acesse-me"
        link="https://acesseme.com.br/login"
        classname="bg-[var(--primary-color)] text-white text-sm w-[9.5rem]"
      />
    </div>
  );
}

export default MeetUs;
