import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='about me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Creative-minded Software Engineer adept at crafting clean, efficient
            code and tackling complex challenges. Proficient in a wide range of
            technologies, with a strong focus on JavaScript/TypeScript and its
            associated frameworks (React/Redux), as well as experience with
            backend technologies like NodeJS, Python, and Ruby. Skilled in
            collaborating within Agile environments to deliver high-quality
            software solutions that meet and exceed client expectations.
          </p>
        </article>
      </div>
    </section>
  )
}
export default About
