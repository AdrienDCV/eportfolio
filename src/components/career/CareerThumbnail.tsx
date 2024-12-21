import Card from "@/components/card/Card";

type CareerThumbnailProps = {
    title: string,
    type: string,
    society: string,
    date: string,
    duration: string,
    place: string,
    description: string ,
    logo: string
}

export default function CareerThumbnail ({
    title,
    type,
    society,
    date,
    place,
    description,
    logo
}: Readonly<CareerThumbnailProps>) {

    return (
        <Card
            title={ title }
            type={ type }
            establishment={ society }
            date={ date }
            place={ place }
            description={ description }
            image={ logo }
        />
    )

}