import Image from "next/image";
import photo from '../../public/images/pptmmfadrien.png'
import Title from "@/components/title/Title";

export default function page () {
   
    const getAge = () => {
        return new Date('200305-25')
    }

    return (
        <div>
            <Title text="Bienvenue !" />
            <div className="flex flex-col md:flex-row md:p-10 md:mt-10 justify-center items-center">
                <Image
                    src={ photo }
                    alt={ 'photo' }
                    width={ 300 }
                    height={ 300 }
                />
                <div className="md:block hidden border-l-4 border-gray mt-5 w-4 h-[250px] ml-20"></div>
                <div className="block md:hidden border-t-4 border-gray mt-5 w-[85%]"></div>
                <p className="p-6 md:ml-20 md:w-[750px]">
                    Enchanté,
                    <br />  
                    Je me nomme <span className='font-bold'>Adrien DA COSTA VEIGA</span>, 21 ans.<br />
                    <br />
                    <span className="font-bold">Passionné</span> depuis maintenant quelques années par <span className="font-bold">le monde de l’informatique</span>,
                    j’ai décidé de <span className="font-bold">faire de cette passion mon métier</span>.<br />
                    <br />
                    C’est dans cette optique que j’ai entrepris un <span className="font-bold">Bachelor Universitaire de Technologie (BUT) en Informatique</span> à
                    l’Institut Universitaire de Technologie de Lille site de Villeneuve d’Ascq et que je poursuis mes études en ingénierie informatique.<br />
                    Actuellement en <span className="font-bold">troisième année de cycle ingénieur informatique sous statut apprenti</span> que je réalise en <span className="font-bold">alternance</span> 
                    au sein de l’entreprise <a href="https://www.jetdev.fr/" className="hover:underline"><span className="font-bold">Jetdev</span></a> au poste <span className="font-bold">d’apprenti développeur full stack & mobile</span>.<br />
                    <br />

                    Sur ce site, vous trouverez une <a href="/eportfolio/presentation" className="hover:underline"><span className="font-bold">présentation</span></a> plus détaillée afin de mieux apprendre à
                    me connaître ainsi que de mon <a href="/eportfolio/formation" className="hover:underline"><span className="font-bold">parcours scolaire et universitaire</span></a>, 
                    les <a href="/eportfolio/projects" className="hover:underline"><span className="font-bold">projets réalisés</span></a> dans le cadre de mes études et/ou personnels et 
                    mon <a href="/eportfolio/formation" className="hover:underline"><span className="font-bold">parcours professionnel</span></a>.<br />
                    <br />
                    Je vous remercie pour l’attention et le temps accordés à la lecture de ces articles !
                </p>
            </div>
        </div>
    )

}