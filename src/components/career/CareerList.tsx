'use client'
import { useState, useEffect } from "react"
import data from "../../data/career"
import Title from "../title/Title"
import CareerThumbnail from "./CareerThumbnail"
import "./CareerListStyle.scss"

type Career = {
    title: string,
    type: string,
    society: string,
    date: string,
    duration: string,
    place: string,
    descirption: string,
    technos: string,
    logo: string
}

export default function CareerList () {

    const [career, setCareer] = useState<Career[]>([])

    useEffect(() => setCareer(data), [])
    
    return (
        <div>
            <header>
                <Title text="Expériences professionnelles" />
            </header>
            <div className="career-list">
                {career.map(({ title, type, society, date, duration, place, descirption, technos, logo }) => (
                    <CareerThumbnail
                        key={title.toLowerCase().replaceAll(' ', '-')} 
                        title={title}
                        type={type}
                        society={society}
                        date={date}
                        duration={duration}
                        place={place}
                        descirption={descirption}
                        technos={technos}
                        logo={logo}
                    />
                ))}
            </div>
        </div>
    )

}