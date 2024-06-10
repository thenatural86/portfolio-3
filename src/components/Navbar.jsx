import React from 'react'
import { links } from '../data'
import logo2 from '../assets/logo2.png'

const Navbar = () => {
  return (
    <div className='bg-emerald-100 sticky top-0'>
      <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:item-center sm:py-8 '>
        <h2 className='text-3xl font-bold'>
          <a href='#home'>
            <img src={logo2} alt='logo' height='10px' className='w-full h-8' />
          </a>
        </h2>
        <div className='flex gap-x-3'>
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-widest px-6 hover:text-emerald-600 duration-300 hover:underline'
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Navbar
