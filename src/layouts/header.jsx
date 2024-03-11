'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';

import React from 'react';
import logo from '../assets/img/logo 2.png' ;


export const header = () => {
    return (
        <>
            <Navbar className='w-[100%] fixed ps-10' fluid  >
                <Navbar.Brand className='ps-10' >
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='pe-10'>
                    <Navbar.Link href="#Home" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link  href="#About">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="#Skills">Skills</Navbar.Link>
                    <Navbar.Link href="#Projects">Projects</Navbar.Link>
                    <Navbar.Link href="#Contact">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default header;