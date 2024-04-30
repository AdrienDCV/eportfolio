
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
        <div className="container">
            <header>
                <Title text="Formations" />
            </header>
            <div>
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
