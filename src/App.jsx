import { useEffect, useRef, useState } from "react";
import ScrollDown from "./components/ScrollDown.jsx";
import NavBar from "./components/NavBar.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import FirstThingUserSee from "./components/FirstThingUserSee.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

const greetings = [
    "Hello 👋",
    "Bonjour 🇫🇷",
    "Hola 🇪🇸",
    "こんにちは 🇯🇵",
    "안녕하세요 🇰🇷",
    "Ciao 🇮🇹",
    "नमस्ते 🇮🇳",
    "Olá 🇧🇷",
    "Hallo 🇩🇪",
];
const durations = [1200, 250, 250, 250, 250, 250, 250, 250, 250];

function App() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [projectsToSee, setProjectsToSee] = useState([
        "react",
        "react native",
        "next.js",
    ]);

    const [splashIndex, setSplashIndex] = useState(0);
    const [showSplash, setShowSplash] = useState(true);
    const [isLifting, setIsLifting] = useState(false);
    const timerRef = useRef(null);

    const handleOpenModal = () => {
        setModalIsOpen((prev) => !prev);
    };

    const handleAddToSee = (values, operation) => {
        if (operation === true) {
            setProjectsToSee((prev) => [
                ...prev,
                ...values.filter((value) => !prev.includes(value)),
            ]);
        } else {
            setProjectsToSee((prev) =>
                prev.filter((tech) => !values.includes(tech))
            );
        }
    };

    // Animate greetings
    useEffect(() => {
        function nextGreeting(index) {
            if (index >= greetings.length) {
                setIsLifting(true);
                setTimeout(() => setShowSplash(false), 1000);
                return;
            }

            setSplashIndex(index);
            timerRef.current = setTimeout(() => {
                nextGreeting(index + 1);
            }, durations[index]);
        }

        nextGreeting(0);
        return () => clearTimeout(timerRef.current);
    }, []);

    // Disable scroll during splash
    useEffect(() => {
        document.body.style.overflow = showSplash ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showSplash]);


    return (
        <>
            <div className="scroll-smooth relative bg-gradient-to-b from-[#161616] to-[#080808] text-white font-extralight tracking-widest h-full">
                {showSplash && (
                    <div
                        className={`fixed top-0 left-0 w-full h-full bg-black text-white z-[9999] flex items-center justify-center text-3xl sm:text-4xl font-semibold transition-all duration-1000 ${
                            isLifting ? "animate-liftUp" : ""
                        }`}
                    >
                        {greetings[splashIndex]}
                    </div>
                )}

                <section className="overflow-x-hidden">
                    <NavBar />
                    <FirstThingUserSee />
                    <ScrollDown />
                </section>
                <main>
                    <Projects
                        openModal={handleOpenModal}
                        projectsToSee={projectsToSee}
                    />
                    <Skills />
                    <WorkExperience />
                    {/*<Contact />*/}
                </main>
            </div>

            <style>{`
                @keyframes liftUp {
                    0% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                }

                .animate-liftUp {
                    animation: liftUp 1s forwards;
                }
            `}</style>
        </>
    );
}

export default App;
