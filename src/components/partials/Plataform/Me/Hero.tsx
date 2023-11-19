/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from "react";
import Card from "../../../layout/Card";
import { UseFormRegister } from "react-hook-form";
import Icon from "../../../icons";
import { useParams } from "react-router-dom";
import Button from "../../../inputs/Button";
import Input from "../../../inputs/Input";
import Select from "../../../inputs/Select";

type HeroProps = {
    photo_cover?: string;
    photo_profile?: string;
    first_name?: string;
    pronoun?: string;
    profession?: string;
    disability?: string | string[];
    register: UseFormRegister<any>;
    reset: () => void;
    submitValue: any;
};

const Hero: React.FC<HeroProps> = ({
    disability,
    first_name,
    photo_cover,
    photo_profile,
    profession,
    pronoun,
    register,
    reset,
    submitValue,
}) => {
    const [editable, setEditable] = useState(false);
    const params = useParams();
    const enableEdit = useMemo(() => !params?.userId, [params?.userId]);
    return (
        <Card className="w-full">
            <div className="bg-primary h-52">
                {photo_cover ? (
                    <img
                        alt="Capa do perfil"
                        src={photo_cover}
                        className="object-cover object-center"
                    />
                ) : null}
            </div>
            <div className="relative px-8 pb-9 mt-[-75px] flex flex-col gap-[14px]">
                <div className="info">
                    <div className="w-[150px] h-[150px] border-2 border-white bg-blue-500 rounded-full mb-1">
                        {photo_profile ? (
                            <img
                                alt="Foto de perfil"
                                src={photo_profile}
                                className="object-cover object-center"
                            />
                        ) : null}
                    </div>
                    {editable ? (
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-2">
                                <Input
                                    name="first_name"
                                    register={register}
                                    className="text-base h-5"
                                    type="text"
                                    label="Nome"
                                />
                                <Select
                                    name="pronoun"
                                    register={register}
                                    options={[
                                        "Ele/Dele",
                                        "Ela/Dela",
                                        "Elu/Delu",
                                    ]}
                                    className="text-base"
                                    label="Pronome"
                                />
                            </div>
                            <Input
                                name="infos_about.profession"
                                register={register}
                                className="text-base h-5"
                                type="text"
                                label="Profissão"
                            />
                        </div>
                    ) : (
                        <>
                            <h2 id="name" className="text-2xl font-bold">
                                {first_name}
                                {pronoun ? (
                                    <small
                                        id="pronoun"
                                        className="ml-2 text-base font-normal"
                                    >
                                        ({pronoun})
                                    </small>
                                ) : null}
                            </h2>
                            <p id="profession" className="text-xl font-normal">
                                {profession}
                            </p>
                        </>
                    )}
                </div>
                {disability && (
                    <div id="difficulties" className="flex gap-3">
                        {(
                            (disability as string)?.split?.(",") || disability
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
                {enableEdit && !editable ? (
                    <div
                        className="cursor-pointer absolute top-20 right-4 p-3"
                        onClick={() => setEditable(true)}
                    >
                        <Icon name="edit" />
                    </div>
                ) : (
                    <></>
                )}
                {editable ? (
                    <div className="flex gap-4">
                        <Button
                            text="Cancelar"
                            classname="bg-[#E6EBF0] rounded-xl text-black text-base leading-5 font-bold font-nunito-sans py-3 px-6"
                            onClick={() => {
                                reset();
                                setEditable(false);
                            }}
                        />
                        <Button
                            text="Salvar"
                            classname="bg-primary rounded-xl text-white text-base leading-5 font-bold font-nunito-sans py-3 px-6"
                            onClick={() => {
                                submitValue();
                                setEditable(false);
                            }}
                        />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </Card>
    );
};

export default Hero;
