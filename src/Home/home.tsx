import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
export const Home = () => {
    return (
        <div className='tw-flex tw-pt-24 tw-ml-[8vw]'>
            <div className='laptop:tw-text-3xl tablet:tw-text-2xl mobile:tw-text-xl tw-flex tw-flex-col laptop:tw-mt-20 laptop:tw-ml-1'>
                <a className='tw-cursor-pointer tw-mb-3 tw-pl-4 tw-text-purple ' href='https://github.com/ArkadiNazarian' target="_blank" rel="noreferrer noopener"><AiFillGithub /></a>
                <a className='tw-cursor-pointer tw-pl-4 tw-text-purple ' href='https://www.linkedin.com/in/arkadi-nazarian-ab17b2231/' target="_blank" rel="noreferrer noopener" ><AiOutlineLinkedin /></a>
            </div>
            <div className="tw-ml-[5vw]">
                <p className='laptop:tw-text-5xl tablet:tw-text-4xl mobile:tw-text-2xl tw-text-primary'>Hi,<br />I'm Arkadi Nazarian,<br/>Welcome to my page</p>
                <p className='laptop:tw-text-4xl tablet:tw-text-3xl mobile:tw-text-xl tw-text-secondary'>Frontend Developer</p>
            </div>

        </div>
    )
}