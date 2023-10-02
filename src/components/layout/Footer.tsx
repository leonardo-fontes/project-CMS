import Container from "./Container";
import SocialIcons from "../inputs/SocialIcons";
import { Link, useLocation } from "react-router-dom";
function Footer() {
    const pages = ["login", "register"];
    const { pathname } = useLocation();
    return !pages.filter((page) => pathname.includes(page)).length ? (
        <Container classname="bg-[var(--primary-color)] bg-gradient-to-b from-[var(--primary-color)] to-[var(--gradient-color)] text-white">
            <div className="container mx-auto flex lg:flex-row flex-col lg:items-start items-center py-16 justify-evenly">
                <div className="flex flex-col lg:items-start items-center lg:mb-0 mb-12">
                    <img
                        className="object-contain w-16 mb-4"
                        src="/icons/logo.png"
                        alt=""
                    />
                    <p className="">Acesse-me © 2022</p>
                    <p>Todos os direitos reservados</p>
                </div>
                <div className="flex flex-col md:gap-8 gap-4 lg:mb-0 mb-12">
                    <h4 className="font-semibold text-2xl">Acesse-me</h4>
                    <ul className="flex flex-col md:gap-3 gap-2">
                        <li>
                        <Link className="hover:underline" to="/about">
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <a
                                className="hover:underline"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSeO6uJBKhVrm7aQHnvXUlxeocIXRovzkLQ3ZHpMX-pQt-6gYA/viewform?vc=0&c=0&w=1&flr=0"
                            >
                                Programa voluntariado
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:underline"
                                href="mailto:contato@acesseme.com"
                            >
                                contato@acesseme.com
                            </a>
                        </li>
                        <li>
                            <Link className="hover:underline" to="/terms">
                                Termos e condições
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:underline"
                                to="/privacy-policies"
                            >
                                Políticas de privacidade
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6 md:gap-8">
                    <h4 className="font-semibold text-2xl">Redes sociais</h4>
                    <SocialIcons classname="flex-col" />
                </div>
            </div>
        </Container>
    ) : (
        <></>
    );
}

export default Footer;
