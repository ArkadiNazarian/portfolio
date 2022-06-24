import { Link } from 'react-scroll';
import { About } from './About/about';
import { Arkadi } from './Arkadi/arkadi';
import { Index } from './Skills';
import { Skills } from './Skills/skills';

export function App() {
  return (
    <div className="tw-h-screen tw-bg-background tw-font-serif tw-tracking-wider">
      <div className="tw-flex tw-text-secondary tw-justify-center">
        <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-primary" to="Arkadi" smooth={true} duration={1000}>Arkadi</Link>
        <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-primary" to="Arkadi" smooth={true} duration={1000}>Home</Link>
        <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-primary" to="about" smooth={true} duration={1000}>About</Link>
        <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-primary" to="skills" smooth={true} duration={1000}>Skill</Link>
        <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-primary" to="skills" smooth={true} duration={1000}>Education</Link>
        <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-primary" to="services" smooth={true} duration={1000}>Skill</Link>
        <Link className="tw-cursor-pointer tw-m-4 hover:tw-text-primary" to="Skill" smooth={true} duration={1000}>Skill</Link>
      </div>
      <div className='tw-bg-background'>
        <section id='Arkadi'>
          <Arkadi />
        </section>
        <section id='about' >
          <About/>
        </section>
        <section id='skills'>
          <Index/>
        </section>
      </div>
    </div>
  );
}

