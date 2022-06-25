import { Link } from 'react-scroll';
import { About } from './About/about';
import { Home } from './Home/home';
import { Qualification } from './Qualification/qualification';
import { Skills } from './Skills/skills';

export function App() {
  return (
    <div className="tw-h-screen tw-bg-background tw-font-serif tw-tracking-wider">
      <div className="tw-flex tw-text-secondary tw-justify-center">
        <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-primary" to="home" smooth={true} duration={1000}>Home</Link>
        <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-primary" to="about" smooth={true} duration={1000}>About</Link>
        <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-primary" to="skills" smooth={true} duration={1000}>Skill</Link>
        <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-primary" to="qualification" smooth={true} duration={1000}>Qualification</Link>
      </div>
      <div className='tw-bg-background'>
        <section id='home'>
          <Home />
        </section>
        <section id='about' >
          <About/>
        </section>
        <section id='skills'>
          <Skills/>
        </section>
        <section id='qualification'>
          <Qualification/>
        </section>
      </div>
    </div>
  );
}

