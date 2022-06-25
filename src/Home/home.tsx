import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
export const Home = () => {
    return (
        <div className='tw-grid tw-grid-cols-6'>
            <div className='tw-text-2xl tw-flex tw-flex-col tw-mt-20 tw-ml-16'>
                <a className='tw-cursor-pointer tw-mb-3 tw-text-primary ' href='https://github.com/ArkadiNazarian' target="_blank"><AiFillGithub /></a>
                <a className='tw-cursor-pointer tw-text-primary ' href='https://www.linkedin.com/in/arkadi-nazarian-ab17b2231/' target="_blank" ><AiOutlineLinkedin /></a>
            </div>
            <div className="tw-col-start-2 tw-col-span-4">
                <p className='tw-text-5xl tw-text-secondary'>Hi,<br />I'm Arkadi Nazarian,<br/>Welcome to my page</p>
                <p className='tw-text-4xl tw-text-third'>Frontend Web Developer</p>
            </div>

        </div>
    )
}