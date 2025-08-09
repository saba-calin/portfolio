import SkillCard from './SkillCard';
import htmlImg from '../assets/techsImg/html.webp';
import cssImg from '../assets/techsImg/css.webp';
import jsImg from '../assets/techsImg/js.webp';
import reactImg from '../assets/techsImg/react.webp';
import tailwindImg from '../assets/techsImg/tailwind.webp';
import pythonImg from '../assets/techsImg/python.webp';
import cSharpImg from '../assets/techsImg/cSharp.webp';
import gitImg from '../assets/techsImg/git.webp';
import typeScript from '../assets/techsImg/typeScript.webp';
import java from '../assets/techsImg/java.png';
import springBoot from '../assets/techsImg/spring_boot.png';
import postgresql from '../assets/techsImg/postgres.png';
import aws from '../assets/techsImg/aws.png';
import docker from '../assets/techsImg/docker.png';
import githubActions from '../assets/techsImg/github_actions.png';
import angular from '../assets/techsImg/angular.png';
import cpp from '../assets/techsImg/C++.png'

export default function Skills() {
    const techs = {
        java: { name: 'Java', src: java },
        springBoot: { name: 'Spring Boot', src: springBoot },
        postgresql: { name: 'PostgreSQL', src: postgresql },
        aws: { name: 'AWS', src: aws },
        react: { name: 'React', src: reactImg },
        angular: { name: 'Angular', src: angular },
        docker: { name: 'Docker', src: docker },
        html: { name: 'HTML', src: htmlImg },
        css: { name: 'CSS', src: cssImg },
        js: { name: 'JavaScript', src: jsImg },
        cpp: { name: 'C++', src: cpp },
        tailwind: { name: 'Tailwind', src: tailwindImg },
        typeScript: { name: 'TypeScript', src: typeScript },
        python: { name: 'Python', src: pythonImg },
        cSharp: { name: 'C#', src: cSharpImg },

        git: { name: 'Git/GitHub', src: gitImg },
        githubActions: { name: 'Github Actions', src: githubActions }
    };

    return (
        <>
            <section className="mt-40 flex flex-col items-center space-y-12 md:px-24 px-6 lg:relative">
                <h1 className="text-5xl underline mb-30" style={{ color: '#fed7aa' }}>Skills</h1>
                <ul className="grid grid-cols-2 sm:gap-6 gap-10 md:grid-cols-3 md:gap-12 lg:grid-cols-5 lg:gap-14 place-items-center items-center z-10 mt-10">
                    {Object.keys(techs).map((tech) => (
                        <li key={tech} className="transition-transform duration-300 hover:scale-110">
                            <SkillCard
                                techImg={techs[tech].src}
                                name={techs[tech].name}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
