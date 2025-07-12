import React from 'react';
import Jobs from './Jobs';
import dualinfor from '../assets/companyImg/dualinfor.webp';
import algoritmo from '../assets/companyImg/algoritmo.webp';
// import mafraTv from '../assets/companyImg/mafraTv.webp';
import pontinhos from '../assets/companyImg/pontinhos.webp';
import mhp from '../assets/companyImg/mhp.png';
import selfEmployed from '../assets/companyImg/self_employed.png';

export default function WorkExperience() {
    const jobs = [
        {
            company: 'MHP - A Porsche Company',
            position: 'Full-Stack Intern',
            date: 'Jul 2025 - Present',
            img: mhp,
        },
        {
            company: 'SELF-EMPLOYED',
            position: 'Part-Time Computer Science Tutor',
            date: 'Oct 2023 - Jun 2025',
            img: selfEmployed,
        }
    ];
    return (
        <section className="mt-40 flex flex-col items-center space-y-12 md:px-24 px-6 lg:relative">
            <h1>Work Experience</h1>
            <div
                style={{
                    gridTemplateRows: `repeat(${jobs.length}, minmax(0, 1fr))`,
                }}
                className={`grid sm:grid-cols-2 grid-cols-1 w-full sm:px-0  z-10  h-full place-items-center sm:container sm:mx-auto`}
            >
                {jobs.map((job, index) => (
                    <Jobs
                        key={`${job}-${index}`}
                        company={job.company}
                        position={job.position}
                        date={job.date}
                        img={job.img}
                        side={index % 2 === 0 ? 0 : 1}
                        rowStart={index + 1}
                    />
                ))}
            </div>
        </section>
    );
}
