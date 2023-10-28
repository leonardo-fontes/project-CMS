import React, { Fragment } from "react";
import Card from "../../components/layout/Card";
import { Link, useLoaderData } from "react-router-dom";
import { SocialNetworks, User } from "../../types/User";
import { LifeLine } from "../../types/LifeLine";
import Icon from "../../components/icons";
import { CircleProfessionals } from "../../types/CircleProfessionals";

const MePage: React.FC = () => {
    const data = useLoaderData() as User & {
        life?: LifeLine;
        circleProfessionals: CircleProfessionals[];
    };

    return (
        <div className="col-span-8 font-nunito flex flex-col gap-5">
            <Card className="w-full">
                <div className="bg-primary h-52">
                    {data.photo_cover ? (
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
                            {data.photo_profile ? (
                                <img
                                    alt="Foto de perfil"
                                    src={data.photo_profile}
                                    className="object-cover object-center"
                                />
                            ) : null}
                        </div>
                        <h2 id="name" className="text-2xl font-bold">
                            {data.first_name} {data.last_name}
                            {data?.pronoun ? (
                                <small
                                    id="pronoun"
                                    className="text-base font-normal"
                                >
                                    (Ela/dela)
                                </small>
                            ) : null}
                        </h2>
                        <p id="profession" className="text-xl font-normal">
                            {data.infos_about?.profession}
                        </p>
                    </div>
                    {data.infos_about?.disability && (
                        <div id="difficulties" className="flex gap-3">
                            {(
                                data.infos_about.disability?.split?.(",") ||
                                data.infos_about.disability
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
                    {data.infos_about?.about || (
                        <i>
                            Ainda estou trabalhando nesta seção, mas logo estará
                            repleta de informações sobre mim.
                        </i>
                    )}
                    {/* <button className="text-gradient">leia mais</button> */}
                </p>
            </Card>
            <Card className="challenge flex flex-col gap-[9px] px-9 py-5">
                {data.infos_about?.challenge ? (
                    <>
                        <h3 id="title" className="text-2xl font-bold">
                            Maior desafio
                        </h3>
                        <h4 className="text-base leading-6 font-bold">
                            {data.infos_about?.challenge?.title}
                        </h4>
                        <p
                            id="description"
                            className="text-base leading-6 font-normal"
                        >
                            {data.infos_about?.challenge?.description}
                        </p>
                    </>
                ) : (
                    <i>
                        Ainda estou trabalhando nesta seção, mas logo estará
                        repleta de informações sobre mim.
                    </i>
                )}
            </Card>
            <Card className="adaptations flex flex-col gap-[15px] px-9 py-5">
                <h3 id="title" className="text-2xl font-bold">
                    Acessibilidade e adaptações
                </h3>
                <div>
                    {data.infos_about?.adaptations ? (
                        <>
                            <h4 className="text-base leading-6 font-bold mb-1">
                                {data.infos_about.adaptations.title}
                            </h4>
                            <p
                                id="description"
                                className="text-base leading-6 font-normal"
                            >
                                {data.infos_about.adaptations.description}
                            </p>
                        </>
                    ) : (
                        <i>
                            Ainda estou trabalhando nesta seção, mas logo estará
                            repleta de informações sobre mim.
                        </i>
                    )}
                </div>
            </Card>
            <Card className="cicle-professions flex flex-col gap-[15px] px-9 py-5">
                <h3 id="title" className="text-2xl font-bold">
                    Círculo de profissionais de saúde
                </h3>
                <div id="professionals" className="flex flex-col gap-3">
                    {data?.circleProfessionals?.length ? (
                        data.circleProfessionals.map(
                            ({ name, specialties, crm, email }, index) => (
                                <Fragment key={email}>
                                    {index ? (
                                        <hr className="h-[2px] bg-[#c4c4c4]" />
                                    ) : null}

                                    <div className="flex gap-[15px] items-center">
                                        <Icon name="health_professional" />
                                        <p className="text-base leading-6 font-normal">
                                            <strong>{name},</strong>{" "}
                                            {specialties}, CRM
                                            {crm}
                                        </p>
                                    </div>
                                </Fragment>
                            ),
                        )
                    ) : (
                        <i>
                            Ainda estou trabalhando nesta seção, mas logo estará
                            repleta de informações sobre mim.
                        </i>
                    )}
                </div>
            </Card>
            <Card className="life-line flex flex-col gap-[15px] px-9 py-5">
                <h3 id="title" className="text-2xl font-bold">
                    Linha da vida
                </h3>
                <div id="life-line" className="relative">
                    <div
                        className="line absolute top-[28px] left-[9px] border-2 border-dashed border-[#515151]"
                        style={{ height: "calc(100% - 56px)" }}
                    ></div>
                    <div id="events" className="flex flex-col gap-4">
                        <div className="event flex items-center gap-[22px]">
                            <div>
                                <div className="w-[20px] h-[20px] bg-[#515151] rounded-full"></div>
                            </div>
                            <div className="w-full px-4 py-[20px] text-base leading-6 rounded-3xl font-extrabold border-[1px] border-[#e6ebf0]">
                                {data.infos_about?.birthdate} - Nascimento
                            </div>
                        </div>
                        {data.life?.length
                            ? data.life.map(({ title }) => (
                                  <div className="event flex items-center gap-[22px]">
                                      <div>
                                          <div className="w-[20px] h-[20px] bg-[#515151] rounded-full"></div>
                                      </div>
                                      <div className="w-full px-4 py-[20px] text-base leading-6 rounded-3xl font-extrabold border-[1px] border-[#e6ebf0]">
                                          {title}
                                      </div>
                                  </div>
                              ))
                            : null}
                    </div>
                </div>
            </Card>
            {data.infos_about?.social_networks &&
            Object.keys(data.infos_about.social_networks).length ? (
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
                            ),
                        )}
                    </div>
                </Card>
            ) : null}
        </div>
    );
};

export default MePage;
