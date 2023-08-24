import Button from "../inputs/Button";
import Navbar from "../layout/Navbar";
import ConnectionsHome from "../partials/Home/ConnectionsHome";
import VideoHome from "../partials/Home/VideoHome";
import CompanyHome from "../partials/Home/CompanyHome";
import AboutHome from "../partials/Home/AboutHome";
import VoluntaryHome from "../partials/Home/VoluntaryHome";
import MeetUsHome from "../partials/Home/MeetUsHome";
import BlogHome from "../partials/Home/BlogHome";

function Home() {
  const primaryBg =
    "bg-[var(--primary-color)] bg-gradient-to-b from-[var(--primary-color)] to-[var(--gradient-color)] text-white";
  const secondaryBg = "bg-white text-[#1a1b1f]";
  return (
    <>
      <div className="w-full flex flex-col">
        <Navbar />
        <div className="flex justify-center items-center my-16 gap-28 ">
          <div className="flex flex-col gap-6 w-[28%]">
            <h4 className="font-bold text-7xl">
              Transforme vidas com sua história
            </h4>
            <p className="text-base">
              Faça parte da plataforma que conecta as experiências de pessoas
              com deficiência, doenças raras e sua rede de apoio para
              transformar vidas.
            </p>
            <Button
              link="https://acesseme.com.br/login"
              text="Quero compartilhar minha história"
              classname="w-72 self-start bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)]"
            />
          </div>
          <img src="/images/people.png" alt="" />
        </div>
        <div className={secondaryBg}>
          {" "}
          <VideoHome />{" "}
        </div>
        <div className={primaryBg}>
          {" "}
          <ConnectionsHome />{" "}
        </div>
        <div className={secondaryBg}>
          {" "}
          <AboutHome />
        </div>
        <div className={primaryBg}>
          {" "}
          <CompanyHome />{" "}
        </div>
        <div className={` ${secondaryBg}`}>
          {" "}
          <BlogHome />{" "}
        </div>
        <div className={` w-full ${primaryBg}`}>
          {" "}
          <VoluntaryHome />{" "}
        </div>
        <div className={` ${secondaryBg}`}>
          {" "}
          <MeetUsHome />{" "}
        </div>
      </div>
      
    </>
  );
}

export default Home;
