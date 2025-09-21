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
		<div className="flex flex-col justify-center items-center">
			<header>
				<Title text="Projects" />
			</header>
			<div className="projects-list-container">
				<SubTitle text="School projects"/>
				<div className="projects-list mt-7">
					{schoolProjectsList?.map(({ slug, title, thumbnail, scholarYear, technosTools, skills }) => (
						<div key={`scholar-project-${title.toLowerCase().replaceAll(' ', '-')}`} className="project">
							<ProjectThumbnail
										title={title}
										thumbnail={thumbnail}
										scholarYear={scholarYear}
										technosTools={technosTools}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="projects-list-container">
				<SubTitle text="Personal projects"/>
				<div className="projects-list mt-7">
					{personnalProjectsList?.map(({slug, title, thumbnail, technosTools}) => (
						<div key={`project-${title.toLowerCase().replaceAll(' ', '-')}`} className="project">
							<ProjectThumbnail
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