"use client";

import MenuIcon from '@mui/icons-material/Menu';
import { dark } from '@mui/material/styles/createPalette';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

export default function Menu() {

    const [open, setOpen] = useState(false)

    return (
        <header className='bg-gray text-white w-full'>
            <div className='flex flex-row text-xl'>
                <nav className='flex items-center justify-between p-6'>
                    <FiMenu className='md:hidden sm:block'/>
                    <ul className='flex items-center'>
                        <li className='py-4 md:py-0 md:mr-6'>
                            <a href="/" className='link-underline'>Acceuil</a>
                        </li>
                        <li className='py-4 md:py-0 md:mr-6'>
                            <a href="/ "className='link-underline'>Présentation</a>
                        </li>
                        <li className='py-4 md:py-0 md:mr-6'>
                            <a href="/" className='link-underline'>Formation</a>
                        </li>
                        <li className='py-4 md:py-0 md:mr-6'>
                            <a href="/" className='link-underline'>Carrière</a>
                        </li>
                        <li className='py-4 md:py-0 md:mr-6'>
                            <a href="/" className='link-underline'>Compétences</a>
                        </li>
                        <li className='py-4 md:py-0 md:mr-6'>
                            <a href="/" className='link-underline'>Réalisations</a>
                        </li>
                        <li className='py-4 md:py-0 md:mr-6'>
                            <a href="/" className='link-underline'>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}