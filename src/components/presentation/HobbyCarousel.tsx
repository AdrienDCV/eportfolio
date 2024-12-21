'use client'

import { useEffect, useState } from "react"
import SubSubTitle from "../title/SubSubTitle"
import hobbiesList from "@/data/hobbies"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
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
            setCurrentHobbyIdx(currentHobbyIdx + (hobbies.length - 1))
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
        <div className="max-w-[1200px] w-[350px] lg:w-full flex flex-row justify-center items-center">
            <div onClick={handleClickPreviousHobbyButton} className="lg:block hidden">
                <FiChevronLeft fontSize={75} />
            </div>
            <div className='w-full lg:h-[400px] flex flex-col justify-center items-center bg-white border-none rounded-lg shadow-lg shadow-light-gray'>
                <div className='text-center p-5'>
                    <SubSubTitle text={`${currentHobby?.title}`}/>
                </div>
                <div key={currentHobby?.title + '-div'}
                     className="flex flex-col lg:flex-row justify-center items-center p-5 gap-10">
                    <Image src={`${currentHobby?.thumbnail}`} alt={`${currentHobby?.title}`} width={400} height={400}
                           className="hobby-image max-w-full h-[200px]"/>
                    <p className='max-w-full h-[200px] overflow-scroll'>
                        {currentHobby?.content}
                    </p>
                    <div className="flex flex-row justify-center items-center lg:hidden">
                        <div onClick={handleClickPreviousHobbyButton} >
                            <FiChevronLeft fontSize={50}/>
                        </div>
                        <div onClick={handleClickNextHobbyButton} >
                            <FiChevronRight fontSize={50}/>
                        </div>
                    </div>
                </div>
                <span>
                    {currentHobbyIdx + 1} / {hobbies.length}
                </span>
            </div>
            <div onClick={handleClickNextHobbyButton} className="lg:block hidden">
                <FiChevronRight fontSize={75}/>
            </div>
        </div>
    )

}