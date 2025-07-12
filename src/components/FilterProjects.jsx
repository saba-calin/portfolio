import React from 'react';

export default function FilterProjects({ openModal }) {
    return (
        <button
            title="Filter projects by tech"
            onClick={openModal}
            className="px-4 py-2 bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors duration-300 flex items-center justify-center gap-4 z-10"
        >
            <abbr className="uppercase sm:text-lg text-sm no-underline">
                Filter
            </abbr>
            <svg
                fill="none"
                strokeWidth={1}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-7 h-7"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
            </svg>
        </button>
    );
}
