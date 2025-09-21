
'use client'
import { useState } from "react";
import Title from "../../components/title/Title";
import data from "../../data/formations"
import FormationThumbnail from "./FormationThumbnail";
import React from "react";

type Formation = {
    name: string,
    speciality: string,
    date: string,
    establishment: string,
    city: string,
    department: string,
    country: string,
    thumbnail: string
}

export default function FormationList () {

    const [formations, setFormations] = useState<Formation[]>([]);
    
	React.useEffect(() => setFormations(data), [])

    return (
        <div className='flex flex-col justify-center items-center'>
            <header>
                <Title text="Academic background"/>
            </header>
            <div className="max-w-[750px] flex flex-col justify-center gap-[50px] mt-[50px]">
                {formations.map(({ name, speciality, date, establishment, city, department, country, thumbnail }) => (
                    <FormationThumbnail 
                        key={name} 
                        name={name} 
                        speciality={speciality} 
                        date={date} 
                        establishment={establishment} 
                        city={city} 
                        department={department} 
                        country={country} 
                        thumbnail={thumbnail} 
                    />
                ))}
            </div>
        </div>
    );

}

function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}
