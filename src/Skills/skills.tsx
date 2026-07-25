import { VscCode } from "react-icons/vsc";
import { RiComputerLine } from "react-icons/ri";
export const Skills = () => {

    return (
        <div className="tw-pt-20">
            <div className="tw-text-center ">
                <p className="laptop:tw-text-4xl tablet:tw-text-3xl mobile:tw-text-2xl tw-text-primary">Skills</p>
                <p className="laptop:tw-text-xl tablet:tw-text-lg mobile:tw-text-base tw-text-secondary">My technical level</p>
            </div>
            <div className="tw-flex mobile:tw-flex-col tablet:tw-flex-row tw-justify-center tw-gap-28">
                <div>
                    <p className="laptop:tw-text-2xl tablet:tw-text-xl mobile:tw-text-lg tw-text-primary tw-flex tw-items-center tw-cursor-pointer tw-justify-center"><VscCode className="laptop:tw-text-3xl tablet:tw-text-2xl mobile:tw-text-4xl tw-text-purple tw-pr-4" />Frontent Developer </p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left">React.js</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left">Next.js</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left">Redux</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left">Zustand</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left">TypesScript</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left">JavaScript</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left">Cypress</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left">Jest & React testing library</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left">Firebase</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left">Tailwind CSS</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left">Material UI</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left">Styled Component</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left">HTML & CSS</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left">MVVM & MVC design patterns</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left">TDD & DDD developing approach</p>
                </div>
                <div>
                    <p className="laptop:tw-text-2xl tablet:tw-text-xl mobile:tw-text-lg tw-text-primary tw-flex tw-items-center tw-cursor-pointer tw-justify-center"><RiComputerLine className="laptop:tw-text-3xl tablet:tw-text-2xl mobile:tw-text-4xl tw-text-purple tw-pr-4" />Other Skills </p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left" >Git</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left" >GitHub</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left" >GitLab</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left" >Vercel</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left" >Postman</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left" >Jira</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left" >Figma</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-purple mobile:tw-text-center tablet:tw-text-left" >Slack</p>
                </div>
            </div>
        </div>
    )
}


