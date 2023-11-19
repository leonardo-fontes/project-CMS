import React, { Fragment, useEffect, useMemo } from "react";
import Card from "../../components/layout/Card";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { SocialNetworks, UserProfile } from "../../types/User";
import Icon from "../../components/icons";
import Section from "../../components/partials/Plataform/Me/Section";
import { useForm } from "react-hook-form";
import updateUser from "../../service/User/updateUser";
import { useAuth } from "../../hooks/useAuth";
import Hero from "../../components/partials/Plataform/Me/Hero";

const MePage: React.FC = () => {
    const loaderData = useLoaderData();
    const { user: loggedUser, setUser } = useAuth();
    const params = useParams();
    const user = useMemo(
        () => (params?.userId ? loaderData : loggedUser) as UserProfile,
        [loaderData, loggedUser, params?.userId],
    );
    const {
        register,
        reset,
        resetField,
        watch,
        handleSubmit,
        // formState: { errors },
    } = useForm<UserProfile>({
        defaultValues: (params?.userId ? loaderData : user) as UserProfile,
    });

    const editable = useMemo(() => !params?.userId, [params?.userId]);
    const data = watch();

    const saveUser = handleSubmit(async (data) => {
        await updateUser(data);
        reset(data);
        setUser(user);
    });

    useEffect(() => {
        reset(user as UserProfile);
    }, [reset, user]);
    return (
        <div className="col-span-8 font-nunito flex flex-col gap-5">
            <Hero
                first_name={data?.first_name}
                pronoun={data?.pronoun}
                photo_cover={data?.photo_cover}
                photo_profile={data?.photo_profile}
                profession={data?.infos_about?.profession}
                disability={data?.infos_about?.disability}
                register={register}
                reset={() => reset(data)}
                submitValue={saveUser}
            />
            <Section
                title="Sobre"
                description={data.infos_about?.about}
                register={register}
                resetField={resetField}
                submitValue={saveUser}
                descriptionName="infos_about.about"
                enableEdit={editable}
            />
            <Section
                title="Maior desafio"
                subtitle={data.infos_about?.challenge?.title}
                description={data.infos_about?.challenge?.description}
                register={register}
                resetField={resetField}
                submitValue={saveUser}
                subtitleName="infos_about.challenge.title"
                descriptionName="infos_about.challenge.description"
                enableEdit={editable}
            />
            <Section
                title="Acessibilidade e adaptações"
                subtitle={data.infos_about?.adaptations?.title}
                description={data.infos_about?.adaptations?.description}
                register={register}
                resetField={resetField}
                submitValue={saveUser}
                subtitleName="infos_about.adaptations.title"
                descriptionName="infos_about.adaptations.description"
                enableEdit={editable}
            />
            <Card className="cicle-professions relative flex flex-col gap-[15px] px-9 py-5">
                {editable ? (
                    <div className="cursor-pointer absolute top-3 right-4 p-3">
                        <Icon name="edit" />
                    </div>
                ) : (
                    <></>
                )}
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
            <Card className="life-line relative flex flex-col gap-[15px] px-9 py-5">
                {editable ? (
                    <div className="cursor-pointer absolute top-3 right-4 p-3">
                        <Icon name="edit" />
                    </div>
                ) : (
                    <></>
                )}
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
                <Card className="social-networks relative flex flex-col gap-[15px] px-9 py-5">
                    {editable ? (
                        <div className="cursor-pointer absolute top-3 right-4 p-3">
                            <Icon name="edit" />
                        </div>
                    ) : (
                        <></>
                    )}
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
