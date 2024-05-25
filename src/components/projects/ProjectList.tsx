'use client'
import { useEffect, useState } from "react";
import { schoolProjects, personnalProjects } from '../../data/projects';
import ProjectThumbnail from "./ProjectThumbnail";
import TechnoTools from "../../data/TechnoTool";
import Title from "../title/Title";
import './ProjectListStyle.scss';
import "../../app/globals.css";
import Subtitle from "@/components/title/Subtitle";

type Project = {
    title: string,
	slug: string,
    tags: string[],
    thumbnail: string,
    scholarYear: string,
    description: string,
    team: string,
    participation: string[],
    technosTools: TechnoTools[],
    skills: string[]
}

export default function ProjectList () {

    const [schoolProjectsList, setSchoolProjects] = useState<Project[]>([]);
    const [personnalProjectsList, setPersonnalProjects] = useState<Project[]>([]);

	useEffect(() => setSchoolProjects(schoolProjects), []);
	useEffect(() => setPersonnalProjects(personnalProjects), []);

	const classNames = `${(schoolProjects?.length && personnalProjects?.length) ? 'projects-list-container' : 'is-loading'}`;

	return (
		<div className="projects">
			<Title text="Réalisations" />
			<div className={classNames}>
				<Subtitle text="Projets scolaires"/>
				<div className="projects__list">
					{schoolProjectsList?.map(({slug, title, thumbnail, scholarYear, technosTools}) => (
						<div key={`scholar-project-${title.toLowerCase().replaceAll(' ', '-')}`} className="project">
							<ProjectThumbnail
										slug={slug}
										title={title}
										thumbnail={thumbnail}
										scholarYear={scholarYear}
										technosTools={technosTools}
							/>
						</div>
					))}
				</div>
			</div>
			<div>
				<Subtitle text="Projets peronnels"/>
				<div className="projects__list">
					{personnalProjectsList?.map(({slug, title, thumbnail, technosTools}) => (
						<div key={`project-${title.toLowerCase().replaceAll(' ', '-')}`} className="project">
							<ProjectThumbnail
										slug={slug}
										title={title}
										thumbnail={thumbnail}
										technosTools={technosTools}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);

}