import TechnoTools from "../../data/TechnoTool";
import './ProjectThumbnailStyle.scss'
import Image from "next/image";

type ProjectThumbnailProps = {
    title: string,
    thumbnail: string,
    scholarYear?: string,
    technosTools: TechnoTools[],
}

export default function ProjectThumbnail ({
    title,
    thumbnail,
    scholarYear,
    technosTools,
}: Readonly<ProjectThumbnailProps>) {

    return (
            <section className="project-thumbnail-container">
                <div className="project-thumbnail">
                    <div className="project-thumbnail-image">
                        <Image
                            src={ thumbnail }
                            alt={ title }
                            width={ 100 }
                            height={ 100 }
                            className="project-image"
                        />
                    </div>
                    <div className="project-infos">
                        <span className="project-title">{ title }</span>
                        {scholarYear !== null && <span className="project-year">{ scholarYear }</span>}
                        <div className="project-technostools-list">
                            {technosTools?.map(technoTool => (
                                <span key={ technoTool.name } className="project-technostools">
                                    { technoTool.logo }
                                </span>
                            ))}
                        </div>
                    </div> 
                </div>
            </section>

	);

}