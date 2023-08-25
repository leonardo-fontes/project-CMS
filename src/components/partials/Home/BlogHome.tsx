import BlogCard from "../Blog/BlogCard"

function BlogHome() {
    return (
        <>
        <div className="container mx-auto flex flex-col items-center justify-center py-20 lg:py-28">
        <h3 className="md:text-7xl text-3xl font-bold">Blog Acesse-me</h3>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-20 lg:mt-20 mt-10">
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
        </div>
        </>
    )
}

export default BlogHome