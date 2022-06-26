import { Link } from 'react-scroll';
import { About } from './About/about';
import { Home } from './Home/home';
import { Qualification } from './Qualification/qualification';
import { Skills } from './Skills/skills';

export function App() {
  return (
    <div className="tw-h-screen tw-bg-background tw-font-sans tw-tracking-wider">
      <div >
        <div className="tw-flex tw-text-primary tw-justify-center tw-sticky tw-top-5 ">
          <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-purple" to="home" smooth={true} duration={1000}>Home</Link>
          <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-purple" to="about" smooth={true} duration={1000}>About</Link>
          <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-purple" to="skills" smooth={true} duration={1000}>Skill</Link>
          <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-purple" to="qualification" smooth={true} duration={1000}>Qualification</Link>
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

