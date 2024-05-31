import HobbyCarousel from "@/components/presentation/HobbyCarousel";
import Title from "@/components/title/Title";

export default function page () {

    return (
        <div className="flex flex-col justify-center w-[100%]">
            <Title text="Présentation"/>
            <div className="flex flex-col items-center justify-center mt-10">
                <h2 className="text-gray font-bold text-2xl">Qui-suis je ?</h2>
                <p className="whitespace-pre-line">
                    { 
                        `
                            Je m'appelle Adrien DA COSTA VEIGA, j'ai 20 ans et je suis originaire de l'Oise (60), en Picardie.

                            Je suis actuellement en troisème année de Bachelor Universitaire de Technologie (BUT) Informatique, parcours Réalisation d'applications : conception, développement et validation
                            à l'Institut Universitaire de Technologie de Lille, site de Villeneuve d'Ascq. 
                            Je réalise cette dernière année de BUT Informatique en apprentissage au sein de l'entreprise Toyota Motor Manufacturing France à Onnaing, au poste 
                            d'apprenti développeur full stack où je participe au développement, déploiement et à la maintenance d'applications visant à soutenir les opérateurs et opératrices sur la ligne de production.

                            Je suis passionné par le monde de l'informatique depuis mes 12 ans. C'est à cet âge que j'ai obtenu mon tout premier ordinateur personnel. Au moment de la sélection des composants
                            et du montage de cet ordinateur. Je me posais beaucoup de questions concernant le fonctionnement des composants. Comment est-ce que la carte mère fonctionne ? Comment est-ce que les
                            informations sont-elles stockées dans le disque dur ? Comment est-ce que le système sait à quel endroit aller chercher telle ou telle information ?
                            Telles étaient les questions qui m'ont poussé à m'intéresser à ce vaster domaine qu'est l'informatique.

                            C'était décidé. Je souhaitais réaliser ma carrière professionnelle dans ce domaine. Je ferai de cette passion mon métier !
                            Depuis lors, j'ambitionne de devenir Ingénieur Informatique.

                            C'est pour cela que je suis très fier d'avoir la possibilité de poursuivre mes études au sein de 
                            l'Institut National des Sciences Appliquées (INSA) Hauts-de-France en cursus Ingénieur spécialité Informatique en apprentissage pour une durée totale de 3 ans, soit 36 mois.

                            On dit que "la curiosité est un vilain défaut". Cela est peut-être vrai, mais pour moi, il s'agit d'une grande qualité !
                            De par ma curiosité et ma soiffe de savoir, j'en viens à m'intéresser à tout type de sujet. Sciences, technologies, littérature, culture et j'en passe.
                            A cette curiosité s'ajoute une grande rigueur, appréciant que le travail soit fait et ce correctement. Une rigueur que je m'éforce d'appliquée également dans 
                            ma façon de programmer, cherchant à toujours convenir au mieux aux conventions ainsi qu'à toujours chercher à optimiser au mieux l'écriture du code que je produis.  
                            Je suis quelqu'un de persévérant, qui n'a pas peur de se remttre en question et qui cherche à s'améliorer en permanance.

                            En dehors de l'informatique, j'éprouve un fort intérêt pour de nombreux autres domaines biens différents.

                            Voici mes passions les plus importantes :
                        `
                    }
                </p>
                <div className="mt-[100px]">
                    <HobbyCarousel />
                </div>
            </div>
        </div>
    )

}