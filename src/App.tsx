import { Link } from 'react-scroll';
import { About } from './About/about';
import { Home } from './Home/home';
import { Qualification } from './Qualification/qualification';
import { Skills } from './Skills/skills';
import { FiHome } from "react-icons/fi";
import { SiAboutdotme } from "react-icons/si";
import { RiSettings4Line, RiSuitcaseLine } from "react-icons/ri";
import { Contact } from './Contact/contact';
import { BiMessageDetail } from "react-icons/bi";

export function App() {
  return (
    <div className="tw-h-screen tw-bg-background tw-font-sans tw-tracking-wider">
      <div className='tw-grid tw-grid-cols-8'>
        <div className='tw-col-start-1'>
          <div className="tw-flex tw-text-primary tw-flex-col tw-sticky tw-top-5 ">
            <Link to="home" smooth={true} duration={1000}><FiHome className='tw-text-4xl tw-w-7 tw-cursor-pointer tw-m-7 hover:tw-text-purple' /></Link>
            <Link to="about" smooth={true} duration={1000}><SiAboutdotme className='tw-text-4xl tw-w-7 tw-cursor-pointer tw-m-7 hover:tw-text-purple' /></Link>
            <Link to="skills" smooth={true} duration={1000}><RiSettings4Line className='tw-text-4xl tw-w-7 tw-cursor-pointer tw-m-7 hover:tw-text-purple' /></Link>
            <Link to="qualification" smooth={true} duration={1000}><RiSuitcaseLine className='tw-text-4xl tw-w-7 tw-cursor-pointer tw-m-7 hover:tw-text-purple' /></Link>
            <Link to="contact" smooth={true} duration={1000}><BiMessageDetail className='tw-text-4xl tw-w-7 tw-cursor-pointer tw-m-7 hover:tw-text-purple' /></Link>
          </div>
        </div>
        <div className='tw-bg-background tw-col-start-2 tw-col-end-8'>
          <section id='home'>
            <Home />
          </section>
          <section id='about' >
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
        </div>
      </div>
    </div>
  );
}

