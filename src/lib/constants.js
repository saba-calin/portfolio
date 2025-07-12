import portfolio from '../assets/projectsImg/portfolio.webp';
import moT from '../assets/projectsImg/moT.webp';
import kubicDeal from '../assets/projectsImg/kubicDeal.webp';
import comicChars from '../assets/projectsImg/comicChars.webp';
import footballTeamSite from '../assets/projectsImg/footballTeamSite.webp';
import shoppingCart from '../assets/projectsImg/shoppingCart.webp';
import nbaSite from '../assets/projectsImg/nbaSite.webp';
import planetWebImg from '../assets/projectsImg/planetWebImg.webp';
import slimeGame from '../assets/projectsImg/slimeGame.webp';
import rockPaperScissors from '../assets/projectsImg/rockPaperScissors.webp';
import ticTacToe from '../assets/projectsImg/ticTacToe.webp';
import blackJackGame from '../assets/projectsImg/blackJackGame.webp';
import bipo from '../assets/projectsImg/bipo.webp';
import microsoftInter from '../assets/projectsImg/microsoftInter.webp';
import uberInter from '../assets/projectsImg/uberInter.webp';
import customizeBtn from '../assets/projectsImg/customizeBtn.webp';
import typeSpeedTest from '../assets/projectsImg/typeSpeedTest.webp';
import pokeGames from '../assets/projectsImg/pokeGames.webp';

