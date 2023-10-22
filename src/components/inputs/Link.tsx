import { Link } from "react-router-dom";

type String = {
    link: string;
    text: string;
    classname: string
}

function Links ({link, text, classname} : String) {
    return (
        <Link className={`flex items-center justify-center rounded-3xl p-3 hover:shadow-lg transition duration-150 ${classname}`} to={link}>
            {text}
        </Link>
    )
}

export default Links