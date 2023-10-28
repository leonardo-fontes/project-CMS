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
        <div className="col-span-1 flex flex-col p-3 rounded-xl hover:shadow-xl lg:h-[65vh] ">
            <a href={posts[0].link}>
                <img
                    className="lg:w-full lg:h-auto h-[55vh] md:h-[68vh] object-cover aspect-video rounded-3xl"
                    src={posts[0].photo}
                    alt=""
                />
                <h3 className="md:text-2xl text-xl pt-2 font-semibold">
                    {posts[0].title}
                </h3>
                <p className="text-[#9c9c9c] md:text-lg text-sm lg:mt-4">
                    {posts[0].description}
                </p>
            </a>
        </div>
    );
}

export default BlogCard;
