import { useState } from "react";
import UserCard from "../userCards/UserCard";
import UserImage from "../userCards/UserImage";

interface User {
  name?: string;
  title?: string;
  description?: string;
  classname: string;
  photo?: string;
  id: number;
}

function AboutHome() {
  const usuarios: Array<User> = [
    {
      id: 0,
      name: "Vanessa Giovana",
      title: "Embaixadora Acesse-me",
      description:
        "Conexões entre pessoas com deficiência, raras e sem deficiência é um excelente instrumento de empoderamento de suas potencialidades e através da Acesse-me, você pode criar interações, fazer e ser ponte que transformarão vidas!",
      photo: "user1.jpeg",
      classname: "top-[76%] w-20 left-[20%]",
    },
    {
      id: 1,
      name: "Ítalo",
      title: "pai da Agatha e fundador da Rádio dos Raros",
      description:
        "Como Família Rara e Defensores dos Raros representando a Rádio Ame os Raros e Instituto Ame os Raros , queremos parabenizar e agradecer pela Acesse-me existir e ser essa plataforma de união e solidariedade, e juntos somos mais fortes levantando a bandeira dos Raros!",
      photo: "user2.jpeg",
      classname: "top-[12%] w-32 left-[88%]",
    },
    {
      id: 2,
      name: "Leo",
      title: "Embaixadora Acesse-me",
      description:
        "Conexões entre pessoas com deficiência, raras e sem deficiência é um excelente instrumento de empoderamento de suas potencialidades e através da Acesse-me, você pode criar interações, fazer e ser ponte que transformarão vidas!",
      photo: "user1.jpeg",
      classname: "top-[90%] w-20 left-[90%]",
    },
    {
      id: 3,
      name: "Ítalo",
      title: "pai da Agatha e fundador da Rádio dos Raros",
      description:
        "Como Família Rara e Defensores dos Raros representando a Rádio Ame os Raros e Instituto Ame os Raros , queremos parabenizar e agradecer pela Acesse-me existir e ser essa plataforma de união e solidariedade, e juntos somos mais fortes levantando a bandeira dos Raros!",
      photo: "user2.jpeg",
      classname: "top-[14%] w-32 left-[20%]",
    },
    {
      id: 4,
      name: "Leo",
      title: "Embaixadora Acesse-me",
      description:
        "Conexões entre pessoas com deficiência, raras e sem deficiência é um excelente instrumento de empoderamento de suas potencialidades e através da Acesse-me, você pode criar interações, fazer e ser ponte que transformarão vidas!",
      photo: "user1.jpeg",
      classname: "top-[90%] w-16 left-[12%]",
    },
    {
      id: 5,
      name: "Ítalo",
      title: "pai da Agatha e fundador da Rádio dos Raros",
      description:
        "Como Família Rara e Defensores dos Raros representando a Rádio Ame os Raros e Instituto Ame os Raros , queremos parabenizar e agradecer pela Acesse-me existir e ser essa plataforma de união e solidariedade, e juntos somos mais fortes levantando a bandeira dos Raros!",
      photo: "user2.jpeg",
      classname: "top-[84%] w-12 left-[76%]",
    },
  ];

  const [userId, setUserId] = useState(0);
  const cores = [
    "border-red-400",
    "border-blue-300",
    "border-green-300",
    "border-blue-600",
    "border-red-600",
  ];
  // const top = ["top-[12%]", "top-[90%]", "top-[20%]", "top-[70%]", "top-[84%]"];
  // const left = [
  //   "left-[76%]",
  //   "left-[12%]",
  //   "left-[20%]",
  //   "left-[90%]",
  //   "left-[88%]",
  // ];
  // const size = ["w-20", "w-28", "w-32", "w-8", "w-12"];
  function handleClick(id: number) {
    setUserId(id);
  }

  function randomPosition() {
    return Math.floor(Math.random() * 5);
  }

  return (
    <>
      <div className="flex flex-col mx-auto container  justify-center items-center  py-20">
        <h2 className="md:text-6xl text-3xl font-merriweather font-semibold w-9/12 text-center">
          O que as pessoas falam sobre a Acesse-me
        </h2>
        <div className="w-full relative h-[30vh]">
          <div className="flex w-full lg:gap-36 gap-8 my-16 items-center justify-center ">
            {usuarios.map((user) => (
              <UserImage
                key={user.id}
                handleClick={() => handleClick(user.id)}
                photo={user.photo}
                border={cores[randomPosition()]}
                classname={user.classname}
                // top={top[randomPosition()]}
                // left={left[randomPosition()]}
                // size={size[randomPosition()]}
              />
            ))}
          </div>
        </div>

        <div
          className={`flex flex-col items-center justify-center transition-opacity duration-300`}
        >
          <UserCard
            name={usuarios[userId].name}
            title={usuarios[userId].title}
            description={usuarios[userId].description}
            photo={usuarios[userId].photo}
          />
        </div>
      </div>
    </>
  );
}

export default AboutHome;
