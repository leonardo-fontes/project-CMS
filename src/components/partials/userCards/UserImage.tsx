
interface User{
  photo?: string;
  handleClick:()=>void;
}

function UserImage({photo, handleClick}:User) {

  return (
    <div onClick={handleClick}
     className="md:w-32 aspect-video lg:px-6 py-2 flex items-center justify-center rounded-2xl hover:shadow-2xl">
              <img
                className="md:w-20 w-12 aspect-square object-cover rounded-full"
                src={`/images/${photo}`}
                alt=""
              />
            </div>
  );
}
export default UserImage;
