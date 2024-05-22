'use client'

import { useEffect, useState } from "react";
import Title from "../title/Title";
import { HardSkill, hardSkillsList } from "../../data/skills"
import { IconContext } from "react-icons";
import './SkillListStyle.scss';
import SubTitle from "../title/SubTitle";

export default function SkillList () {
    
    const [hardSkills, setHardSkills] = useState<HardSkill[]>([])

	useEffect(() => setHardSkills(hardSkillsList), []);

    return (
        <div className=""> 
            <Title text="Compétences" />
            <div className="skills_container">
                <div className="skills">
                    <div className="hard_skills_container">
                        <SubTitle text="Hard skills"/>
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
                        <SubTitle text="Soft skills"/>
                        <div className="soft_skills_list">
                            TO DO
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}