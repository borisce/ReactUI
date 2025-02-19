"use client";

import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 h-16">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className='lg:flexCenter hidden'>
        <Button
          type="button"
          title="Login"
          icon="./user.svg"
          variant="btn_dark_green"
        />
      </div>

      {!menuOpen && (
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className='inline-block cursor-pointer lg:hidden'
          onClick={toggleMenu}
        />
      )}
      
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white p-4 border-l border-gray-500 lg:hidden">
          <ul className="flex flex-col gap-4">
            <li className="flex justify-end mb-4">
              <Image
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className='inline-block cursor-pointer lg:hidden'
                onClick={toggleMenu}
              />
            </li>  
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="regular-16 text-gray-900 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
