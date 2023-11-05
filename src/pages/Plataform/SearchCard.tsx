import Card from "../../components/layout/Card";
interface Props {
  patrocinado?: boolean;
}
function SearchCard({ patrocinado }: Props) {
  return (
    <Card className="flex flex-col gap-4 px-5 py-4">
      <div className="flex">
        <img
          className="aspect-square w-[150px] object-center rounded-2xl mr-3"
          src="/images/pessoas-bar.jpg"
          alt=""
        />
        <div className="flex flex-col">
          {patrocinado ? (
            <p className="text-[#515151] text-base">Patrocinado</p>
          ) : (
            ""
          )}

          <h2 className="text-2xl text-[#5600C2]">Marília Suzart</h2>
          <p className="text-base break-all">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but al ...{" "}
            <strong className="text-[#5600C2]">leia mais</strong>
          </p>
        </div>
      </div>

      <div className=" flex gap-2 w-fit text-base font-normal">
        <p className="bg-[#E6EBF0] py-[2px]  px-3 rounded-full">
          Deficiência motora
        </p>
        <p className="bg-[#E6EBF0] py-[2px]  px-3 rounded-full">Tetraplegia</p>
      </div>
    </Card>
  );
}

export default SearchCard;
