import Links from "../components/inputs/Link";
import Container from "../components/layout/Container";

interface Post {
  title: string;
  text?: string;
  image: string;
  data: string;
  id: number;
}

const posts: Array<Post> = [
  {
    title:
      "Capacitismo: entenda o que é e como evitar o preconceito disfarçado.",
    image: "/images/pessoas-bar.jpg",
    data: "SEPTEMBER 29, 2022",
    id: 0,
  },
];

function BlogPage() {
  return (
    <>
    <div className="w-full">
      <div className="flex flex-col mx-auto container text-[#333] ">
        <div className="lg:mx-40 mx-4 my-16">
          <h2 className="lg:text-5xl text-4xl w-[90%] lg:w-[55%] font-normal text-black leading-snug">
            {posts[0].title}
          </h2>
          <p className="text-sm w-[55%] tracking-widest mt-6 ">
            {posts[0].data}
          </p>
        </div>
        <img className="lg:w-[70%] lg:mx-40 lg:h-auto h-[60vh] object-cover" src={posts[0].image} alt="" />
        <div className="lg:mx-40 mx-4 flex items-center">
          <p className="lg:w-[70%] text-lg py-20">
            Muitas vezes disfarçado de humor o Capacitismo &nbsp;é um tipo de
            discriminação contra pessoas com deficiência e impede a inclusão e a
            diversidade.
            <br />
            <br />
            “O capacitismo é a ideia de que pessoas com deficiência são
            inferiores àquelas sem deficiência, tratadas como anormais,
            incapazes, em comparação com um referencial definido como perfeito”,
            diz Lau Patrón, 32, escritora e cofundadora da empresa PONTE
            Educação para a Diversidade.
            <br />
            <br />O capacitismo se foca no ataque &nbsp;à "capacidade" de uma
            pessoa , e está associado com “padrões” estabelecidos pela
            sociedade. Ao agir de forma capacitista, retiramos das pessoas com
            deficiência (PcD) a sua capacidade e aptidão de realizar tarefas e
            alcançar a independência, em virtude de sua deficiência. Como se
            isso fosse “natural “, causa e efeito.
            <br />
            <br />É urgente que o capacitismo acabe!
            <br />
            <br />
            Além de empatia, a informação é o principal fator para erradicar o
            capacitismo, como tantos outros preconceitos socialmente arraigados.
            <br />
            <br />
            De acordo com um estudo do Instituto Brasileiro de Geografia e
            Estatística (IBGE) 2019, 8,4% da população brasileira acima de dois
            anos possui algum tipo de deficiência, o que equivale a
            aproximadamente 17,3 milhões de pessoas.
            <br />
            Mesmo com uma parcela tão expressiva da população sendo PCD, &nbsp;o
            Capacitismo está historicamente disseminado. &nbsp;Esse preconceito
            se manifesta, principalmente, de maneira velada e se faz passar
            muitas vezes por elogios e palavras que reforçam conceitos como
            superação e adaptação. Essas atitudes camuflam o capacitismo, e
            tornam difícil a propagação de seu significado, o que faz com que
            ele se torne cada vez mais estrutural e inconsciente. Isso reflete a
            falta de preparação, informação e propagação sobre o assunto na
            sociedade, consequência da forma como as pessoas com deficiência, e
            as próprias deficiências, são encaradas.
            <br />
            <br />
            Então é preciso estar atento, informado,
            <br />
            consciente, principalmente em nossa linguagem, em elogias
            disfarçados de preconceito, humor que não tem a menor graça. Para
            eliminar do nosso dia a dia questões que só prejudicam a sociedade.
            <br />A mudança começa e está em cada um de nós.
          </p>
        </div>
        
      </div>
      <Container classname="bg-[#f8f8f8]">
          <div className="flex flex-col justify-center items-center w-full py-20 lg:py-40">
          <h2 className="font-bold md:text-5xl text-2xl text-black md:w-[80%] lg:w-[50%] text-center pb-12">Conheça a vida e história de pessoas com deficiência</h2>
          <Links
            text="Seja Acesse-me"
            link="/login"
            classname="bg-[var(--primary-color)] text-white text-sm w-[80%] md:w-[9.5rem]"
          />
          </div>
          
        </Container>
      </div>
    </>
  );
}

export default BlogPage;
