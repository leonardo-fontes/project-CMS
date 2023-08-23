import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
interface Props {
  classname: string;
}

function SocialIcons({ classname }: Props) {
  return (
    <div className={`flex`}>
      <ul className={`flex justify-center gap-6 ${classname}`}>
        <li className="flex items-center gap-2">
          <a className="flex gap-2 hover:underline" href="https://www.facebook.com/acesseme">
            <ImFacebook2 size={25} /> Facebook
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a
            className="flex gap-2 hover:underline"
            href="https://www.instagram.com/acesse_me/"
          >
            <FaSquareInstagram size={25} /> Instagram
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a
            className="flex gap-2 hover:underline"
            href="https://www.linkedin.com/company/acesse-me/"
          >
            <BsLinkedin size={25} /> LinkedIn
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a className="flex gap-2 hover:underline" href="https://www.tiktok.com/@acesse_me">
            <FaTiktok size={25} /> Tik Tok
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialIcons;
