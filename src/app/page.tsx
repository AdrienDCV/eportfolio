import Image from "next/image";

export default function page () {
   
    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-gray font-bold text-4xl">Bienvenue !</h1>
            <div className="flex flex-col md:flex-row md:p-10 md:mt-10 justify-center items-center">
                <Image src="/public/images/pptmmfadrien.png" alt={"photo_CV_DACOSTAVEIGA_Adrien"} width={200} height={200} className="mt-5"/>
                <div className="md:block hidden border-l-4 border-gray mt-5 w-4 h-[250px] ml-20"></div>
                <div className="block md:hidden border-t-4 border-gray mt-5 w-[85%]"></div>
                <p className="p-6 md:ml-20 md:w-[750px]">
                    Enchanté,
                    <br />  
                    Je me nomme <span className='font-bold'>Adrien DACOSTA VEIGA</span>, 20 ans.<br />
                    <br />
                    <span className="font-bold">Passionné</span> depuis maintenant quelques années par <span className="font-bold">le monde de l’informatique</span>,
                    j’ai décidé de <span className="font-bold">faire de cette passion mon métier</span>.<br />
                    <br />
                    C’est dans cette optique que j’ai entrepris un <span className="font-bold">Bachelor Universitaire de Technologie (BUT) en Informatique</span> à
                    l’Institut Universitaire de Technologie de Lille site de Villeneuve d’Ascq.<br />
                    Actuellement en <span className="font-bold">troisième année parcours réalisation d’applications : conception, développement,
                    validation</span> que je réalise en <span className="font-bold">alternance</span> au sein de l’entreprise
                    <span className="font-bold">Toyota Motor Manufacturing France</span>, au poste <span className="font-bold">d’apprenti développeur full stack</span>.<br />
                    <br />

                    Sur ce site, vous trouverez une <a href="/presentation"><span className="font-bold">présentation</span></a> plus détaillée afin de mieux apprendre à
                    me connaître ainsi que de mon <a href="/formation"><span className="font-bold">parcours scolaire et universitaire</span></a>, 
                    les <a href="/projects"><span className="font-bold">projets réalisés</span></a> dans le cadre de mes études et/ou personnels et 
                    mon <a href="/formation"><span className="font-bold">parcours professionnel</span></a>.<br />
                    <br />
                    Je vous remercie pour l’attention accordée et le temps dédié à la lecture de ces articles !
                </p>
            </div>
        </div>
    )

}