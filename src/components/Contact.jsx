export default function Contact() {
    return (
        <section className="mt-40 flex items-center justify-center flex-col space-y-12 md:px-24 px-6 lg:relative">
            <h1>Contact</h1>
            <div className="p-4 rounded-lg shadow flex z-10 items-center justify-center flex-col w-70 md:w-[42rem] lg:w-[56rem] h-36">
                <div className="text-xl text-center text-[#fed7aa] md:text-2xl lg:text-3xl grid grid-rows-2 gap-4 place-items-center flex-col">
                    <div className="flex items-center justify-center flex-row space-x-3">
                        <picture className="h-full flex items-center justify-center md:mt-[0.3rem] mt-[0.2rem]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                fill="#fed7aa"
                                viewBox="0 0 24 24"
                                className="sm:w-6 sm:h-6 w-4 h-4"
                            >
                                <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                            </svg>
                        </picture>
                        <a
                            href="mailto:andremontoito@gmail.com"
                            className="hover:underline"
                        >
                            andremontoito@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
