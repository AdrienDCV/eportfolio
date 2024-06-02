import Image from "next/image";
import { useEffect, useState } from "react";
import TechnoTools from "@/data/TechnoTool";
import { schoolProjects, personnalProjects } from '@/data/projects'
import { IconContext } from "react-icons";
import SubTitle from "@/components/title/SubTitle";

type Project = {
    title: string,
    slug: string | string[] | undefined,
    tags: string[],
    thumbnail: string,
    scholarYear: string,
    description: string,
    team: string,
    participation: string[],
    technosTools: TechnoTools[],
    skills: string[]
}

export default function ProjectDetail ({ slug }: Readonly<any>) {

    const [projects, setProjects] = useState<Project[]>([])
    const [project, setProject] = useState<Project>(schoolProjects[0])

    useEffect(() => {
        setProjects(schoolProjects)
        let currentProject = projects.find(project => { project.slug === slug })
        if (currentProject !== undefined)
            setProject(currentProject)
        else
            setProjects(personnalProjects)
            currentProject = projects.find(project => {
                project.slug === slug
            })
            if (currentProject !== undefined)
                setProject(currentProject)
    }, [])

    return (
        <div>
            <div>
                <Image src={ project.thumbnail } alt={ "" + project.slug } width={200} height={200} />
                <div>
                    <SubTitle text="" />
                    <div className="technotools-list">
                        {project?.technosTools?.map(technoTool => (
                            <span key={ technoTool.name }>
                                <IconContext.Provider value={{ size: "50" }}>
                                    { technoTool.logo }
                                </IconContext.Provider>
                            </span>
                        ))}
                    </div>
                    <div className="skills-list">
                        {project?.skills?.map(skill => (
                            <span key={ skill }>
                                { skill }
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="description">
                {project.description}
            </div>
        </div>
    )

}