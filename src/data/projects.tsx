import TechnoTools from "@/data/TechnoTool"
import { FaJava, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs, TbSql } from "react-icons/tb";
import { SiPostgresql, SiApachemaven, SiSpringboot, SiTypescript, SiTailwindcss, SiVirtualbox, SiKubuntu, SiJavascript, SiSocketdotio, SiPython, SiJunit5, SiReact, SiGithubactions, SiSass } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";

type Project = {
    title: string,
    slug: string,
    tags: string[],
    thumbnail: string,
    scholarYear: string,
    description: string,
    team: string,
    participation: string[],
    technosTools: TechnoTools[],
    skills: string[]
}


export const schoolProjects: Project[] = [
    {
        title: 'ePortfolio',
        slug: 'eportfolio',
        tags: [
            'Développement d\'application',
            'Développement d\'application web frontend',
        ],
        thumbnail: '/images/eportfolio.png',
        scholarYear: 'BUT Informatique - Semestre 6',
        description: 'Développement d\'un e-portfolio en utilisant le framework de développement front Next.js' +
        'Le choix de ce framework s\'explique par la vonlonté d\'utiliser un framework front pouvant générer du contenu' +
        'statique côté serveur (Server Side Rendering)',
        team: '1 personnes',
        participation: [
            'Développement de l\'application',
            'Élaboration de la charte graphique',
            'Design de l\'interface utilisateur',
        ],
        technosTools: [
            {
                name: 'Next.js',
                logo: <TbBrandNextjs width={ 50 } height={ 50 } title="Next.js"/>
            },
            {
                name: 'HTML',
                logo: <FaHtml5 width={ 50 } height={ 50 } title="HTML"/>
            },
            {
                name: 'TypeScript',
                logo: <SiTypescript width={ 50 } height={ 50 } title="TypeScript"/>
            },
            {
                name: 'Tailwind CSS',
                logo: <SiTailwindcss width={ 50 } height={ 50 } title="Tailwind CSS"/>
            },
            {
                name: 'SASS',
                logo: <SiSass width={ 50 } height={ 50 } title="SASS"/>
            },
            {
                name: 'Git',
                logo: <FaGitAlt width={ 50 } height={ 50 } title="Git"/>
            },
        ],
        skills: [
            'Réaliser un développement d\'application',
            'Analyse du besoin client',
            'Gestion de versions (Git)',
            'Gestion de projet',
        ]
    },
    {
        title: 'Application web d\'e-commerce',
        slug: 'application-web-e-commerce',
        tags: [
            'Développement d\'application',
            'Développement d\'application web',
            'Développement d\'application web backend',
        ],
        thumbnail: '/images/logo_IUT_Lille.svg',
        scholarYear: 'BUT Informatique - Semestre 6',
        description: 'Dans le cadre d\'une semaine dédiée à la réalisation d\'un projet dans un environnement Agile et méthode Scrum. ' +
        'Nous avons eu à travailler auprès de porteurs de projets de manière concrèete en vue de leur proposer une ' +
        'une solution adaptée à leurs idées en équipe de 8 personnes (6 développeurs et 2 administrateurs systèmes)',
        team: '8 personnes',
        participation: [
            'Développement de l\'API web',
            'Gestion de l\'équipe de développement backend',
        ],
        technosTools: [
            {
                name: 'Java',
                logo: <FaJava width={ 50 } height={ 50 } title="Java"/>
            },
            {
                name: 'Spring Boot',
                logo: <SiSpringboot width={ 50 } height={ 50 } title="Spring Boot"/>
            },            {
                name: 'Maven',
                logo: <SiApachemaven width={ 50 } height={ 50 } title="Maven"/> 
            },
            {
                name: 'PostgreSQL',
                logo: <SiPostgresql width={ 50 } height={ 50 } title="PostgreSQL"/>
            },
        ],
        skills: [
            'Réaliser un développement d\'application',
            'Analyse du besoin client',
            'Programmation Orientée Objet',
            'Capacité à diriger une équipe',
            'Adapatabilité',
            'Gestion de versions (Git)',
            'Clean code',
            'Agilité',
            'Scrum',
            'Gestion de projet',
            'Travail en équipe'
        ]
    },
    {
        title: 'Algorithme de déchiffrement de la Machine Enigma',
        slug: 'enigma',
        tags: [
            'Développement d\'application'
        ],
        thumbnail: '/images/enigma.png',
        scholarYear: 'BUT Informatique - Semestre 1',
        description: 'Implémentation d\'un algorithme de décryptage d\'un message chiffré à l\'aide de la fameuse machine de chiffrement allemande, Enigma, surtout utilisée par les armées allemandes durant la Seconde Guerre Mondiale.',
        team: '2 personnes',
        participation: ['Implémentation des méthodes nécessaires au déchiffrement'],
        technosTools: [
            {
                name: 'Java',
                logo: <FaJava width={ 50 } height={ 50 } title="Java"/>
            }
        ],
        skills: [
            'Réaliser un développement d\'application',
            'Algorithmie',
            'Travail en équipe'
        ]
    },
    {
        title: 'Logiciel ludo-pédagogique : Success Key',
        slug: 'success-key',
        tags: [
            'Développement d\'application'
        ],
        thumbnail: '/images/succes-key.png',
        scholarYear: 'BUT Informatique - Semestre 1',
        description: 'Développement d\'un logiciel ludo-pédagogique visant à être utilisé par des élèves de primaires.' +
        'Nous avons décidé de réaliser un simple quizz de culture générale.' +
        'Scénario : Vous jouez un enfant enfermé dans sa chambre par ses parents pour cause de mauvaises notes et' +
        'afin de réviser vos prochaines évaluations. Vos parents vous ont laissé un jeu de clés mais parmi' +
        'ces dernières, une seule ouvre la porte de la chambre. Répondez juste à une question, et vous aurez le droit d\'essayer l\'une de ces clefs.',
        team: '2 personnes',
        participation: ['Développement du logiciel'],
        technosTools: [
            {
                name: 'Java',
                logo: <FaJava width={ 50 } height={ 50 } title="Java"/>
            }
        ],
        skills: [
            'Réaliser un développement d\'application',
            'Optimiser des applications informatiques',
            'Clean code',
            'Algorithmie',
            'Travail en équipe',
            'Capacité à diriger une équipe'
        ]
    },
    {
        title: 'Application de classification (Algorithme kNN)',
        slug: 'classification',
        tags: [
            'Développement d\'application'
        ],
        thumbnail: '/images/classification.png',
        scholarYear: 'BUT Informatique - Semestre 3',
        description: 'Réalisation d\'une application Java avec interface graphique visant à classifier des jeux de données' +
        '(Pokémon / variétés d\'Iris / passagers du Titanic) basée sur l\'algorithme des k plus proches voisins (kNN).' +
        'Pour réaliser cette application, nous avons eu à analyser les besoins clients et cahier des charges afin de déterminer' +
        'la structure de l\'application par la réalisation de fiches et d\'un diagramme de cas d\'utilisations et d\'un diagramme de classes (UML).',
        team: '4 personnes',
        participation: [
            'Analyse du besoin client (Structure de l\'application)',
            'Développement de l\'application'
        ],
        technosTools: [
            {
                name: 'Java',
                logo: <FaJava width={ 50 } height={ 50 } title="Java"/>
            },
            {
                name: 'Java FX',
                logo: <FaJava width={ 50 } height={ 50 } title="Java FX"/>
            },
            {
                name: 'Git',
                logo: <FaGitAlt width={ 50 } height={ 50 } title="Git"/>
            }
        ],
        skills: [
            'Réaliser un développement d\'application',
            'Optimiser des applications informatiques',
            'Analyse du besoin client',
            'Programmation Orientée Objet',
            'Clean Code',
            'Gestion de versions (Git)',
            'Travail d\'équipe',
            'Gestion de projet',
            'Capacité à diriger une équipe',
            'Communication avec les membres de l\'équipe'
        ]
    },
    {
        title: 'Application d\'affectation tuteur/toturé',
        slug: 'affectation-tutoring',
        tags: [
            'Développement d\'application'
        ],
        thumbnail: '/images/affectation-tutorat.png',
        scholarYear: 'BUT Informatique - Semestre 2',
        description: 'Application Java avec interface graphique visant à réaliser des affectations à coût minimal entre deux étudiants' +
        '(1ère année avec 2 ou 3ème année) dans le cadre d\'un système de tutorat. Nous avons utilisé pour cela le problème du plus court chemin,' +
        'et donc utilisé l\'algorithme de Dijkstra afin de résoudre la problématique de l\'affectation à coût minimal.',
        team: '2 personnes',
        participation: [
            'Implémentation du système d\'attribution des poids aux noeuds (étudiants)',
            'Développement de l\'application'
        ],
        technosTools: [
            {
                name: 'Java',
                logo: <FaJava width={ 50 } height={ 50 } title="Java"/>
            },
            {
                name: 'Java FX',
                logo: <FaJava width={ 50 } height={ 50 } title="Java FX"/>
            },            
            {
                name: 'Git',
                logo: <FaGitAlt width={ 50 } height={ 50 } title="Git"/>
            }
        ],
        skills: [
            'Réaliser un développement d\'application',
            'Optimiser des applications informatiques',
            'Programmation Orientée Objet',
            'Gestion de versions (Git)',
            'Clean code',
            'Travail d\'équipe',
            'Gestion de projet'
        ]
    },
    {
        title: 'Site web vitrine pour la startup IlluStrat',
        slug: 'illustart',
        tags: [
            'Développement d\'application',
            'Dévelopement web'
        ],
        thumbnail: '/images/illustart.png',
        scholarYear: 'BUT Informatique - Semestre 1',
        description: 'Développement d\'un site vitre pour une startup fictive créée dans le cadre du scénario du projet' + 
        'Nous sommes partis sur une startup proposant des services dans l\'art numérique, Illustrat. Pour la création de ce site vitrine,' + 
        'nous avons eu à choisir une charte graphique ainsi qu\'un design pour les différentes pages du site. Pour des raisons de simplicité,' + 
        'certaines illustrations ont été réalisées par moi même.',
        team: '2 personnes',
        participation: [
            'Réalisations d\'illustrations',
            'Développement de l\'interface',
            'Sélection de la charte graphique'
        ],
        technosTools: [
            {
                name: 'HTML',
                logo: <FaHtml5 width={ 50 } height={ 50 } title="HTML"/>
            },
            {
                name: 'CSS',
                logo: <FaCss3 width={ 50 } height={ 50 } title="CSS"/>
            }
        ],
        skills: [
            'Développement web',
            'Communication visuelle',
            'Réalisation graphiques',
            'Travail en équipe'
        ]
    },
    {
        title: 'Mise en place d\'une environnement de développement sous Kubuntu',
        slug: 'vm-kubuntu',
        tags: [
            'Système'
        ],
        thumbnail: '/images/vm-kubuntu.png',
        scholarYear: 'BUT Informatique - Semestre 1',
        description: 'Scénario : Une petite startup, composée d\'un chef d\'entreprise et d\'un développeur,' +
        'fait appel à nos services afin de mettre en place un poste de développement sous la distribution UNIX.' + 
        'L\'objectif était donc d\'installer et configurer une machine sous une distribution UNIX afin qu\'elle puisse être utilisée' +
        'à la fois par le chef d\'entreprise (débutant en informatique) et le développeur (expert). Nous avons choisi la distribution' +
        'Kubuntu qui offre une interface graphique proche de celle de Windows. Nous avons également dû installer des logiciels et applications' + 
        'tels que : Visual Studio Code / Firefox / Mozilla Thunderbird / LibreOffice et autres.',
        team: '2 personnes',
        participation: [
            'Installation et configuration de la machine virtuelle Kubuntu'
        ],
        technosTools: [
            {
                name: 'Oracle VM VirtualBox',
                logo: <SiVirtualbox width={ 50 } height={ 50 } title="Oravle VM VirtualBox"/>
            },
            {
                name: 'Kubuntu',
                logo: <SiKubuntu width={ 50 } height={ 50 } title="Kubuntu"/>
            }
        ],
        skills: [
            'Administrer des systèmes informatiques communicants',
            'Configuration d\'un système d\'exploitation',
            'Configuration d\'applications'
        ]
    },
    {
        title: 'API Rest',
        slug: 'rest-api-pizzeria',
        tags: [
            'Développement d\'application',
            'Développement backend'
        ],
        thumbnail: '/images/api-rest-pizzeria.png',
        scholarYear: 'BUT Informatique - Semestre 4',
        description: 'Développement d\'une API REST pour une pizzeria fictive permettant de créer et commander des pizzas en fonction des spécifications données par le client.',
        team: '2 personnes',
        participation: [
            'Analyse du besoin client',
            'Réalisation du MCD',
            'Création de la BDD sous PostgreSQL',
            'Développement de l\'API'
        ],
        technosTools: [
            {
                name: 'Java',
                logo: <FaJava width={ 50 } height={ 50 } title="Java"/>
            },
            {
                name: 'Git',
                logo: <FaGitAlt width={ 50 } height={ 50 } title="Git"/>
            },
            {
                name: 'PostgreSQL',
                logo: <SiPostgresql width={ 50 } height={ 50 } title="PostgreSQL"/>
            },            
            {
                name: 'SQL',
                logo: <TbSql width={ 50 } height={ 50 } title="SQL"/>
            },
        ],
        skills: [
            'Analyse du besoin client pour la mise en place d\'un Système d\'informations',
            'Création d\'une base de données',
            'Utilisation d\'une base de données pour réaliser des analyses statistiques',
            'Gérer des données de l\'information',
            'Capacité à diriger une équipe',
            'Gestion de versions (Git)',
            'Travail d\'équipe',
            'Clean code',
            'Gestion de projet',
            'Adapatabilité'
        ]
    },
    {
        title: 'Exploitation d\'une Base de données',
        slug: 'parcoursup-db-analysis',
        tags: [
            'Base de données',
            'Gestion de données',
            'Exploitation de données',
            'Analyse de données',
            'Etude statistique'
        ],
        thumbnail: '/images/exploitation-donnees-parcoursup.png',
        scholarYear: 'BUT Informatique - Semestre 2',
        description: 'A partir des données issues de la plateforme Parcoursup, plateforme visant à orienter' +
        'les élèves de Terminale vers différentes filières d\'études supérieures (CPGE / IUT / École d\'ingénieurs / BTS / ...)' +
        'fournies par le Ministère de l\'éducation nationale et des sports. Après avoir reparti les données contenu dans un fichier .CSV,' +
        'nous avons exploité la BDD créée afin de réaliser des analyses statistiques comme par exemple le pourcentage de filles admises en' +
        'BUT Informatique, la proportion de candidats boursiers dans des filières sélectives.',
        team: '2 personnes',
        participation: [
            'Analyse du besoin client',
            'Réalisation du MCD & MLD',
            'Création de la BDD sous Microsoft Access'
        ],
        technosTools: [
            {
                name: 'PostgreSQL',
                logo: <SiPostgresql width={ 50 } height={ 50 } title="PostgreSQL"/>
            },
            {
                name: 'SQL',
                logo: <TbSql width={ 50 } height={ 50 } title="SQL"/>
            }
        ],
        skills: [
            'Analyse du besoin client pour la mise en place d\'un Système d\'informations',
            'Création d\'une base de données',
            'Utilisation d\'une base de données pour réaliser des analyses statistiques',
            'Gérer des données de l\'information',
            'Premiers pas avec le logiciel Microsoft Access',
            'Capacité à diriger une équipe',
            'Adapatabilité',
            'Rigueur',
            'Travail en équipe'
        ]
    },
    {
        title: 'Agar.io',
        slug: 'agario',
        tags: [
            'Développement d\'application',
            'Développement d\'application web'
        ],
        thumbnail: '/images/agario.png',
        scholarYear: 'BUT Informatique - Semestre 4',
        description: 'Reproduction du fameux jeu vidéo sur navigateur Agar.io en JavaScript / TypeScript (vanilla)' +
        'reprenant les principales mécaniques de ce dernier : se déplacer en fonction de la position du curser de la souris,' +
        'manger des points de nourriture, manger d\'autres joueurs plus petit que soi ou se faire manger par plus grand.',
        team: '2 personnes',
        participation: [
            'Analyse du besoin client clients',
            'Développement de l\'application',
            'Mise en place de l\'architecture client-serveur'
        ],
        technosTools: [
            {
                name: 'HTML',
                logo: <FaHtml5 width={ 50 } height={ 50 } title="HTML"/>
            },
            {
                name: 'CSS',
                logo: <FaCss3 width={ 50 } height={ 50 } title="CSS"/>
            },
            {
                name: 'JavaScript',
                logo: <SiJavascript width={ 50 } height={ 50 } title="JavaScript"/>
            },
            {
                name: 'TypeScript',
                logo: <SiTypescript width={ 50 } height={ 50 } title="TypeScript"/>
            },
            {
                name: 'Node.js',
                logo: <FaNodeJs width={ 50 } height={ 50 } title="Node.js"/>
            },
            {
                name: 'Socket.io',
                logo: <SiSocketdotio width={ 50 } height={ 50 } title="Socket.io"/>
            },
            {
                name: 'Git',
                logo: <FaGitAlt width={ 50 } height={ 50 } title="Git"/>
            },
        ],
        skills: [
            'Réaliser un développement d\'application',
            'Optimiser des applications informatiques',
            'Analyse du besoin client',
            'Programmation Orientée Objet',
            'Gestion des communications client-serveur',
            'Capacité à diriger une équipe',
            'Adapatabilité',
            'Gestion de versions (Git)',
            'Travail d\'équipe',
            'Gestion de projet',
            'Travail en équipe'
        ]
    },
    {
        title: 'Jeu du pendu',
        slug: 'hangman-game',
        tags: [
            'Développement d\'application',
            'Développement d\'application web'
        ],
        thumbnail: '/images/jeu-pendu.png',
        scholarYear: 'Lycée - Première',
        description: 'Jeu du pendu réalisé en application Python ainsi qu\'en application web (HTML / CSS et JavaScript).',
        team: '3 personnes',
        participation: [
            'Écriture du script JavaScript',
            'Développement de l\'application Python'
        ],
        technosTools: [
            {
                name: 'HTML',
                logo: <FaHtml5 width={ 50 } height={ 50 } title="HTML"/>
            },
            {
                name: 'CSS',
                logo: <FaCss3 width={ 50 } height={ 50 } title="CSS"/>
            },
            {
                name: 'JavaScript',
                logo: <SiJavascript width={ 50 } height={ 50 } title="JavaScript"/>
            },
            {
                name: 'Python',
                logo: <SiPython width={ 50 } height={ 50 } title="Python"/>
            }
        ],
        skills: [
            'Réaliser un développement d\'application',
            'Analyse du besoin client',
            'Programmation Orientée Objet',
            'Capacité à diriger une équipe',
            'Adapatabilité',
            'Gestion de versions (Git)',
            'Gestion de projet',
            'Travail en équipe'
        ]
    },
    {
        title: 'Tetris',
        slug: 'tetris',
        tags: [
            'Développement d\'application',
        ],
        thumbnail: '/images/tetris.png',
        scholarYear: 'Lycée - Terminale',
        description: 'Application Python, reproduction du célèbre jeu vidéo Tetris.',
        team: '3 personnes',
        participation: [
            'Développement de l\'application Python'
        ],
        technosTools: [
            {
                name: 'Python',
                logo: <SiPython width={ 50 } height={ 50 } title="Python"/>
            }
        ],
        skills: [
            'Réaliser un développement d\'application',
            'Analyse du besoin client',
            'Programmation Orientée Objet',
            'Capacité à diriger une équipe',
            'Adapatabilité',
            'Gestion de versions (Git)',
            'Gestion de projet',
            'Travail en équipe'
        ]
    },
    {
        title: 'PacMan',
        slug: 'pacman',
        tags: [
            'Développement d\'application',
        ],
        thumbnail: '/images/logo_IUT_Lille.svg',
        scholarYear: 'Lycée - Terminale',
        description: 'Application Python, reproduction du célèbre jeu vidéo Pac-man.',
        team: '3 personnes',
        participation: [
            'Développement de l\'application Python'
        ],
        technosTools: [
            {
                name: 'Python',
                logo: <SiPython width={ 50 } height={ 50 } title="Python"/>
            }
        ],
        skills: [
            'Réaliser un développement d\'application',
            'Analyse du besoin client',
            'Programmation Orientée Objet',
            'Capacité à diriger une équipe',
            'Adapatabilité',
            'Gestion de versions (Git)',
            'Gestion de projet',
            'Travail en équipe'
        ]
    }
]

