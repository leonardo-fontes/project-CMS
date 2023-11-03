import Card from "../../components/layout/Card";
import { Link, useLoaderData } from "react-router-dom";
import { SocialNetworks, User } from "../../types/User";
import { LifeLine } from "../../types/LifeLine";
import Icon from "../../components/icons";
import { CircleProfessionals } from "../../types/CircleProfessionals";
import CardProduto from "./CardProduto";

function Empresa() {
  const data = useLoaderData() as User & {
    life?: LifeLine;
    circleProfessionals: CircleProfessionals[];
  };

  var price: string = "39,90";
  var date: string = "03/09/2022";
  return (
    <>
      <div className="col-span-8 font-nunito flex flex-col gap-4">
        <Card className="w-full">
          <div className="bg-primary h-52">
            {data?.photo_cover ? (
              <img
                alt="Capa do perfil"
                src={data.photo_cover}
                className="object-cover object-center"
              />
            ) : null}
          </div>
          <div className="px-8 pb-9 mt-[-75px] flex flex-col gap-[14px]">
            <div className="info">
              <div className="w-[150px] h-[150px] border-2 border-white bg-blue-500 rounded-full mb-1">
                {data?.photo_profile ? (
                  <img
                    alt="Foto de perfil"
                    src={data?.photo_profile}
                    className="object-cover object-center"
                  />
                ) : null}
              </div>
              <h2 id="name" className="text-2xl font-bold">
                {data?.first_name} {data?.last_name}
                {data?.pronoun ? (
                  <small id="pronoun" className="text-base font-normal">
                    (Ela/dela)
                  </small>
                ) : null}
              </h2>
              <p id="profession" className="text-xl font-normal">
                {data?.infos_about?.profession}
              </p>
            </div>
            {data?.infos_about?.disability && (
              <div id="difficulties" className="flex gap-3">
                {(
                  data?.infos_about.disability?.split?.(",") ||
                  data?.infos_about.disability
                ).map((dificulty: string) => (
                  <div
                    className="bg-[#E6EBF0] py-[2px] px-3 rounded-full text-base font-normal"
                    key={dificulty}
                  >
                    {dificulty}
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>
        <Card className="about flex flex-col gap-[15px] px-9 py-5">
          <h3 id="title" className="text-2xl font-bold">
            Sobre
          </h3>
          <p id="description" className="text-base leading-6 font-normal">
            {data?.infos_about?.about || (
              <i>
                Ainda estou trabalhando nesta seção, mas logo estará repleta de
                informações sobre mim.
              </i>
            )}
            <button className="text-gradient">leia mais</button>
          </p>
        </Card>
        {data?.infos_about?.social_networks &&
        Object.keys(data?.infos_about.social_networks).length ? (
          <Card className="social-networks flex flex-col gap-[15px] px-9 py-5">
            <h3 id="title" className="text-2xl font-bold">
              Redes sociais
            </h3>
            <div id="networks" className="flex gap-6">
              {Object.entries(data.infos_about.social_networks).map(
                ([key, value]) => (
                  <Link key={key} to={value} target="_blank">
                    <Icon name={key as SocialNetworks} />
                  </Link>
                )
              )}
            </div>
          </Card>
        ) : null}
        <div className="flex flex-col gap-1">
          <Card className="rounded-t-xl rounded-b-none flex items-center justify-between pl-9 pr-5 py-5">
            <h4 className="font-bold text-2xl ">Produtos e Serviços</h4>
            <Icon className="hover:cursor-pointer" name="more" size={24} />
          </Card>
          <div className="flex flex-col gap-4">
            <CardProduto price="2999,00" />
            <CardProduto price="312,33" />
            <CardProduto price="312,44" />
            <CardProduto price="312" />
            <CardProduto price="312" />
          </div>
        </div>
      </div>
      <div className="col-span-4 flex flex-col font-nunito gap-5">
        <Card className="">
          <p className="text-lg font-bold py-6 px-6 pr-6">
            {" "}
            Configurações, Privacidade e Segurança
          </p>
        </Card>
        <Card className="flex flex-col px-6 py-6 pb-10 relative">
          <Icon className="absolute top-6 right-6" name="edit" size={24} />
          <p className="font-bold text-lg">Assinatura</p>
          <div className="border-b-[1px] mr-4 my-4 pb-4 border-[#C4C4C4]">
            <p className="text-base">Próxima cobrança</p>
            <p className="text-lg">
              R$ {price} em {date}
            </p>
          </div>
          <p className="text-base">Mastercard</p>
          <p className="text-lg font-semibold">Cartão de final 1234</p>
        </Card>
      </div>
    </>
  );
}

export default Empresa;
