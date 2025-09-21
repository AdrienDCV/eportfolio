'use client'
import { useState, useEffect } from "react"
import data from "../../data/career"
import Title from "../title/Title"
import CareerThumbnail from "./CareerThumbnail"

type Career = {
    title: string,
    type: string,
    society: string,
    date: string,
    duration: string,
    place: string,
    descirption: string,
    logo: string
}

export default function CareerList () {

    const [career, setCareer] = useState<Career[]>([])

    useEffect(() => setCareer(data), [])

    return (
        <div className='flex flex-col justify-center items-center'>
            <header>
                <Title text="Professional experience"/>
            </header>
            <div className="max-w-[750px] flex flex-col justify-center gap-[50px] mt-[50px]">
                {career.map(({title, type, society, date, duration, place, descirption, logo}) => (
                    <CareerThumbnail
                        key={title.toLowerCase().replaceAll(' ', '-')}
                        title={title}
                        type={type}
                        society={society}
                        date={date}
                        duration={duration}
                        place={place}
                        description={descirption}
                        logo={logo}
                    />
                ))}
            </div>
        </div>
    )

}