const Card = ({
    children,
    className,
}: {
    className?: string;
    children: JSX.Element | JSX.Element[];
}) => {
    return (
        <div
            className={`shadow-navbarPlataform bg-white rounded-2xl overflow-hidden ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;
