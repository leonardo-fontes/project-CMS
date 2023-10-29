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
      classname: "top-[76%] md:w-20 w-16 left-[20%] border-blue-600",
    },
    {
      id: 1,
      name: "Ítalo",
      title: "pai da Agatha e fundador da Rádio dos Raros",
      description:
        "Como Família Rara e Defensores dos Raros representando a Rádio Ame os Raros e Instituto Ame os Raros , queremos parabenizar e agradecer pela Acesse-me existir e ser essa plataforma de união e solidariedade, e juntos somos mais fortes levantando a bandeira dos Raros!",
      photo: "user2.jpeg",
      classname: "top-[12%] md:w-32 w-16 left-[88%] border-red-400",
    },
    {
      id: 2,
      name: "Leo",
      title: "Embaixadora Acesse-me",
      description:
        "Conexões entre pessoas com deficiência, raras e sem deficiência é um excelente instrumento de empoderamento de suas potencialidades e através da Acesse-me, você pode criar interações, fazer e ser ponte que transformarão vidas!",
      photo: "user1.jpeg",
      classname: "top-[90%] md:w-20 w-16 left-[90%] border-blue-600",
    },
    {
      id: 3,
      name: "Ítalo",
      title: "pai da Agatha e fundador da Rádio dos Raros",
      description:
        "Como Família Rara e Defensores dos Raros representando a Rádio Ame os Raros e Instituto Ame os Raros , queremos parabenizar e agradecer pela Acesse-me existir e ser essa plataforma de união e solidariedade, e juntos somos mais fortes levantando a bandeira dos Raros!",
      photo: "user2.jpeg",
      classname: "top-[4%] md:w-32 w-16 left-[20%] border-green-300",
    },
    {
      id: 4,
      name: "Leo",
      title: "Embaixadora Acesse-me",
      description:
        "Conexões entre pessoas com deficiência, raras e sem deficiência é um excelente instrumento de empoderamento de suas potencialidades e através da Acesse-me, você pode criar interações, fazer e ser ponte que transformarão vidas!",
      photo: "user1.jpeg",
      classname: "top-[70%] w-16 left-[12%] border-blue-300",
    },
    {
      id: 5,
      name: "Ítalo",
      title: "pai da Agatha e fundador da Rádio dos Raros",
      description:
        "Como Família Rara e Defensores dos Raros representando a Rádio Ame os Raros e Instituto Ame os Raros , queremos parabenizar e agradecer pela Acesse-me existir e ser essa plataforma de união e solidariedade, e juntos somos mais fortes levantando a bandeira dos Raros!",
      photo: "user2.jpeg",
      classname: "top-[24%] w-16 left-[76%] border-red-400",
    },
  ];

  const [userId, setUserId] = useState(0);
  // const cores = [
  //   "border-red-400",
  //   "border-blue-300",
  //   "border-green-300",
  //   "border-blue-600",
  //   "border-red-600",
  // ];
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

  // function randomPosition() {
  //   return Math.floor(Math.random() * 5);
  // }

  return (
    <>
      <div className="flex flex-col mx-auto container justify-center items-center pt-20">
        <h2 className="md:text-6xl text-3xl font-merriweather font-semibold text-center">
          O que as pessoas falam sobre a <br /> Acesse-me
        </h2>
        <div className="w-full relative h-[30vh]">
          <div className="flex w-full lg:gap-36 my-16 items-center justify-around">
            <UserImage
              key={usuarios[0].id}
              handleClick={() => handleClick(usuarios[0].id)}
              photo={usuarios[0].photo}
              classname={usuarios[0].classname}
            />
            <UserImage
              key={usuarios[1].id}
              handleClick={() => handleClick(usuarios[1].id)}
              photo={usuarios[1].photo}
              classname={usuarios[1].classname}
            />
            <UserImage
              key={usuarios[2].id}
              handleClick={() => handleClick(usuarios[2].id)}
              photo={usuarios[2].photo}
              classname={usuarios[2].classname}
            />
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
        <div className="w-full relative h-[30vh]">
          <div className="flex w-full lg:gap-36 my-16 items-center justify-around">
            <UserImage
              key={usuarios[3].id}
              handleClick={() => handleClick(usuarios[3].id)}
              photo={usuarios[3].photo}
              classname={usuarios[3].classname}
            />
            <UserImage
              key={usuarios[4].id}
              handleClick={() => handleClick(usuarios[4].id)}
              photo={usuarios[4].photo}
              classname={usuarios[4].classname}
            />
            <UserImage
              key={usuarios[5].id}
              handleClick={() => handleClick(usuarios[5].id)}
              photo={usuarios[5].photo}
              classname={usuarios[5].classname}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHome;
