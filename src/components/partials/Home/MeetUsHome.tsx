import Links from "../../inputs/Link";

function MeetUsHome() {
  return (
    <div className="flex flex-col md:gap-20 lg:gap-12 gap-8 items-center justify-center container mx-auto py-12 md:py-24">
      <h3 className="md:text-5xl lg:w-6/12 text-2xl text-center font-bold lg:leading-normal font-merriweather">
        Conheça a vida e história de pessoas com deficiência
      </h3>
      <Links
        text="Seja Acesse-me"
        link="/login"
        classname="bg-[var(--primary-color)] text-white text-sm w-[80vw] md:w-[9.5rem]"
      />
    </div>
  );
}

export default MeetUsHome;
