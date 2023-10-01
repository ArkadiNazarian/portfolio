import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
export const Home = () => {
    return (
        <div className='tw-grid tw-grid-cols-6 tw-pt-24 tw-pl-52'>
            <div className='laptop:tw-text-3xl tablet:tw-text-2xl tw-flex tw-flex-col laptop:tw-mt-20 laptop:tw-ml-1'>
                <a className='tw-cursor-pointer tw-mb-3 tw-pl-4 tw-text-purple ' href='https://github.com/ArkadiNazarian' target="_blank" rel="noreferrer noopener"><AiFillGithub /></a>
                <a className='tw-cursor-pointer tw-pl-4 tw-text-purple ' href='https://www.linkedin.com/in/arkadi-nazarian-ab17b2231/' target="_blank" rel="noreferrer noopener" ><AiOutlineLinkedin /></a>
            </div>
            <div className="tw-col-start-2 tw-col-span-4">
                <p className='laptop:tw-text-5xl tablet:tw-text-4xl tw-text-primary'>Hi,<br />I'm Arkadi Nazarian,<br/>Welcome to my page</p>
                <p className='laptop:tw-text-4xl tablet:tw-text-3xl tw-text-secondary'>Frontend Web Developer</p>
            </div>

        </div>
    )
}