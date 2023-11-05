import ConnectionsHome from "../components/partials/Home/ConnectionsHome";
import VideoHome from "../components/partials/Home/VideoHome";
import CompanyHome from "../components/partials/Home/CompanyHome";
import AboutHome from "../components/partials/Home/AboutHome";
import BlogHome from "../components/partials/Home/BlogHome";
import Links from "../components/inputs/Link";
import Organizations from "../components/partials/Home/Organizations";

function Home() {
  const primaryBg =
    "bg-gradient-to-b from-[var(--gradient-color)] to-[var(--primary-color)] text-white";
  const imageBg = "bg-[length:100%_100%] bg-[url('/images/bg_home.webp')]";
  const secondaryBg = "bg-white text-[#1a1b1f]";

  return (
    <>
      <div className="w-full flex flex-col">
        <div
          className={`flex md:h-screen lg:flex-row flex-col pb-32 ${
            window.innerWidth > 1200 ? imageBg : primaryBg
          } text-white justify-between items-center lg:pt-0 pt-12 px-20 lg:px-60`}
        >
          <div className="flex flex-col text-start md:items-start items-center gap-4">
            <h4 className="font-semibold font-merriweather md:text-7xl text-5xl ">
              Transforme <br /> vidas com sua <br />história
            </h4>
            <p className="text-base leading-relaxed whitespace-pre-wrap">
              Faça parte da plataforma que conecta as experiências  de pessoas
              com deficiência, doenças raras e sua rede de apoio para
              transformar vidas.
            </p>
            <Links
              link="/login"
              text="Quero compartilhar minha história"
              classname="w-80 mt-5 lg:self-start bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)]"
            />
          </div>
          <img
            className="w-[500px]  hidden lg:block"
            src="/images/people.png"
            alt="Combinação com 7 fotos de pessoas com deficiência. Uma pessoa usando cadeira de rodas, uma com Síndrome de Down, uma de óculos escuros e bengala, uma fazendo sinais de libras, três sem deficiência visível."
          />
        </div>
        <div className={secondaryBg}>
          <VideoHome />
        </div>
        <div className={primaryBg}>
          <ConnectionsHome />
        </div>
        <div className={secondaryBg}>
          <AboutHome />
        </div>
        <div className={primaryBg}>
          <CompanyHome />
        </div>
        <div className={secondaryBg}>
          <Organizations />
        </div>
        <div className={` ${secondaryBg}`}>
          <BlogHome />
        </div>
        {/* <div className={` w-full ${primaryBg}`}>
          <VoluntaryHome />
        </div>
        <div className={` ${secondaryBg}`}>
          <MeetUsHome />
        </div> */}
      </div>
    </>
  );
}

export default Home;
