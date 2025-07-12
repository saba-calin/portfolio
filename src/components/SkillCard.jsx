export default function SkillCard({ techImg, name }) {
    return (
        <li className=" bg-zinc-900  max-w-sm  rounded-lg p-2 shadow-md space-y-2 grid grid-rows-[1fr_auto] place-items-center w-40 h-48">
            <img className=" w-2/3" src={techImg} alt={techImg} rel="preload" />
            <p className="  text-2xl text-[#fed7aa] text-center">{name}</p>
        </li>
    );
}
