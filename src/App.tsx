import { Link } from 'react-scroll';
import { About } from './About/about';
import { Home } from './Home/home';
import { Qualification } from './Qualification/qualification';
import { Skills } from './Skills/skills';
import { FiHome } from "react-icons/fi";
import { SiAboutdotme } from "react-icons/si";
import { RiPhoneLine,RiSettings4Line,RiSuitcaseLine } from "react-icons/ri";

export function App() {
  return (
    <div className="tw-h-screen tw-bg-background tw-font-sans tw-tracking-wider">
      <div >
        <div className="tw-flex tw-text-primary tw-flex-col tw-sticky tw-top-5 ">
          <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-purple" to="home" smooth={true} duration={1000}><FiHome/></Link>
          <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-purple" to="about" smooth={true} duration={1000}><SiAboutdotme/></Link>
          <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-purple" to="skills" smooth={true} duration={1000}><RiSettings4Line/></Link>
          <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-purple" to="qualification" smooth={true} duration={1000}><RiSuitcaseLine/></Link>
          <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-purple" to="contact" smooth={true} duration={1000}><RiPhoneLine/></Link>
        </div>
        <div className='tw-bg-background'>
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
        </div>
      </div>
    </div>
  );
}

