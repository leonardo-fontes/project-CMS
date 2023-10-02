import { useState } from "react";
import UserCard from "../userCards/UserCard";
import UserImage from "../userCards/UserImage";

interface User {
  name?: string;
  title?: string;
  description?: string;
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
    },
    {
      id: 1,
      name: "Ítalo",
      title: "pai da Agatha e fundador da Rádio dos Raros",
      description:
        "Como Família Rara e Defensores dos Raros representando a Rádio Ame os Raros e Instituto Ame os Raros , queremos parabenizar e agradecer pela Acesse-me existir e ser essa plataforma de união e solidariedade, e juntos somos mais fortes levantando a bandeira dos Raros!",
      photo: "user2.jpeg",
    },
    {
      id: 2,
      name: "Leo",
      title: "Embaixadora Acesse-me",
      description:
        "Conexões entre pessoas com deficiência, raras e sem deficiência é um excelente instrumento de empoderamento de suas potencialidades e através da Acesse-me, você pode criar interações, fazer e ser ponte que transformarão vidas!",
      photo: "user1.jpeg",
    },
    {
      id: 3,
      name: "Ítalo",
      title: "pai da Agatha e fundador da Rádio dos Raros",
      description:
        "Como Família Rara e Defensores dos Raros representando a Rádio Ame os Raros e Instituto Ame os Raros , queremos parabenizar e agradecer pela Acesse-me existir e ser essa plataforma de união e solidariedade, e juntos somos mais fortes levantando a bandeira dos Raros!",
      photo: "user2.jpeg",
    },
  ];

  const [userId, setUserId] = useState(0);

  function handleClick(id: number) {
    setUserId(id);
  }

  return (
    <>
      <div className="flex flex-col mx-auto container justify-center items-center  py-20">
        <h2 className="md:text-6xl text-3xl font-merriweather font-semibold w-9/12 text-center">O que as pessoas falam sobre a Acesse-me</h2>
        <div className="flex lg:gap-36 gap-8 my-16 cursor-pointer">
          {usuarios.map((user) => (
            <UserImage
              key={user.id}
              handleClick={() => handleClick(user.id)}
              photo={user.photo}
            />
          ))}
        </div>
        <div
          className={`flex flex-col items-center justify-center  transition-opacity`}
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
