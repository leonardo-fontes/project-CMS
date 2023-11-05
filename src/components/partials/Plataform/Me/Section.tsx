/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Card from "../../../layout/Card";
import { UseFormRegister, UseFormResetField } from "react-hook-form";
import Icon from "../../../icons";
import Button from "../../../inputs/Button";

type Props = {
    name: string;
    title: string;
    subtitle?: string;
    description: string;
    enableEdit?: boolean;
    register: UseFormRegister<any>;
    resetField: UseFormResetField<any>;
    submitValue: any;
};

const Section: React.FC<Props> = ({
    name,
    title,
    subtitle,
    description,
    enableEdit = false,
    register,
    resetField,
    submitValue,
}) => {
    const [editable, setEditable] = useState(false);
    return (
        <Card className="relative flex flex-col gap-[15px] px-9 py-5">
            <h3 id="title" className="text-2xl font-bold">
                {title}
            </h3>
            {subtitle ? (
                <h4 className="text-base leading-6 font-bold">{subtitle}</h4>
            ) : (
                <></>
            )}
            {editable ? (
                <textarea
                    {...register(name)}
                    className="border-2 rounded-md"
                    rows={5}
                />
            ) : (
                <p id="description" className="text-base leading-6 font-normal">
                    {description || (
                        <i>
                            Ainda estou trabalhando nesta seção, mas logo estará
                            repleta de informações sobre mim.
                        </i>
                    )}
                </p>
            )}
            {enableEdit && !editable ? (
                <div
                    className="cursor-pointer absolute top-3 right-4 p-3"
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
                            resetField(name);
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
        </Card>
    );
};

export default Section;
