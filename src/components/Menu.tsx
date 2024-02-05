"use client";

import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { VscClose } from "react-icons/vsc";

export default function Menu() {

    const [open, setOpen] = useState(true)

    const links = [
        { id: 1, pageName: 'Acceuil', url: '/home' },
        { id: 2, pageName: 'Présentation', url: '/presentation' },
        { id: 3, pageName: 'Fromation', url: '/formation' },
        { id: 4, pageName: 'Carrière', url: '/career' },
        { id: 5, pageName: 'Compétences', url: '/skils' },
        { id: 6, pageName: 'Réalisations', url: '/projects' },
        { id: 7, pageName: 'Contact', url: '/contact' }
    ]

    return (
        <header className="bg-gray text-white font-bold">
            <nav className='flex justify-between p-6 md:text-xl'>
                <VscClose className={`cursor text-2xl text-red z-10 md:hidden ${open ? 'sm:block' : 'hidden'}`} onClick={() => setOpen(!open)} />
                <FiMenu className={`cursor text-xl z-10 md:hidden ${!open ? 'sm:block' : 'hidden'}`} onClick={() => setOpen(!open)} />
                <ul className={`${open ? 'block bg-gray w-screen px-7' : 'hidden'} md:flex absolute left-0 py-7 flex-col md:static md:py-0 md:w-min md:transform-none md:border-none md:flex-row`}>
                    { 
                        links.map( (link) => (
                            <li  key={ link.id } className='py-2 md:py-0 md:mr-6'>
                                <a href={ link.url } className='link-underline'>{ link.pageName }</a>
                            </li>
                        )) 
                    }
                </ul>
            </nav>
        </header>
    );

}