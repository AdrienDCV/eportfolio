import SubSubTitle from "../title/SubSubTitle";
import SubTitle from "@/components/title/SubTitle";
import './FormationThumbnailStyle.scss';
import Image from "next/image";

type FormationThumbnailProps = {
    name: string,
    speciality: string,
    date: string,
    establishment: string,
    city: string,
    department: string,
    country: string,
    thumbnail: string

}

export default function FormationThumbnail ({
    name,
    speciality,
    date,
    establishment,
    city,
    department,
    country,
    thumbnail
}: Readonly<FormationThumbnailProps>) {

    return (
        <div className="formation">
            <div>
                <section className="infos">
                    <Image src={thumbnail} alt={`${establishment}-logo`} width={ 50 } height={ 50 }/>
                    <SubTitle text={ name } />
                    <SubSubTitle text={ speciality } />
                    <div className="flex flex-col ">
                        <span>{ date }</span>
                        <span>{ establishment }</span>
                        <span>{`${ city } - ${ department }`}</span>
                        <span>{ country }</span>
                    </div>
                </section>
            </div>
        </div>

    )

}