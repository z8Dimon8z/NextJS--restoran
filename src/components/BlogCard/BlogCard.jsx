import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({id, date, title, description, image }) => {
	return (
		<article className="post">
			<Link
				href={`/portfolio/${id}`}
				className="post__link"
				aria-label="Подробнее о проекте"
			></Link>

			<div className="post__image-wrapper">
						<Image
					src={image}
					alt="Project cover"
					width={280} height={210}
					priority
				/>
			</div>

			<div className="post__content">
						<p className="post__date">{date}</p>
						<h1 className="post__title">{title}</h1>
						<p className="post__text">
							{description}
						</p>
			</div>

		</article>
	);
};

export default BlogCard;
