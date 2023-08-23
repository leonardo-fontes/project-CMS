interface Props {
  children: React.ReactNode;
  classname: string;
}

function Container({children, classname}: Props) {
  return (
    <div className={`flex w-full z-0 relative ${classname}`}>
      {children}
    </div>
  );
}

export default Container;
