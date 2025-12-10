import BlogCard from "@/components/BlogCard/BlogCard";
import portfolioData from "@/data/BlogData";

const Blog = () => {

	return (
		
			<div className="container">
				<section className="blog">
				{portfolioData.map((item) => (
					<BlogCard key={item.id} {...item} />
					))}
				</section>
			</div>
	);
}

export default Blog;
