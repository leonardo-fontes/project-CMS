import Links from "../../inputs/Link";

function VideoHome() {
  function getYoutubeUrl(videoId: string, startTime: number) {
    return `http://www.youtube.com/embed/${videoId}?start=${startTime}`;
  }

  const videoId = "RJSF3EOO_Uc";
  const startTime = 0;
  const url = getYoutubeUrl(videoId, startTime);

  return (
    <>
      <div className="mx-auto container flex flex-col justify-center items-center md:my-24 my-12">
        <h1 className="font-semibold md:text-5xl self-start ml-48 lg:text-6xl font-merriweather text-3xl leading-normal">
          A Acesse-me está <br />
          impactando milhares <br /> de vidas
        </h1>
        <div className="flex lg:flex-row flex-col gap-36 pt-6">
          <div className=" flex flex-col gap-16 ">
            <p className="">
              A Acesse-me é uma plataforma onde pessoas com <br />
              deficiência e doenças raras trocam informações. Além de <br />
              estabelecer uma ponte com médicos e especialistas.
            </p>
            <Links
              link="/login"
              text="Quero fazer parte"
              classname="bg-[var(--primary-color)] md:self-start sm:ml-0 lg:ml-0 md:ml-6 self-center text-white text-sm w-[90vw] md:w-[164px]"
            />
          </div>
          <div id="player"></div>
          <iframe
            className="rounded-2xl"
            width="441"
            height="248"
            src={url}
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default VideoHome;
