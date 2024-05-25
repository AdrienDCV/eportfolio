import Image from "next/image";
import SubSubTitle from "../../components/title/SubSubTitle";
import SubTitle from "../title/Subtitle";

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

    function handleClick() {
        return;
    }

    return (
        <a href={'link'} onClick={handleClick}>
            <section className="infos">
                <img src={thumbnail} width={125} height={125} alt={`${establishment.toLowerCase().replace(' ', '')}-logo`}/>
                <SubTitle text={ name } />
                <SubSubTitle text={ speciality } />
                <div className="flex flex-col ">
                    <span>{ date }</span>
                    <span>{ establishment }</span>
                    <span>{`${ city } - ${ department }`}</span>
                    <span>{ country }</span>
                </div>
            </section>
        </a>

    )

}