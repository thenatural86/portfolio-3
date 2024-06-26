import heroImg from '../assets/hero-img2.jpeg'
import { FaGithubSquare, FaLinkedin, FaMedium } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24' id='home'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>I'm Philip</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Full Stack Software Engineer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            Changing my world, one line of code at a time
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/thenatural86' target='_blank'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/philip-smalls' target='_blank'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>

            <a href='https://medium.com/@philip.smalls86'>
              <FaMedium className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-72 rounded-full' />
        </article>
      </div>
    </div>
  )
}
export default Hero
