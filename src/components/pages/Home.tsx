import ConnectionsHome from "../partials/Home/ConnectionsHome";
import VideoHome from "../partials/Home/VideoHome";
import CompanyHome from "../partials/Home/CompanyHome";
import AboutHome from "../partials/Home/AboutHome";
import VoluntaryHome from "../partials/Home/VoluntaryHome";
import MeetUsHome from "../partials/Home/MeetUsHome";
import BlogHome from "../partials/Home/BlogHome";
import Links from "../inputs/Link";

function Home() {
    const primaryBg =
        "bg-gradient-to-b from-[var(--primary-color)] to-[var(--gradient-color)] text-white";
    const secondaryBg = "bg-white text-[#1a1b1f]";
    return (
        <>
            <div className="w-full flex flex-col ">
                <div className={`flex lg:flex-row flex-col ${primaryBg} justify-center items-center md:py-16 py-12 lg:gap-4 md:gap-20 gap-12 md:pl-4 lg:ml-0`}>
                    <div className="flex flex-col text-start md:items-start items-center gap-6  lg:w-[38%] lg:px-0 md:px-12 px-6">
                        <h4 className="md:w-[70%]  lg:w-full font-semibold font-merriweather md:text-7xl text-5xl ">
                            Transforme vidas com sua história
                        </h4>
                        <p className="text-base leading-relaxed lg:w-full sm:w-full md:w-[80%]">
                            Faça parte da plataforma que conecta as experiências
                            de pessoas com deficiência, doenças raras e sua rede
                            de apoio para transformar vidas.
                        </p>
                        <Links
                            link="/login"
                            text="Quero compartilhar minha história"
                            classname="w-80 px-4 lg:self-start bg-white text-[var(--primary-color)] hover:text-[var(--gradient-color)]"
                        />
                    </div>
                    <img
                        className="w-auto px-4 hidden lg:block"
                        src="/images/people.png"
                        alt=""
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
                <div className={` ${secondaryBg}`}>
                    <BlogHome />
                </div>
                <div className={` w-full ${primaryBg}`}>
                    <VoluntaryHome />
                </div>
                <div className={` ${secondaryBg}`}>
                    <MeetUsHome />
                </div>
            </div>
        </>
    );
}

export default Home;
