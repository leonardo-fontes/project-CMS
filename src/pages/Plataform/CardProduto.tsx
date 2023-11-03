import { Link } from "react-router-dom";
import Icon from "../../components/icons";
interface Props {
  price: string;
}

function CardProduto({ price }: Props) {
  return (
    <>
      <div className="shadow-navbarPlataform relative flex flex-col bg-white overflow-hidden pl-9 pr-5 py-5">
        <div className="absolute top-0 right-0 p-5">
          <Icon
            className="hover:cursor-pointer"
            name="options_vertical"
            size={24}
          />
        </div>

        <div className="flex">
          <img
            className="aspect-square w-[150px] object-center rounded-2xl"
            src="/images/esporte-adaptado.jpg"
            alt=""
          />
          <div className="flex flex-col pl-2 pt-1">
            <h3 className="text-[#5600C2] text-xl pb-3">
              Colibri compra definitiva
            </h3>
            <p className="font-bold text-3xl pb-3">R$ {price}</p>
            <div className="flex gap-4">
              <Icon className="hover:cursor-pointer" name="star" size={32} />
              <Icon className="hover:cursor-pointer" name="star" size={32} />
              <Icon className="hover:cursor-pointer" name="star" size={32} />
              <Icon className="hover:cursor-pointer" name="star" size={32} />
              <Icon className="hover:cursor-pointer" name="star" size={32} />
            </div>
          </div>
        </div>
        <div className=" flex gap-2 w-fit text-base font-normal pt-5">
          <p className="bg-[#E6EBF0] py-[2px]  px-3 rounded-full">
            Deficiência motora
          </p>
          <p className="bg-[#E6EBF0] py-[2px]  px-3 rounded-full">
            Tetraplegia
          </p>
        </div>
        <p className="text-base pt-4">
          Controle o celular e o computador com a cabeça. O Colibri dá
          acessibilidade e autonomia sem fios para pessoas que não podem usar as
          mãos.
        </p>
        <Link
          className="text-[#0F4FAA] font-semibold text-center underline text-xl pb-8 pt-5 leading-8"
          to="#"
        >
          {" "}
          Visitar página do produto
        </Link>
        <Link
          className="text-[#6F3DFF] text-xl border-[1px] border-[#6F3DFF] rounded-3xl text-center px-10 py-3 font-bold "
          to="#"
        >
          Criar uma vaquinha
        </Link>
      </div>
    </>
  );
}

export default CardProduto;
