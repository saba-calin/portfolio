import React from 'react';

export default function Jobs({ company, position, date, img, side, rowStart }) {
    return (
        <div
            style={{ gridRowStart: rowStart }}
            className={`grid grid-rows-[auto_auto_1fr] my-8 w-full h-full border-l-[1px]  border-zinc-700 ${
                side === 0
                    ? 'sm:col-start-1  sm:border-r-[1px] sm:border-l-transparent sm:border-zinc-700'
                    : ' sm:col-start-2 sm:ml-[-0.1rem] sm:border-l-[1px] sm:border-zinc-700'
            } `}
        >
            <div
                className={`flex justify-between ${
                    side === 0 ? 'flex-row' : 'sm:flex-row-reverse'
                }`}
            >
                <picture className="pl-2 sm:pl-0 ">
                    <img
                        src={img}
                        alt={img}
                        className="object-cover rounded-lg w-15 h-15 "
                        rel="preload"
                    />
                </picture>
                <div
                    className={`grid items-end text-left flex-1 ml-4 sm:ml-0 ${
                        side === 0
                            ? 'text-left sm:ml-4'
                            : 'sm:text-right sm:mr-4'
                    } `}
                >
                    <h1 className="uppercase font-bold">{company}</h1>
                </div>
                <div
                    className={`${
                        side === 0
                            ? 'text-right mr-[0.5rem]'
                            : 'sm:text-left sm:ml-[0.5rem]'
                    } grid items-end   text-right`}
                >
                    <h2 className="font-thin">{date}</h2>
                </div>
            </div>
            <div>
                <div className="w-full h-[1px] bg-zinc-700 my-1"></div>
                <h3
                    className={`font-thin pl-2 sm:pl-0 ${
                        side === 0 ? ' text-left' : 'sm:text-right'
                    }`}
                >
                    {position}
                </h3>
            </div>
        </div>
    );
}
