import githubLogo from '../assets/github-icon.svg';
import instagramLogo from '../assets/instagram-icon.svg';

const NavBar = () => {
    return (
        <>
            <div className="flex items-center justify-center w-full p-5 ">
                <ul className="flex items-center justify-center gap-8 flex-1">
                    <li>
                        <a
                            href="https://www.instagram.com/andre_montoito/"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#fed7aa"
                                stroke="#fed7aa"
                                strokeWidth="1"
                                viewBox="0 0 24 24"
                                className="w-10 h-10 hover:scale-110 transition duration-200"
                            >
                                <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/andre_montoito/"
                            target="_blank"
                        >
                            <img
                                className="w-10 h-10 hover:scale-110 transition duration-200"
                                src={instagramLogo}
                                alt="instagram icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/SuperMoooo" target="_blank">
                            <img
                                className="w-10 h-10 hover:scale-110 transition duration-200"
                                src={githubLogo}
                                alt="github icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/andre-montoito/"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#FED7AA"
                                className="w-10 h-10 hover:scale-110 transition duration-200"
                            >
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;
