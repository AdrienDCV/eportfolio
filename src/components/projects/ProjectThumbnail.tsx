import Link from "next/link";
import TechnoTools from "../../data/TechnoTool";
import './ProjectThumbnailStyle.scss'
import { IconContext } from "react-icons";
import Image from "next/image";

type ProjectThumbnailProps = {
    title: string,
    slug: string,
    description: string,
    thumbnail: string,
    scholarYear?: string,
    technosTools: TechnoTools[],
    skills: string[] | undefined
}

export default function ProjectThumbnail ({
    title,
    slug,
    description,
    thumbnail,
    scholarYear,
    technosTools,
    skills
}: Readonly<ProjectThumbnailProps>) {

    return (
            <div className="project-thumbnail-container">
                <div className="project-thumbnail">
                    <div className="project-thumbnail-image">
                        <a href="">
                            <Image
                                src={ thumbnail }
                                alt={ title }
                                width={ 200 }
                                height={ 200 }
                                className="project-image"
                            />
                        </a>
                    </div>
                    <div className="project-infos">
                        <span className="font-bold">{ title }</span>
                        {scholarYear !== null && <span>{ scholarYear }</span>}
                        <p className="project-description">{ description }</p>
                        <div className="project-technostools-list">
                            {technosTools?.map(technoTool => (
                                <span key={ technoTool.name } className="project-technostools">
                                    { technoTool.logo }
                                </span>
                            ))}
                        </div>
                        <div className="project-skills">
                            <span>Compétences développées:</span>
                            <ul className="ml-[20px]">
                                {skills?.map(skill => (
                                    <li key={ skill }>{ skill }</li>
                                ))}
                            </ul>
                        </div>
                    </div> 
                </div>
            </div>

	);

}