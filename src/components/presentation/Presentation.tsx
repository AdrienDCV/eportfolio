import HobbyCarousel from "@/components/presentation/HobbyCarousel";
import Title from "@/components/title/Title";
import SubTitle from "@/components/title/SubTitle";
import {getAge} from "@/helpers/common-helper";



export default function Presentation () {
    
    return (
        <div className="flex flex-col justify-center w-full">
            <Title text="Présentation"/>
            <div className="flex flex-col items-center justify-center mt-10">
                <h2 className="text-gray font-bold text-2xl">Qui-suis je ?</h2>
                <div className="max-w-[1050px] w-[350px] lg:w-full flex flex-col justify-center items-center bg-white rounded-lg mt-5 shadow-lg shadow-light-gray">
                    <p className="whitespace-pre-line p-10">
                        {
                            `
                            Je m'appelle Adrien DA COSTA VEIGA, j'ai ${getAge()} ans et je suis originaire de l'Oise (60), en Picardie.

                            Je suis passionné par le monde de l'informatique depuis mes 12 ans. C'est à cet âge que j'ai obtenu mon tout premier ordinateur personnel. Au moment de la sélection des composants
                            et du montage de cet ordinateurn, je me posais beaucoup de questions concernant le fonctionnement de ceux-ci. Comment est-ce que la carte mère fonctionne ? Comment est-ce que les
                            informations sont-elles stockées dans le disque dur ? Comment est-ce que le système sait à quel endroit aller chercher l'information ?
                            Telles étaient les questions qui m'ont poussé à m'intéresser à ce vaste domaine qu'est l'informatique.

                            On dit que "la curiosité est un vilain défaut". Cela est peut-être vrai, mais pour moi, il s'agit d'une grande qualité !
                            
                            De par ma curiosité et ma soiffe de savoir, j'en viens à m'intéresser à tout type de sujet. Sciences, technologies, littérature, culture et j'en passe. A cette curiosité s'ajoute une grande rigueur, appréciant que le travail soit fait et ce correctement. Une rigueur que je m'efforce d'appliquer également dans ma façon de programmer, cherchant à toujours convenir le plus possible aux conventions ainsi qu'à toujours chercher à optimiser l'écriture du code que je produis.  
                            
                            Je suis quelqu'un de persévérant, qui n'a pas peur de se remettre en question et qui cherche à s'améliorer en permanence.
                        `
                        }
                    </p>
                </div>
                <div className="mt-[50px] flex flex-col items-center">
                    <SubTitle text="Autres passions :" />
                    <div className='mt-5'>
                        <HobbyCarousel/>
                    </div>
                </div>
            </div>
        </div>
    )
}