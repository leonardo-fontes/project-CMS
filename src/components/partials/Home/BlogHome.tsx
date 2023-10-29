import BlogCard from "../Blog/BlogCard"

function BlogHome() {
    return (
        <>
        <div className="container mx-auto flex flex-col items-center justify-center py-8 lg:py-28">
        <h3 className="md:text-7xl text-3xl font-bold font-merriweather md:self-center self-start ml-6">Blog Acesse-me</h3>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 lg:gap-20 lg:mt-20 mt-6">
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
        </div>
        </>
    )
}

export default BlogHome