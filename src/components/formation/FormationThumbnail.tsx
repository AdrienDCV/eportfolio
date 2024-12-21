import Card from "@/components/card/Card";

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
        <Card
            title={ name }
            type={ speciality }
            establishment={ establishment }
            date={ date }
            place={ city + " | " + department + " | " + country  }
            image={ thumbnail }
        />
    )

}