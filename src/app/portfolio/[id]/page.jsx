"use client";
import ProjectCard from '@/components/RestoranCard/RestoranCard';
import portfolioData from '@/data/BlogData';
import { notFound, useParams } from 'next/navigation';

const Project = () => {
	const { id } = useParams();
	const project = portfolioData.find((project) => project.id === id);

	if (!project) {
		notFound();
	}

	return (
		<section className="content">
			<ProjectCard {...project} />
		</section>
	);
};

export default Project;
