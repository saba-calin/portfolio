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
        title: 'University Timetable',
        desc: 'Clean and simple timetable app for UBB students (alternative to the cluttered official schedule).',
        isPublished: true,
        techs: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Google Cloud'],
    },
    {
        img: portfolio,
        liveLink: 'https://calin-sabaila.xyz/',
        gitHubTrue: true,
        gitHubLink: 'https://github.com/saba-calin/portfolio',
        title: 'My Portfolio',
        desc: 'The site you are on right now 😀.',
        isPublished: true,
        techs: ['React', 'Tailwind'],
    },
    {
        img: panini,
        gitHubTrue: true,
        gitHubLink: 'https://github.com/saba-calin/panini',
        title: 'Panini Album',
        desc: 'Digital Panini album inspired by EURO 2024 where users can collect and trade cards.',
        techs: ['Java', 'Spring Boot', 'Docker', 'React', 'PostgreSQL', 'AWS'],
    },
    {
        img: whatsapp,
        gitHubTrue: true,
        gitHubLink: 'https://github.com/saba-calin/WhatsApp-Clone',
        title: 'WhatsApp Clone',
        desc: 'Chat app with authentication and real-time messaging (WhatsApp-like UI & features).',
        techs: ["Spring Boot", "Docker", "Postgres", "Angular", "Tailwind", "Web Sockets"],
    },
    {
        img: toyLanguageInterpreter,
        gitHubTrue: true,
        gitHubLink: 'https://github.com/saba-calin/Toy-Language-Interpreter',
        title: 'Java Toy Language Interpreter',
        desc: 'Interpreter for a custom toy programming language (written in Java). Includes various synchronization techniques, such as barriers and semaphores.',
        techs: ["Java", "Multithreading"],
    }
];
