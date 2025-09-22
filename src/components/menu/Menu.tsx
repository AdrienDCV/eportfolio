"use client";

import Link from 'next/link';
import {useEffect, useState} from 'react';
import { FiMenu } from 'react-icons/fi';
import { VscClose } from "react-icons/vsc";

export default function Menu() {

    const [open, setOpen] = useState(false)

    const links = [
        { id: 'home', pageName: 'Home', url: '/' },
        { id: 'presentation', pageName: 'Presentation', url: '/presentation' },
        { id: 'formation', pageName: 'Education', url: '/formation' },
        { id: 'career', pageName: 'Career', url: '/career' },
        { id: 'skills', pageName: 'Skills', url: '/skills' },
        { id: 'projects', pageName: 'Projects', url: '/projects' },
        { id: 'contact', pageName: 'Contact', url: '/contact' }
    ]

    return (
        <section className="bg-gray text-white font-bold sticky top-0 z-10">
            <nav className='flex justify-between p-6 md:text-xl'>
                <VscClose className={`cursor text-2xl text-red z-10 md:hidden ${open ? 'sm:block' : 'hidden'}`} onClick={() => setOpen(!open)} />
                <FiMenu className={`cursor text-xl z-10 md:hidden ${!open ? 'sm:block' : 'hidden'}`} onClick={() => setOpen(!open)} />
                <ul className={`${open ? 'block bg-gray w-screen px-7' : 'hidden'} md:flex absolute left-0 py-7 flex-col md:static md:py-0 md:w-min md:transform-none md:border-none md:flex-row`}>
                    { 
                        links.map( (link) => (
                            <li  key={ link.id } className='py-2 md:py-0 md:mr-6'>
                                <Link href={ link.url } className='link-underline'>{ link.pageName }</Link>
                            </li>
                        )) 
                    }
                </ul>
            </nav>
        </section>
    );

}