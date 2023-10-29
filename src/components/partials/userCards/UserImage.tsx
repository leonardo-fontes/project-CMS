interface User {
  photo?: string;
  border?: string;
  classname: string;
  handleClick: () => void;
}

function UserImage({ photo, border, classname, handleClick }: User) {
  return (
    <div onClick={handleClick} className={`flex items-center justify-center `}>
      <img
        className={`${classname} transition-all duration-300 border-4 ${border} cursor-pointer md:absolute aspect-square object-cover rounded-full`}
        src={`/images/${photo}`}
        alt=""
      />
    </div>
  );
}
export default UserImage;
