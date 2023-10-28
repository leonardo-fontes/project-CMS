type Props = {
    text: string;
    classname: string;
    handleClick?: () => void;
    type?: "button" | "submit";
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

function Button({
    handleClick,
    text,
    classname,
    type = "button",
    ...props
}: Props) {
    return (
        <button
            {...props}
            type={type}
            onClick={handleClick}
            className={`rounded-3xl p-3 hover:shadow-lg transition duration-150 ${classname}`}
        >
            {text}
        </button>
    );
}

export default Button;
