interface Props {
    text: string;
    classname: string;
    handleClick?: () => void;
    type?: "button" | "submit";
}

function Button({ handleClick, text, classname, type = "button" }: Props) {
    return (
        <button
            type={type}
            onClick={handleClick}
            className={`rounded-3xl p-3 hover:shadow-lg transition duration-150 ${classname}`}
        >
            {text}
        </button>
    );
}

export default Button;
