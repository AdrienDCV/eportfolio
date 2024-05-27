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
    logo
}: Readonly<CareerThumbnailProps>) {

    return (
        <div className="career-infos">
            <div>
                <img src={ logo } alt={`${society.replaceAll(' ', '-').toLocaleLowerCase()}-logo`} />
            </div>
            <div>
                <SubTitle text={`${type} - ${ title } `} />
                <SubSubTitle text={ society } />
                <SubSubTitle text={`${ date } - ${ duration }`} />
                <SubSubTitle text={ place } />
                <p>{ descirption }</p>
            </div>
        </div>
    )

}