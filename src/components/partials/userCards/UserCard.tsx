interface User {
  name?: string;
  title?: string;
  description?: string;
  photo?: string;
}

function UserCard({ name, title, description, photo }: User) {
  return (
    <>
      <div className="flex flex-col relative gap-6 min-w-full border-solid border-[3px] border-[var(--primary-color)] rounded-2xl px-12 pb-12 pt-20">
        <p className="w-[30rem]">{description}</p>
        <p className="font-bold">{`${name} - ${title}`}</p>
        <img
        className="w-32 aspect-square absolute bottom-[75%] right-[40%] object-cover rounded-full border-solid border-[3px] border-[var(--primary-color)]"
        src={`/images/${photo}`}
        alt=""
      />
      </div>
      
    </>
  );
}

export default UserCard;
