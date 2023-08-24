
import Container from "./Container";
import SocialIcons from "../inputs/SocialIcons";
function Footer() {
  return (
    <>
      <Container classname="bg-[var(--primary-color)] bg-gradient-to-b from-[var(--primary-color)] to-[var(--gradient-color)] text-white">
        <div className="container mx-auto flex py-16 justify-evenly">
        <div className="flex flex-col">
          <img className="object-contain w-16 mb-4" src="/icons/logo.png" alt="" />
          <p className="">Acesse-me © 2022</p>
          <p>Todos os direitos reservados</p>
        </div>
        <div className="flex flex-col gap-8">
          <h4 className="font-semibold text-2xl">Acesse-me</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a className="hover:underline" href="https://www.acesseme.com/about">Sobre</a>
            </li>
            <li>
              <a className="hover:underline" href="https://docs.google.com/forms/d/e/1FAIpQLSeO6uJBKhVrm7aQHnvXUlxeocIXRovzkLQ3ZHpMX-pQt-6gYA/viewform?vc=0&c=0&w=1&flr=0">
                Programa voluntariado
              </a>
            </li>
            <li>
              <a className="hover:underline" href="mailto:contato@acesseme.com">contato@acesseme.com</a>
            </li>
            <li>
              <a className="hover:underline" href="https://www.acesseme.com/terms">Termos e condições</a>
            </li>
            <li>
              <a className="hover:underline" href="https://www.acesseme.com/privacy-policies">
                Políticas de privacidade
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-8">
            <h4 className="font-semibold text-2xl">Redes sociais</h4>
            <SocialIcons classname="flex-col" />
        </div>
        </div>
        
      </Container>
    </>
  );
}

export default Footer;
