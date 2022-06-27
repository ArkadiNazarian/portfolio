import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
export const Home = () => {
    return (
        <div className='tw-grid tw-grid-cols-6 tw-pt-20'>
            <div className='tw-text-3xl tw-flex tw-flex-col tw-mt-20 tw-ml-16'>
                <a className='tw-cursor-pointer tw-mb-3 tw-pl-4 tw-text-purple ' href='https://github.com/ArkadiNazarian' target="_blank"><AiFillGithub /></a>
                <a className='tw-cursor-pointer tw-pl-4 tw-text-purple ' href='https://www.linkedin.com/in/arkadi-nazarian-ab17b2231/' target="_blank" ><AiOutlineLinkedin /></a>
            </div>
            <div className="tw-col-start-2 tw-col-span-4">
                <p className='tw-text-5xl tw-text-primary'>Hi,<br />I'm Arkadi Nazarian,<br/>Welcome to my page</p>
                <p className='tw-text-4xl tw-text-secondary'>Frontend Web Developer</p>
            </div>

        </div>
    )
}