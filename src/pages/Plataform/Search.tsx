import { Link } from "react-router-dom";
import Card from "../../components/layout/Card";
import SearchCard from "./SearchCard";
import Icon from "../../components/icons";

function Search() {
  return (
    <>
      <div className="col-span-7">
        <div className="font-nunito flex flex-col gap-4">
          <input
            className="pl-9 py-3 mt-4 bg-white rounded-full border-[#a5a8aa] border-[1px] outline-none shadow-navbarPlataform"
            type="text"
          />
        </div>
      </div>
      <div className="text-[#515151] text-base flex gap-16 col-span-12 pt-7 pb-2 border-b-[1px] border-[#C4C4C4]">
        <p className="hover:underline underline-offset-[15px] decoration-2 cursor-pointer hover:text-[#6F3DFF]">
          Todos os resultados
        </p>
        <p className="hover:underline cursor-pointer hover:text-[#6F3DFF] underline-offset-[15px] decoration-2">
          Pessoas
        </p>
        <p className="hover:underline cursor-pointer hover:text-[#6F3DFF] underline-offset-[15px] decoration-2">
          Empresas
        </p>
        <p className="hover:underline cursor-pointer hover:text-[#6F3DFF] underline-offset-[15px] decoration-2">
          ONGs
        </p>
        <p className="hover:underline cursor-pointer hover:text-[#6F3DFF] underline-offset-[15px] decoration-2">
          Pedidos de ajuda
        </p>
      </div>
      <div className="col-span-7 flex flex-col gap-5">
        <SearchCard />
        <SearchCard />
        <SearchCard patrocinado={true} />
        <SearchCard />
        <SearchCard />
        <SearchCard patrocinado={true} />
        <SearchCard />
      </div>
      <div className="col-span-5 ml-12 flex flex-col">
        <Card className="flex flex-col gap-4">
          <div className="px-7 py-6 flex flex-col gap-4">
            <h4 className="font-bold text-xl pb-5">ONGs</h4>
            <div className="flex justify-between border-b-[1px] pb-4 items-center border-[#C4C4C4]">
              <p className="text-base">Autism Speaks Canada</p>
              <Icon name="arrow" className="cursor-pointer" size={24} />
            </div>
            <div className="flex justify-between border-b-[1px] pb-4 items-center border-[#C4C4C4]">
              <p className="text-base">ACT - Autism Community Training</p>
              <Icon name="arrow" className="cursor-pointer" size={24} />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-base">New HavenLearning Centre for Children</p>
              <Icon name="arrow" className="cursor-pointer" size={24} />
            </div>
          </div>

          <Link
            className="font-bold py-3 text-center bg-[#E6EBF0] text-base"
            to="#"
          >
            Mostrar todas as ONGs
          </Link>
        </Card>
        <Card className="flex flex-col gap-4 mt-8">
          <div className="px-7 py-6 flex flex-col gap-4">
            <h4 className="font-bold text-xl pb-5">Pedidos de ajuda</h4>
            <img
              className="w-full h-[176px] rounded-2xl object-cover"
              src="/images/esporte-adaptado.jpg"
              alt=""
            />
            <h4>Tratamento de autismo do Bernardo</h4>
            <p className="text-base break-all">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but al ...{" "}
              <strong className="text-[#5600C2]">leia mais</strong>
            </p>
            <Link
              className="font-bold py-3 text-center border-[1px] border-[#6F3DFF] rounded-full text-[#6F3DFF] text-xl mt-3"
              to="#"
            >
              Eu quero ajudar
            </Link>
          </div>
          <div className="border-t-[1px] border-[#C4C4C4] mx-6"></div>
          <div className="px-7 py-6 flex flex-col gap-4">
            <img
              className="w-full h-[176px] rounded-2xl object-cover"
              src="/images/esporte-adaptado.jpg"
              alt=""
            />
            <h4>Nova cadeira de rodas do David</h4>
            <p className="text-base break-all">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but al ...{" "}
              <strong className="text-[#5600C2]">leia mais</strong>
            </p>
            <Link
              className="font-bold py-3 text-center border-[1px] border-[#6F3DFF] rounded-full text-[#6F3DFF] text-xl mt-3"
              to="#"
            >
              Eu quero ajudar
            </Link>
          </div>

          <Link
            className="font-bold py-3 text-center bg-[#E6EBF0] text-base"
            to="#"
          >
            Mostrar todos os pedidos de ajuda
          </Link>
        </Card>
      </div>
    </>
  );
}

export default Search;
