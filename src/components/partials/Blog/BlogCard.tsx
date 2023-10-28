interface Post {
    link: string;
    photo: string;
    title: string;
    description: string;
}

function BlogCard() {
    const posts: Array<Post> = [
        {
            link: "/blog-example",
            photo: "/images/pessoas-bar.jpg",
            description:
                " Muitas vezes disfarçado de humor o Capacitismo é um tipo de discriminação contra pessoas com deficiência e impede a inclusão e adiversidade.",
            title: "Capacitismo: entenda o que é e como evitar o preconceito disfarçado.",
        },
    ];

    return (
        <div className="col-span-1 flex flex-col p-3 rounded-xl hover:shadow-xl lg:w-[320px] ">
            <a href={posts[0].link}>
                <img
                    className="lg:w-[320px] lg:h-auto h-[175px] md:h-[213px] object-cover aspect-video rounded-3xl"
                    src={posts[0].photo}
                    alt=""
                />
                <h3 className="md:text-2xl text-2xl pt-2 text-[#6F3DFF] font-semibold">
                    {posts[0].title}
                </h3>
                <p className="text-[#484848] md:text-md text-sm lg:mt-4">
                    {posts[0].description}
                </p>
            </a>
        </div>
    );
}

export default BlogCard;
