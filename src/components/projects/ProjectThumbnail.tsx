import Link from "next/link";
import TechnoTools from "../../data/TechnoTool";
import Image from "next/image";
import './ProjectThumbnailStyle.scss'

type ProjectThumbnailProps = {
    title: string,
    slug: string,
    thumbnail: string,
    scholarYear?: string,
    technosTools: TechnoTools[],
}

export default function ProjectThumbnail ({
    title,
    slug,
    thumbnail,
    scholarYear,
    technosTools,
}: Readonly<ProjectThumbnailProps>) {

    return (
            <div className="project-thumbnail__container">
                <div className="project-thumbnail">
                    <Link href={`/projects/${ slug}`}>
                        <div className="project-thumbnail__image">
                            <img
                                src={ thumbnail }
                                alt={ title }
                            />
                        </div>
                        <div className="project-thumbnail__infos">
                            <span>{ title }</span>
                            {scholarYear !== null && <span>{ scholarYear }</span>}
                            <div className="project-thumbnail__technosTools">
                                {technosTools?.map(technoTool => (
                                    <span key={ technoTool.name }>{ technoTool.logo }</span>
                                ))}
                            </div>
                        </div> 
                    </Link>
                </div>
            </div>

	);

}