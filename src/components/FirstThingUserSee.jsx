import me from '../assets/me.jpg'; // Adjust the path as necessary

export default function FirstThingUserSee() {
    return (
        <>
            <div className="relative flex items-center justify-center w-full mt-40 ">
                <div className="flex items-center justify-center w-full flex-col space-y-2 ">
                    <p className="uppercase text-3xl">
                        Calin Sabaila
                    </p>
                    <p className="uppercase text-xl lg:text-6xl" style={{ color: '#fed7aa', fontWeight: '200'}}>
                        Full-Stack Developer
                    </p>
                    <p className="uppercase text-1xl mt-5 mb-2 font-light tracking-wide text-center">
                        Final-year bachelor’s student @ Babeș Bolyai University
                    </p>
                    <div className="flex items-center justify-center gap-6">
                        <div
                            className="w-70 h-70 rounded-full border-4 border-[#fed7aa] overflow-hidden"
                        >
                            <img
                                src={me}
                                alt="Calin Sabaila"
                                className="w-full h-full object-cover"
                                style={{
                                    transform: 'scale(2.3)',
                                    transformOrigin: '58% 85%'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