export const personnalProjects: Project[] = [
    {
        title: 'Commandes UNIX en Java',
        slug: 'java-unix-commands',
        tags: [
            'Algorithmie'
        ],
        thumbnail: '',
        description: 'Reproduction de commandes UNIX en Java.' +
            'Ce projet vise à me faire travailler mes compétences en algorithmie en ' +
            'appliquant le TDD (Test Driven Development)',
        technosTools: [
            {
                name: 'Java',
                logo: <FaJava width={ 50 } height={ 50 } title="Java"/>
            },
            {
                name: 'Maven',
                logo: <SiApachemaven width={ 50 } height={ 50 } title="Maven"/>
            },
            {
                name: 'JUnit5',
                logo: <SiJunit5 width={ 50 } height={ 50 } title="JUnit5"/>
            }
        ],
        skills: [
            'Clean code',
            'Algorithmie',
            'Programmation Orientée Objet'
        ],
        scholarYear: "",
        team: "",
        participation: []
    },
    {
        title: 'Exercism',
        slug: 'exercism',
        tags: [
            'Algorithmie'
        ],
        thumbnail: '',
        description: 'Reproduction d\'exercices de programmation en Java issu du site ' +
            'Exercism en appliquant le TDD (Test Driven Development). Ce projet me permet de travailler mes compétences ' +
            'en algorithmie',
        technosTools: [
            {
                name: 'Java',
                logo: <FaJava width={ 50 } height={ 50 } title="Java"/>
            },
            {
                name: 'Maven',
                logo: <SiApachemaven width={ 50 } height={ 50 } title="Maven"/>
            },
            {
                name: 'JUnit5',
                logo: <SiJunit5 width={ 50 } height={ 50 } title="JUnit5"/>
            }
        ],
        skills: [
            'Clean code',
            'Algorithmie',
            'Programmation Orientée Objet'
        ],
        scholarYear: "",
        team: "",
        participation: []
    },
    {
        title: 'BOTtas',
        slug: 'bottas',
        tags: [
            'Développement d\'application web',
            'Développement d\'application d\'API web',
            'Développement web backend',
            'Gestion de données',
        ],
        thumbnail: '',
        description: 'Projet visant à développer un bot pour un serveur Discord sur le thème de la Formule 1 ' +
            'ainsi que d\'une platerforme web visant à configurer le bot ainsi que de réaliser des analyses et visualisations ' +
            'de données issues des télémétries et statistiques des pilotes et écuries. Projet réalisé dans un environnement Agile et la méthode Scrum ' +
            'en pratiquant le TDD (Test Driven Development)',
        technosTools: [
            {
                name: 'Java',
                logo: <FaJava width={ 50 } height={ 50 } title="Java"/>
            },
            {
                name: 'Spring Boot',
                logo: <SiSpringboot width={ 50 } height={ 50 } title="Spring Boot"/>
            },
            {
                name: 'React',
                logo: <SiReact width={ 50 } height={ 50 } title="React"/>
            },
            {
                name: 'TypeScript',
                logo: <SiTypescript width={ 50 } height={ 50 } title="TypeScript"/>
            },
            {
                name: 'PostgreSQL',
                logo: <SiPostgresql width={ 50 } height={ 50 } title="PostgreSQL"/>
            },
            {
                name: 'Python',
                logo: <SiPython width={ 50 } height={ 50 } title="Python"/>
            },
            {
                name: 'Git',
                logo: <FaGitAlt width={ 50 } height={ 50 } title="Git"/>
            },
            {
                name: 'Github Actions',
                logo: <SiGithubactions width={ 50 } height={ 50 } title="Github Actions"/>
            }
        ],
        skills: [
            'Réaliser un développement d\'application',
            'Analyse du besoin client',
            'Programmation Orientée Objet',
            'Capacité à diriger une équipe',
            'Adapatabilité',
            'Gestion de versions (Git)',
            'Clean code',
            'Agilité',
            'Scrum',
            'Gestion de projet',
            'Travail en équipe'
        ],
        scholarYear: "",
        team: "",
        participation: []
    },
]