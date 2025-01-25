import aboutSvg from '../assets/about-2.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='about me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Creative and results-driven Software Engineer with proven expertise
            in crafting clean, efficient code and solving complex technical
            problems. Proficient in JavaScript, TypeScript, Node.js, React,
            Redux, Python, Django, Ruby on Rails, GitHub Actions, and Docker.
            Adept at collaborating in Agile environments and utilizing
            Test-Driven Development (TDD) to deliver scalable, high-quality
            software solutions that consistently exceed client expectations.
            Passionate about contributing to innovative teams and driving
            impactful software projects, I am seeking a role where I can
            leverage my technical skills and problem-solving abilities to build
            cutting-edge applications while continuing to grow professionally.
          </p>
        </article>
      </div>
    </section>
  )
}
export default About
