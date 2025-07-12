import { PROJECTS } from '../lib/constants';
import FilterProjects from './FilterProjects';
import ProjectCard from './ProjectCard';

export default function Projects({ openModal, projectsToSee }) {
    return (
        <>
            <section className="flex items-end justify-center flex-col w-full px-6 md:px-24 space-y-12">
                <div className="flex flex-row items-center justify-between w-full mt-40 lg:relative">
                    <h1>Projects</h1>
                </div>

                <ul className="grid grid-cols-1 lg:gap-8 gap-4 w-full sm:grid-cols-2 lg:grid-cols-3 z-10 ">
                    {PROJECTS.map(
                        (project, index) =>
                            project.techs.some((tech) =>
                                projectsToSee.includes(tech.toLocaleLowerCase())
                            ) && (
                                <ProjectCard
                                    key={`${project.title}-${index}`}
                                    img={project.img}
                                    liveLink={project.liveLink}
                                    gitHubTrue={project.gitHubTrue}
                                    gitHubLink={project.gitHubLink}
                                    title={project.title}
                                    desc={project.desc}
                                    techs={project.techs}
                                />
                            )
                    )}
                </ul>
            </section>
        </>
    );
}
