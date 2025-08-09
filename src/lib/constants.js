import portfolio from '../assets/projectsImg/portfolio.webp';
import panini from "../assets/projectsImg/panini-green.png";
import whatsapp from "../assets/projectsImg/whatsapp.png";
import toyLanguageInterpreter from "../assets/projectsImg/toyLanguageInterpreter.png";
import timetable from "../assets/projectsImg/timetable.png";

export const PROJECTS = [
    {
        img: timetable,
        liveLink: 'https://timetable-ubb.xyz/',
        gitHubTrue: true,
        gitHubLink: 'https://github.com/saba-calin/timetable',
        title: 'Timetable UBB',
        desc: 'Timetable UBB',
        isPublished: true,
        techs: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'AWS'],
    },
    {
        img: portfolio,
        liveLink: 'https://calin-sabaila.xyz/',
        gitHubTrue: true,
        gitHubLink: 'https://github.com/saba-calin/portfolio',
        title: 'My Portfolio',
        desc: 'The site you are on right now',
        isPublished: true,
        techs: ['React', 'Tailwind'],
    },
    {
        img: panini,
        gitHubTrue: true,
        gitHubLink: 'https://github.com/saba-calin/panini',
        title: 'Panini',
        desc: 'Panini',
        techs: ['Java', 'Spring Boot', 'Docker', 'React', 'PostgreSQL', 'AWS'],
    },
    {
        img: whatsapp,
        gitHubTrue: true,
        gitHubLink: 'https://github.com/saba-calin/WhatsApp-Clone',
        title: 'WhatsApp Clone',
        desc: 'Mobile app to track birthdays (with notification when its birthday), notes and tasks',
        techs: ["Spring Boot", "Docker", "Postgres", "Angular", "Tailwind", "Web Sockets"],
    },
    {
        img: toyLanguageInterpreter,
        gitHubTrue: true,
        gitHubLink: 'https://github.com/saba-calin/Toy-Language-Interpreter',
        title: 'Java Toy Language Interpreter',
        desc: 'Guess the unknown Pokémon, Stronger or Weaker (with online leaderboard), Guess the blur Pokémon.',
        techs: ["Java", "Multithreading"],
    }
];
