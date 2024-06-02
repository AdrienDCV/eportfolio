'use client'
import { useEffect, useState } from "react";
import { schoolProjects, personnalProjects } from '../../data/projects';
import ProjectThumbnail from "./ProjectThumbnail";
import TechnoTools from "../../data/TechnoTool";
import Title from "../title/Title";
import './ProjectListStyle.scss';
import "../../app/globals.css";
import SubTitle from "@/components/title/SubTitle";

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
    skills?: string[]
}

export default function ProjectList () {

    const [schoolProjectsList, setSchoolProjects] = useState<Project[]>([]);
    const [personnalProjectsList, setPersonnalProjects] = useState<Project[]>([]);

	useEffect(() => setSchoolProjects(schoolProjects), []);
	useEffect(() => setPersonnalProjects(personnalProjects), []);

	return (
		<div className="projects">
			<Title text="Réalisations" />
			<div className="projects-list-container">
				<SubTitle text="Projets scolaires"/>
				<div className="projects-list">
					{schoolProjectsList?.map(({ slug, title, thumbnail, scholarYear, description, technosTools, skills }) => (
						<div key={`scholar-project-${title.toLowerCase().replaceAll(' ', '-')}`} className="project">
							<ProjectThumbnail
										slug={slug}
										title={title}
										thumbnail={thumbnail}
										scholarYear={scholarYear}
										description={description}
										technosTools={technosTools}
										skills={skills}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="projects-list-container">
				<SubTitle text="Projets peronnels"/>
				<div className="projects-list">
					{personnalProjectsList?.map(({slug, title, thumbnail, description, technosTools}) => (
						<div key={`project-${title.toLowerCase().replaceAll(' ', '-')}`} className="project">
							<ProjectThumbnail
								slug={slug}
								title={title}
								thumbnail={thumbnail}
								description={description}
								technosTools={technosTools} 
								skills={undefined}							
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);

}