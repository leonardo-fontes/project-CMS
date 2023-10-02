interface Props {
  link: string;
  text: string;
  classname: string;
  handleClick?: () => void;

}

function Button({ handleClick, link, text, classname }: Props) {
  return (
    <button type="button"
      onClick={handleClick}
      className={`rounded-3xl p-3 hover:shadow-lg transition duration-150 ${classname}`}>
      <a href={link}>{text}</a>
    </button>
  );
}

export default Button;
