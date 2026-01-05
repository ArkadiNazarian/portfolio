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
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';

export function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="tw-h-screen tw-bg-background tw-tracking-wider">

      <div>
        <div className='tw-fixed tw-top-0 tw-left-0 tw-z-50'>
          <div className="laptop:tw-flex tablet:tw-flex mobile:tw-hidden mobile:tw-bg-background tw-text-primary laptop:tw-flex-col tablet:tw-flex-row tablet:tw-justify-between laptop:tw-w-auto tablet:tw-w-[100vw] mobile:tw-w-[110vw]">
            <Link to="home" smooth={true} duration={1000}><FiHome className="laptop:tw-text-4xl tablet:tw-text-3xl mobile:tw-text-lg laptop:tw-w-7 tw-cursor-pointer tw-m-7 hover:tw-text-purple" /></Link>
            <Link to="about" smooth={true} duration={1000}><SiAboutdotme className="laptop:tw-text-4xl tablet:tw-text-3xl mobile:tw-text-lg tw-w-7 tw-cursor-pointer tw-m-7 hover:tw-text-purple" /></Link>
            <Link to="skills" smooth={true} duration={1000}><GiSkills className="laptop:tw-text-4xl tablet:tw-text-3xl mobile:tw-text-lg tw-w-7 tw-cursor-pointer tw-m-7 hover:tw-text-purple" /></Link>
            <Link to="qualification" smooth={true} duration={1000}><RiSuitcaseLine className="laptop:tw-text-4xl tablet:tw-text-3xl mobile:tw-text-lg tw-w-7 tw-cursor-pointer tw-m-7 hover:tw-text-purple" /></Link>
            <Link to="contact" smooth={true} duration={1000}><BiMessageDetail className="laptop:tw-text-4xl tablet:tw-text-3xl mobile:tw-text-lg tw-w-7 tw-cursor-pointer tw-m-7 hover:tw-text-purple" /></Link>
          </div>
          <div className="tw-bg-background tw-text-primary tablet:tw-hidden tw-w-screen tw-pt-2">
            <div className='tw-flex tw-items-end tw-justify-end w-full'>
              {
                isOpen ?
                  <IoClose className="hover:tw-text-purple tw-text-3xl tw-mr-3" onClick={() => setIsOpen(false)} /> :
                  <IoMdMenu className="hover:tw-text-purple tw-text-3xl tw-mr-3" onClick={() => setIsOpen(true)} />
              }
            </div>
            <div className={`
      tw-flex tw-flex-col tw-gap-3 tw-px-3
      ${isOpen ? 'tw-max-h-[500px] tw-opacity-100' : ' tw-max-h-0 tw-opacity-0'}
      tw-transition-all tw-duration-300 tw-ease-in-out tw-overflow-hidden
    `}>
              <Link to="home" onClick={() => setIsOpen(false)} smooth={true} duration={1000} className='tw-flex tw-flex-row tw-gap-2 tw-items-center'>
                <FiHome className="tw-text-lg tw-cursor-pointer hover:tw-text-purple" />
                <p>Home</p>
              </Link>
              <Link to="about" onClick={() => setIsOpen(false)} smooth={true} duration={1000} className='tw-flex tw-flex-row tw-gap-2 tw-items-center'>
                <SiAboutdotme className="tw-text-lg tw-cursor-pointer hover:tw-text-purple" />
                <p>About</p>
              </Link>
              <Link to="skills" onClick={() => setIsOpen(false)} smooth={true} duration={1000} className='tw-flex tw-flex-row tw-gap-2 tw-items-center'>
                <GiSkills className="tw-text-lg tw-cursor-pointer hover:tw-text-purple" />
                <p>Skills</p>
              </Link>
              <Link to="qualification" onClick={() => setIsOpen(false)} smooth={true} duration={1000} className='tw-flex tw-flex-row tw-gap-2 tw-items-center'>
                <RiSuitcaseLine className="tw-text-lg tw-cursor-pointer hover:tw-text-purple" />
                <p>Qualification</p>
              </Link>
              <Link to="contact" onClick={() => setIsOpen(false)} smooth={true} duration={1000} className='tw-flex tw-flex-row tw-gap-2 tw-items-center'>
                <BiMessageDetail className="tw-text-lg tw-cursor-pointer hover:tw-text-purple" />
                <p>Contact</p>
              </Link>
            </div>
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

