import Container from "./Container";
import SocialIcons from "../inputs/SocialIcons";
import { Link, useLocation } from "react-router-dom";
function Footer() {
  const pages = ["login", "register", "plataform", "empresa"];
  const { pathname } = useLocation();
  return !pages.filter((page) => pathname.includes(page)).length ? (
    <Container classname="bg-[var(--primary-color)] bg-gradient-to-b relative from-[var(--primary-color)] to-[var(--gradient-color)]  text-white">
      <div className="container mx-auto flex lg:flex-row flex-col items-start pb-8 pt-16 justify-evenly">
        <img
          className="absolute hidden md:block bottom-0 left-0"
          src="/images/footer.webp"
          alt=""
        />
        <div className="flex flex-col lg:items-start md:self-start self-center lg:mb-0 mb-12">
          <img
            className="object-contain w-16 mb-4"
            src="/icons/logo.png"
            alt=""
          />
          <p className="md:block hidden">Acesse-me © 2022</p>
          <p className="md:block hidden">Todos os direitos reservados</p>
        </div>
        <div className="flex flex-col md:gap-8 gap-8 md:ml-0 ml-8 lg:mb-0 mb-12">
          <h4 className="font-semibold text-2xl">Acesse-me</h4>
          <ul className="flex flex-col md:gap-3 gap-8">
            <li>
              <Link className="hover:underline" to="/about">
                Sobre
              </Link>
            </li>
            {/* <li>
              <a
                className="hover:underline"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeO6uJBKhVrm7aQHnvXUlxeocIXRovzkLQ3ZHpMX-pQt-6gYA/viewform?vc=0&c=0&w=1&flr=0"
              >
                Programa voluntariado
              </a>
            </li> */}
            <li className="hidden md:block">
              <a className="hover:underline" href="mailto:contato@acesseme.com">
                contato@acesseme.com
              </a>
            </li>
            <li>
              <Link className="hover:underline" to="/terms">
                Termos e condições
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/privacy-policies">
                Políticas de privacidade
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-8 md:ml-0 ml-8">
          <h4 className="font-semibold text-2xl">Redes sociais</h4>
          <SocialIcons classname="flex-col gap-8" />
        </div>
        <div className="md:hidden border-t-[1px] mt-8 py-4 font-semibold border-white w-full flex flex-col pl-6">
          <p className="">Acesse-me © 2022</p>
          <p className="">Todos os direitos reservados</p>
        </div>
      </div>
    </Container>
  ) : (
    <></>
  );
}

export default Footer;
