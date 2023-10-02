import { Link } from 'react-scroll';
import { About } from './About/about';
import { Home } from './Home/home';
import { Qualification } from './Qualification/qualification';
import { Skills } from './Skills/skills';
import { FiHome } from "react-icons/fi";
import { SiAboutdotme } from "react-icons/si";
import { RiSuitcaseLine } from "react-icons/ri";
import { Contact } from './Contact/contact';
import { BiMessageDetail } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";

export function App() {
  return (
    <div className="tw-h-screen tw-bg-background tw-tracking-wider">
      <div>
        <div className='tw-fixed tw-top-0 tw-left-0 tw-z-50'>
          <div className="laptop:tw-flex tablet:tw-flex mobile:tw-flex mobile:tw-flex-row mobile:tw-bg-background tw-text-primary laptop:tw-flex-col tablet:tw-flex-row tablet:tw-justify-between laptop:tw-w-auto tablet:tw-w-[100vw] mobile:tw-w-[110vw]">
            <Link to="home" smooth={true} duration={1000}><FiHome className="laptop:tw-text-4xl tablet:tw-text-3xl mobile:tw-text-lg laptop:tw-w-7 tw-cursor-pointer tw-m-7 hover:tw-text-purple" /></Link>
            <Link to="about" smooth={true} duration={1000}><SiAboutdotme className="laptop:tw-text-4xl tablet:tw-text-3xl mobile:tw-text-lg tw-w-7 tw-cursor-pointer tw-m-7 hover:tw-text-purple" /></Link>
            <Link to="skills" smooth={true} duration={1000}><GiSkills className="laptop:tw-text-4xl tablet:tw-text-3xl mobile:tw-text-lg tw-w-7 tw-cursor-pointer tw-m-7 hover:tw-text-purple" /></Link>
            <Link to="qualification" smooth={true} duration={1000}><RiSuitcaseLine className="laptop:tw-text-4xl tablet:tw-text-3xl mobile:tw-text-lg tw-w-7 tw-cursor-pointer tw-m-7 hover:tw-text-purple" /></Link>
            <Link to="contact" smooth={true} duration={1000}><BiMessageDetail className="laptop:tw-text-4xl tablet:tw-text-3xl mobile:tw-text-lg tw-w-7 tw-cursor-pointer tw-m-7 hover:tw-text-purple" /></Link>
          </div>
        </div>
        <div className='tw-bg-background '>
          <section id='home'>
            <Home />
          </section>
          <section id='about'>
            <About />
          </section>
          <section id='skills'>
            <Skills />
          </section>
          <section id='qualification'>
            <Qualification />
          </section>
          <section id='contact'>
            <Contact />
          </section>
          <p className='tw-text-secondary tw-p-2'>2023 Developed by Arkadi Nazarian </p>
        </div>
      </div>
    </div>
  );
}

