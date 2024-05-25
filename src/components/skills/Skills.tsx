'use client'

import { useEffect, useState } from "react";
import Title from "../title/Title";
import { HardSkill, hardSkillsList, softSkills } from "../../data/skills";
import './SkillsStyle.scss';
import languages from "../../data/languages";
import Subtitle from "@/components/title/Subtitle";


export default function SkillList () {
    
    const [hardSkills, setHardSkills] = useState<HardSkill[]>([])

	useEffect(() => setHardSkills(hardSkillsList), []);

    return (
        <div> 
            <Title text="Compétences" />
            <div className="skills_container">
                <div className="skills">
                    <div className="hard_skills_container">
                        <Subtitle text="Hard skills"/>
                        <div className="hard_skills_list">
                            {hardSkills?.map(({ name, logo }) => (
                                <div className="hard_skill"  key={`hard-skill-${name.toLowerCase().replaceAll(' ', '-')}`}>
                                    <div className="thumbnail">
                                        { logo }
                                    </div>
                                    <span className="title">{ name }</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:block hidden border-l-4 border-gray mt-5 w-4 h-[250px]"></div>
                    <div className="block md:hidden border-t-4 border-gray mt-5 w-[85%]"></div>
                    
                    <div className="soft_skills_container">
                        <Subtitle text="Soft skills"/>
                        <div className="soft_skills_list">
                            {softSkills?.map(softSkill => (
                                <div className="soft_skill"  key={ softSkill }>
                                    { softSkill }
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="languages_container">
                <Subtitle text="Langues" />
                <div className="languages_list">
                    {languages?.map(({ language, level, image }) => (
                        <div key={language} className="language">
                            <img src={image} alt={language} className="language_img"/>
                            <div className="language_infos">
                                <span>{ language }</span>
                                <span>{ level }</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}