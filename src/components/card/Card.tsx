import SubSubTitle from "@/components/title/SubSubTitle"
import SubTitle from "@/components/title/SubTitle"

type CardProps = {
    title: string,
    type: string,
    establishment: string,
    date: string,
    place: string,
    description?: string,
    image: string
}

export default function Card ({
                                  title,
                                  type,
                                  establishment,
                                  date,
                                  place,
                                  description,
                                  image
}: Readonly<CardProps>) {

    return (
        <div className="flex lg:flex-row flex-col lg:w-full w-[300px] justify-start items-center bg-white border-none rounded-lg gap-[50px] p-5 shadow-lg shadow-light-gray">
        <div>
                <img src={image} alt={`${establishment.replaceAll(' ', '-').toLocaleLowerCase()}-img`} width={100}/>
            </div>
            <div className="w-100 flex flex-col w-100">
                <SubTitle text={title}/>
                <SubTitle text={type}/>
                <SubSubTitle text={establishment}/>
                <span> {date} </span>
                <span> {place} </span>
                {description ? <p className='whitespace-pre-line'>{description}</p> : null}
            </div>
        </div>
    )

}