import { Link as LinkRouter } from "react-router-dom";

type Props = {
    link: string;
    text: string;
    classname: string;
};

function Link({ link, text, classname }: Props) {
    return (
        <LinkRouter
            className={`flex items-center justify-center rounded-3xl p-3 hover:shadow-lg transition duration-150 ${classname}`}
            to={link}
        >
            {text}
        </LinkRouter>
    );
}

export default Link;
