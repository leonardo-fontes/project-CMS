interface Props {
    link:string;
    text:string;
    classname:string;
}

function Button({link, text, classname}:Props) {
  return (
    <button className={`rounded-3xl p-3 hover:shadow-lg transition duration-150 ${classname}`}>
      <a href={link}>{text}</a>
    </button>
  );
}

export default Button;
