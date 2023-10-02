import Button from "../../inputs/Button";

function VideoHome() {
  return (
    <>
      <div className="mx-auto container flex flex-col items-center text-start md:my-24 my-12 justify-center">
        <h1 className="font-semibold md:text-5xl lg:text-6xl font-merriweather text-3xl w-5/5 lg:w-9/12 md:pb-0 pb-4 lg:pl-0 pl-4 leading-normal">
          A Acesse-me está impactando milhares de vidas
        </h1>
        <div className="flex lg:flex-row flex-col lg:container lg:mx-auto justify-center md:items-start items-center mt-4 md:mt-10 md:gap-20 gap-12">
          <div className=" flex flex-col gap-8 lg:w-[36%] w-[90%]">
            <p className="sm:pl-0 lg:pl-0 md:pl-6">
              A Acesse-me é uma plataforma onde pessoas com deficiência e
              doenças raras trocam informações. Além de estabelecer uma ponte
              com profissionais de saúde e especialistas.
            </p>
            <Button
              link="/login"
              text="Quero fazer parte"
              classname="bg-[var(--primary-color)] md:self-start sm:ml-0 lg:ml-0 md:ml-6 self-center text-white text-sm w-[90vw] md:w-[9.5rem]"
            />
          </div>
          <video controls className="lg:w-1/3 w-[94vw] aspect-video">
            <source
              src="https://www.youtube.com/watch?v=f4GILQeV3o8&t=871s&ab_channel=%EC%A0%88%EC%84%B8%EB%AF%B8%EB%85%80"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </>
  );
}

export default VideoHome;
