'use client'

import { useEffect, useState } from "react";
import Title from "../title/Title";
import { HardSkill, hardSkillsList, softSkills } from "@/data/skills";
import languages from "../../data/languages";
import SubTitle from "@/components/title/SubTitle";


export default function SkillList () {

    const [hardSkills, setHardSkills] = useState<HardSkill[]>([])

    useEffect(() => setHardSkills(hardSkillsList), []);

    return (
        <div className="flex flex-col justify-center items-center">

            <Title text="Skills"/>

            <div className='max-w-[1200px] w-[350px] lg:w-full flex flex-col lg:flex-row justify-center items-center'>
                <div className="w-full flex flex-col items-center justify-center mt-10">
                    <SubTitle text="Hard skills"/>
                    <div
                        className="max-w-[1050px] w-[350px] lg:w-full flex flex-row flex-wrap justify-center items-center bg-white rounded-lg mt-5 gap-5 p-5 shadow-lg shadow-light-gray">
                        {hardSkills?.map(({name, logo}) => (
                            <div className="flex flex-col justify-center items-center"
                                 key={`hard-skill-${name.toLowerCase().replaceAll(' ', '-')}`}>
                                <div className="">
                                    {logo}
                                </div>
                                <span className="">{name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full flex flex-col items-center justify-center mt-10">
                    <SubTitle text="Soft skills"/>
                    <div
                        className="max-w-[700px] lg:w-full flex flex-row flex-wrap justify-center items-center mt-5 gap-5">
                        {softSkills?.map(softSkill => (
                            <div
                                className="w-[150px] h-[150px] flex justify-center items-center text-center bg-white rounded-lg shadow-lg shadow-light-gray"
                                key={softSkill}>
                                {softSkill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-[700px] w-full flex flex-col items-center justify-center mt-10">
                <SubTitle text="Languages"/>
                <div
                    className="lg:w-full flex flex-row flex-wrap justify-center items-center mt-5 gap-5 p-5">
                    {languages?.map(({language, level, image}) => (
                        <div key={language}
                             className="w-[150px] h-[150px] flex flex-col justify-center items-center text-center bg-white rounded-lg shadow-lg shadow-light-gray">
                            <img src={image} alt={language} className="language_img"/>
                            <span>{language}</span>
                            <span>{level}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )

}