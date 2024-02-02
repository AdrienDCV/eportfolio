"use client";

import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

export default function Menu() {

    const [open, setOpen] = useState(true)

    return (
        <header className="bg-gray text-white font-bold">
            <nav className='flex justify-between p-6 md:text-xl'>
                <FiMenu className='cursor text-xl z-10 md:hidden sm:block' onClick={() => setOpen(!open)} />
                <ul className={`${open ? 'block bg-gray w-screen px-7' : 'hidden'} md:flex absolute left-0 py-7 flex-col md:static md:py-0 md:w-min md:transform-none md:border-none md:flex-row`}>
                    <li className='py-2 md:py-0 md:mr-6'>
                        <a href="/" className='link-underline'>Acceuil</a>
                    </li>
                    <li className='py-2 md:py-0 md:mr-6'>
                        <a href="/ "className='link-underline'>Présentation</a>
                    </li>
                    <li className='py-2 md:py-0 md:mr-6'>
                        <a href="/" className='link-underline'>Formation</a>
                    </li>
                    <li className='py-2 md:py-0 md:mr-6'>
                        <a href="/" className='link-underline'>Carrière</a>
                    </li>
                    <li className='py-2 md:py-0 md:mr-6'>
                        <a href="/" className='link-underline'>Compétences</a>
                    </li>
                    <li className='py-2 md:py-0 md:mr-6'>
                        <a href="/" className='link-underline'>Réalisations</a>
                    </li>
                    <li className='py-2 md:py-0 md:mr-6'>
                        <a href="/" className='link-underline'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );

}