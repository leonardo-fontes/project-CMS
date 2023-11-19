import Icon from "../../icons";

function Organizations() {
  return (
    <div className="flex flex-col text-[28px] md:text-start text-center font-bold md:px-40 md:py-20 py-12">
      <h3 className="font-merriweather bg-clip-text text-transparent bg-gradient-to-t from-[#40AFFF] to-[#6F3DFF]">
        Conheça as organizações que nos apoiam na{" "}
        <p className=" bg-clip-text text-transparent font-merriweather bg-gradient-to-t from-[#40AFFF] to-[#6F3DFF]">
          transformação de vidas
        </p>
      </h3>
      <div className="w-full flex gap-12">
        <Icon name="partner1" size={100} color="#40AFFF" />
        <Icon name="partner2" size={100} color="#40AFFF" />
        <Icon name="partner3" size={100} color="#40AFFF" />
        <Icon name="partner4" size={100} color="#40AFFF" />
      </div>
    </div>
  );
}

export default Organizations;
