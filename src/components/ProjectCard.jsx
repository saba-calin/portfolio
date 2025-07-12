export default function ProjectCard({
    img,
    liveLink,
    gitHubTrue,
    gitHubLink,
    title,
    desc,
    techs,
}) {
    const techsList = techs;
    return (
        <li className="grid grid-row-[1fr_auto] text-left  gap-4 rounded-lg shadow-md bg-zinc-900">
            <a href={liveLink} target="_blank" rel="noreferrer">
                <picture className="w-full h-full">
                    <img
                        className="w-full h-full object-cover object-center rounded-t-lg aspect-video "
                        src={img}
                        alt={img}
                        rel="preload"
                        loading="lazy"
                    />
                </picture>
            </a>
            <section className="flex flex-col text-left justify-center  p-4 pt-0 h-72">
                <p className="uppercase font-bold text-white md:text-2xl sm:text-xl text-2xl">
                    {title}
                </p>
                <div className="w-full h-[1px] bg-white my-1"></div>
                <p className=" text-zinc-300 mt-1 h-full">{desc}</p>
                <ul className="flex items-start justify-left flex-wrap  text-left gap-2 text-[#fed7aa] ">
                    {techsList.map((tech, index) => (
                        <li key={tech} className="w-fit">
                            {tech}
                            {techsList.length - 1 !== index && ','}
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col items-start justify-between gap-4 mt-4">
                    <div className="flex items-start justify-end flex-row gap-2 ">
                        {/*<a*/}
                        {/*    className="hover:underline  font-bold text-white bg-red-700 uppercase border border-red-500 rounded-md p-1 px-2"*/}
                        {/*    href={liveLink}*/}
                        {/*    target="_blank"*/}
                        {/*>*/}
                        {/*    Live*/}
                        {/*</a>*/}
                        <a
                            className={`hover:underline hover:text-white font-bold rounded-md p-1 px-2 border bg-gray-800 border-gray-800 text-white uppercase ${
                                gitHubTrue ? '' : 'hidden'
                            }`}
                            href={gitHubLink}
                            target="_blank"
                        >
                            Github
                        </a>
                    </div>
                </div>
            </section>
        </li>
    );
}
