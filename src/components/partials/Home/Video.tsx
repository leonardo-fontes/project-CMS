import Button from "../../inputs/Button";

function Video() {
  return (
    <>
      <div className="mx-auto container flex flex-col items-center my-24 justify-center">
        <h1 className="font-bold text-7xl w-4/5 ml-16 leading-normal ">
          A Acesse-me está impactando milhares de vidas
        </h1>
        <div className="flex container mx-auto justify-center mt-10 gap-20">
          <div className=" flex flex-col gap-6 w-[36%]">
            <p className="">
              A Acesse-me é uma plataforma onde pessoas com deficiência e
              doenças raras trocam informações. Além de estabelecer uma ponte
              com profissionais de saúde e especialistas.
            </p>
            <Button
              link="https://acesseme.com.br/login"
              text="Quero fazer parte"
              classname="bg-[var(--primary-color)] text-white text-sm w-[9.5rem]"
            />
          </div>
          <video controls className="w-1/3 aspect-video">
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

export default Video;
