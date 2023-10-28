import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Galho from "../components/lifeline/galho";

interface Galhos {
  description: string;
  title: string;
  location: string;
  date: string;
}

function Private() {

  const galhos: Array<Galhos> = [
    {
      description:
        "Eu já morei em santos, agora Moro em São Paulo e estou muito feliz",
      title: "Mariana Goulart",
      location: "Santos, SP",
      date: "2012 - present",
    },
    {
      description:
        "Eu já morei em santos, agora Moro em São Paulo e estou muito feliz",
      title: "Mariana Goulart",
      location: "Santos, SP",
      date: "2011 - present",
    },
    {
      description:
        "Eu já morei em santos, agora Moro em São Paulo e estou muito feliz",
      title: "Mariana Goulart",
      location: "Santos, SP",
      date: "2013 - present",
    },
  ];

  return (
    <>
      <div className="flex w-full">
        <div className="w-[50%] flex flex-col">
          <img src="/images/user1.jpeg" alt="" />
          <h1>bom dia</h1>
        </div>
        <div className="w-[50%]">
          <VerticalTimeline lineColor="var(--primary-color)">
            {galhos.map((galho) => (
              <Galho
                title={galho.title}
                description={galho.description}
                location={galho.location}
                date={galho.date}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Private;
