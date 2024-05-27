import SubSubTitle from "@/components/title/SubSubTitle"
import SubTitle from "@/components/title/SubTitle"
import "./CareerThumbnailStyle.scss"

type CareerThumbnailProps = {
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

export default function CareerThumbnail ({
    title,
    type,
    society,
    date,
    duration,
    place,
    descirption,
    technos,
    logo
}: Readonly<CareerThumbnailProps>) {

    return (
        <div className="career-infos">
            <div>
                <img src={ logo } alt={`${society.replaceAll(' ', '-').toLocaleLowerCase()}-logo`} />
            </div>
            <div className="flex flex-col">
                <SubTitle text={`${type} - ${ title } `} />
                <SubSubTitle text={ society } />
                <SubSubTitle text={`${ date } - ${ duration }`} />
                <SubSubTitle text={ place } />
                <span>{ descirption }</span>
                <span>{ technos }</span>
            </div>
        </div>
    )

}