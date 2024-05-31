'use client'

import { useEffect, useState } from "react"
import SubTitle from "../title/SubTitle"
import hobbiesList from "@/data/hobbies"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import './HobbyCarousel.scss'
import Image from "next/image"

type Hobby = {
    title: string,
    thumbnail: string,
    content: string
}

export default function HobbyCarousel () {

    const [hobbies, setHobbies] = useState<Hobby[]>([])
    const [currentHobbyIdx, setCurrentHobbyIdx] = useState<number>(0)
    const [currentHobby, setCurrentHobby] = useState<Hobby | null>(null)

    useEffect(() => {
        setHobbies(hobbiesList)
        setCurrentHobby(hobbies[currentHobbyIdx])
    })

    function handleClickPreviousHobbyButton() {
        if (currentHobbyIdx === 0) {
            setCurrentHobbyIdx(currentHobbyIdx +( hobbies.length - 1))
        } else {
            setCurrentHobbyIdx(currentHobbyIdx - 1)
        }
        setCurrentHobby(hobbies[currentHobbyIdx])

    }

    function handleClickNextHobbyButton() {
        setCurrentHobbyIdx((currentHobbyIdx + 1) % hobbies.length)
        setCurrentHobby(hobbies[currentHobbyIdx])
    }

    return (
        <div className="container">
            <div onClick={handleClickPreviousHobbyButton} className="previous-hobby-button">
                <FiChevronLeft fontSize={100}/>
            </div>
            <div className="hobby-carousel">
                    <SubTitle text={ currentHobby?.title } />
                    <div key='' className="hobby-infos">
                        <Image src={`${  currentHobby?.thumbnail }`} alt={`${ currentHobby?.title }`} width={200} height={200}/>
                        <p className="whitespace-pre-line items-centersh-[500px]">
                            { currentHobby?.content }
                        </p>
                    </div>
            </div>
            <div onClick={handleClickNextHobbyButton} className="next-hobby-button">
                <FiChevronRight fontSize={100}/>
            </div>
        </div>
    )

}