export const PROJECTS = [
    {
        img: portfolio,
        liveLink: 'https://supermoooo.github.io/MyPortfolio/',
        gitHubTrue: true,
        gitHubLink: 'https://github.com/SuperMoooo/MyPortfolio',
        title: 'My Portfolio',
        desc: 'The site you are on right now',
        techs: ['React', 'Tailwind'],
    },
    {
        img: moT,
        liveLink: 'https://expo.dev/artifacts/eas/8X338QNcAUx3SXnfFfXoA8.apk',
        gitHubTrue: true,
        gitHubLink: 'https://github.com/SuperMoooo/MoT',
        title: 'MoT',
        desc: 'Mobile app to track birthdays (with notification when its birthday), notes and tasks',
        techs: ['React Native', 'Redux TK', 'JavaScript'],
    },
    {
        img: pokeGames,
        liveLink: 'https://poke-games-nine.vercel.app/',
        gitHubTrue: true,
        gitHubLink: 'https://github.com/SuperMoooo/PokeGames',
        title: 'PokeGames',
        desc: 'Guess the unknown Pokémon, Stronger or Weaker (with online leaderboard), Guess the blur Pokémon.',
        techs: [
            'Next.js',
            'Tailwind',
            'TypeScript',
            'API',
            'Redux TK',
            'MongoDB',
        ],
    },
    {
        img: kubicDeal,
        liveLink: 'https://kubicdeal.pt/',
        gitHubTrue: false,
        gitHubLink: '',
        title: 'Kubic Deal',
        desc: 'A website made for a client for the start of the company',
        techs: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        img: comicChars,
        liveLink: 'https://superheroesinfo.vercel.app/',
        gitHubTrue: true,
        gitHubLink: 'https://github.com/SuperMoooo/superheroesinfo',
        title: 'Characters Info',
        desc: 'Comic Characters Info (Appearance, biography, powerstats, etc...)',
        techs: ['Next.js', 'Tailwind', 'API', 'Redux TK', 'MUI'],
    },
    {
        img: footballTeamSite,
        liveLink: 'https://supermoooo.github.io/footballTeamSite/',
        gitHubTrue: true,
        gitHubLink: 'https://github.com/SuperMoooo/footballTeamSite',
        title: 'Football Team Site',
        desc: 'Website made for a football team',
        techs: ['Next.js', 'Tailwind'],
    },
    {
        img: shoppingCart,
        liveLink: 'https://supermoooo.github.io/shoppingcart/',
        gitHubTrue: true,
        gitHubLink: 'https://github.com/SuperMoooo/shoppingcart',
        title: 'Shopping Cart',
        desc: 'Shopping Cart to learn redux',
        techs: ['Next.js', 'Redux TK', 'Tailwind'],
    },
    {
        img: nbaSite,
        liveLink: 'https://supermoooo.github.io/NBA-SITE/',
        gitHubTrue: true,
        gitHubLink: 'https://github.com/SuperMoooo/NBA-SITE',
        title: 'NBA teams',
        desc: 'NBA teams website made using API data',
        techs: ['React', 'Tailwind', 'API'],
    },
    {
        img: planetWebImg,
        liveLink: 'https://supermoooo.github.io/planetsWebSite/index.html',
        gitHubTrue: true,
        gitHubLink: 'https://github.com/SuperMoooo/planetsWebSite',
        title: 'Planet Website',
        desc: 'A website with some information about the planets of our galaxy',
        techs: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        img: slimeGame,
        liveLink: 'https://supermo.itch.io/slime-game',
        gitHubTrue: false,
        gitHubLink: '',
        title: 'Slime Game',
        desc: 'A game made for the final project of the course',
        techs: ['GDevelop'],
    } /* 
    {
        img: typeSpeedTest,
        liveLink: 'https://supermoooo.github.io/Typing-Speed-Test/',
        gitHubTrue: true,
        gitHubLink: 'https://github.com/SuperMoooo/Typing-Speed-Test',
        title: 'Type Speed Test',
        desc: 'A type speed test game',
        techs: ['Next.js', 'TypeScript', 'Tailwind'],
    }, */,
    {
        img: rockPaperScissors,
        liveLink: 'https://supermoooo.github.io/rockPaperScissors/',
        gitHubTrue: true,
        gitHubLink: 'https://github.com/SuperMoooo/rockPaperScissors',
        title: 'Rock Paper Scissors',
        desc: 'Rock Paper Scissors game vs computer',
        techs: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        img: ticTacToe,
        liveLink: 'https://supermoooo.github.io/ticTacToe/',
        gitHubTrue: true,
        gitHubLink: 'https://github.com/SuperMoooo/ticTacToe',
        title: 'Tic Tac Toe Game',
        desc: 'Tic Tac Toe game vs computer',
        techs: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        img: blackJackGame,
        liveLink: 'https://supermoooo.github.io/blackJackGame/',
        gitHubTrue: true,
        gitHubLink: 'https://github.com/SuperMoooo/blackJackGame',
        title: 'BlackJack Game',
        desc: 'BlackJack game with infinite money and no split cards',
        techs: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        img: bipo,
        liveLink: 'https://supermoooo.itch.io/bipo',
        gitHubTrue: false,
        gitHubLink: '',
        title: 'Bipo Game',
        desc: 'Game developed within the scope of the game development discipline',
        techs: ['Unreal Engine 5'],
    } /* 
    {
        img: microsoftInter,
        liveLink:
            'https://supermoooo.github.io/microsoftInterviewQuestionPractice/',
        gitHubTrue: true,
        gitHubLink:
            'https://github.com/SuperMoooo/microsoftInterviewQuestionPractice',
        title: 'Practice',
        desc: 'Microsoft Interview Question Practice',
        techs: ['React'],
    },
    {
        img: uberInter,
        liveLink: 'https://supermoooo.github.io/uberInterviewQuestionPractice/',
        gitHubTrue: true,
        gitHubLink:
            'https://github.com/SuperMoooo/uberInterviewQuestionPractice',
        title: 'Practice',
        desc: 'Uber Interview Question Practice',
        techs: ['React'],
    }, */ /* 
    {
        img: customizeBtn,
        liveLink: 'https://supermoooo.github.io/customizeBtn/',
        gitHubTrue: true,
        gitHubLink: 'https://github.com/SuperMoooo/customizeBtn',
        title: 'Customize Button',
        desc: 'Website to customize the button of your app',
        techs: ['React', 'Tailwind', 'Material UI'],
    }, */,
];
