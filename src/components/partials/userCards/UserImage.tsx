interface User {
  photo?: string;
  border?: string;
  classname: string;
  onClick: () => void;
}

function UserImage({ photo, border, classname, onClick }: User) {
  return (
    <div onClick={onClick} className={`flex items-center justify-center `}>
      <img
        className={`${classname} transition-all duration-300 border-4 ${border} cursor-pointer md:absolute aspect-square object-cover rounded-full`}
        src={`/images/${photo}`}
        alt=""
      />
    </div>
  );
}
export default UserImage;
