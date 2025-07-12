const ScrollDown = () => {
    return (
        <>
            <div className="flex items-end justify-center mt-37 mb-37">
                {/*<div className="relative w-10 h-16 animate-bounce  border-2 rounded-2xl before:border-white before:border-2 before:absolute before:animate-[topY_1s_ease_infinite] before:content-[''] before:rounded-lg before:top-3 before:left-4 before:w-1 before:h-2"></div>*/}
                <svg className="w-12 h-12 text-gray-500 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </>
    );
}

export default ScrollDown;
