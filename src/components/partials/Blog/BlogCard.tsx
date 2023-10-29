interface Post {
    link: string;
    photo: string;
    title: string;
    description: string;
    date: string;
    tag: string;
}

function BlogCard() {
    const posts: Array<Post> = [
        {
            link: "/blog-example",
            photo: "/images/pessoas-bar.jpg",
            description:
                " Muitas vezes disfarçado de humor o Capacitismo é um tipo de discriminação contra pessoas com deficiência e impede a inclusão e adiversidade.",
            title: "Capacitismo: entenda o que é e como evitar o preconceito disfarçado.",
            date: "12/10/2023 - Elias",
            tag: "Comunidade"
        },
    ];

    return (
        <div className="col-span-1 flex flex-col items-center justify-center p-3 rounded-xl hover:shadow-xl lg:w-[320px]">
            <a className="flex flex-col md:w-full w-[80%] relative justify-center items-center" href={posts[0].link}>
                <img
                    className="lg:w-[320px] lg:h-auto h-[175px] md:h-[213px] object-cover aspect-video rounded-3xl"
                    src={posts[0].photo}
                    alt=""
                />
                <p className="absolute md:hidden top-3 left-3 text-black text-xs p-1 px-3 bg-[#FFF] rounded-3xl">{posts[0].tag}</p>
                <h3 className="md:text-2xl text-lg pt-2 text-[#6F3DFF] font-semibold">
                    {posts[0].title}
                </h3>
                <p className="text-[#484848] md:text-md text-sm lg:mt-4">
                    {posts[0].description}
                </p>
                <p className="md:hidden flex self-start mt-1 text-[#6F3DFF] font-bold text-sm">
                    {posts[0].date}
                </p>
            </a>
        </div>
    );
}

export default BlogCard;
