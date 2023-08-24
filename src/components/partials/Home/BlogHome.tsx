import BlogCard from "../Blog/BlogCard"

function BlogHome() {
    return (
        <>
        <div className="container mx-auto flex flex-col items-center justify-center py-28">
        <h3 className="text-7xl font-bold">Blog Acesse-me</h3>
        <div className="grid grid-cols-3 gap-20 mt-20">
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
        </div>
        </>
    )
}

export default BlogHome