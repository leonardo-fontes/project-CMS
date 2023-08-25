interface User {
  name?: string;
  title?: string;
  description?: string;
  photo?: string;
}

function UserCard({ name, title, description, photo }: User) {
  return (
    <>
      <div className="flex flex-col relative gap-6 lg:min-w-full max-w-[80vw] border-solid border-[3px] border-[var(--primary-color)] rounded-2xl lg:px-12 px-6 pb-12 md:pt-20 pt-12">
        <p className="lg:w-[30rem]">{description}</p>
        <p className="font-bold">{`${name} - ${title}`}</p>
        <img
          className="md:w-32 w-20 aspect-square absolute lg:bottom-[75%] md:bottom-[75%] bottom-[90%] lg:right-[40%] md:right-[40%] right-[38%] object-cover rounded-full border-solid border-[3px] border-[var(--primary-color)]"
          src={`/images/${photo}`}
          alt=""
        />
      </div>
    </>
  );
}

export default UserCard;
