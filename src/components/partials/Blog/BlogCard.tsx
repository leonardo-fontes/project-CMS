interface Post {
  link: string;
  photo: string;
  title: string;
  description: string;
}

function BlogCard() {
  const posts: Array<Post> = [
    {
      link: "https://www.acesseme.com/post/capacitismo-entenda-o-que-e-e-como-evitar-o-preconceito-disfarcado",
      photo: "/images/pessoas-bar.jpg",
      description:
        " Muitas vezes disfarçado de humor o Capacitismo é um tipo de discriminação contra pessoas com deficiência e impede a inclusão e adiversidade.",
      title:
        "Capacitismo: entenda o que é e como evitar o preconceito disfarçado.",
    },
  ];

  return (
    <div className="flex w-[21rem] p-3 flex-col rounded-xl hover:shadow-xl h-[50vh]">
      <a href={posts[0].link}>
        <img
          className="w-full object-cover aspect-video rounded-3xl"
          src={posts[0].photo}
          alt=""
        />
        <h3 className="text-2xl pt-2 font-semibold">{posts[0].title}</h3>
        <p className="text-[#9c9c9c] text-lg mt-4">{posts[0].description}</p>
      </a>
    </div>
  );
}

export default BlogCard;
