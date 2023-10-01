import { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { VscCode } from "react-icons/vsc";
import { RiComputerLine } from "react-icons/ri";
export const Skills = () => {

    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
    const handle_toggle_click = () => {
        setIsCollapsed((isCollapsed) => !isCollapsed);
    }
    const [otherisCollapsed, othersetIsCollapsed] = useState<boolean>(false);
    const other_handle_toggle_click = () => {
        othersetIsCollapsed((otherisCollapsed) => !otherisCollapsed);
    }

    return (
        <div className="tw-pt-20 ">
            <div className="tw-text-center ">
                <p className="laptop:tw-text-4xl tablet:tw-text-3xl tw-text-primary">Skills</p>
                <p className="laptop:tw-text-xl tablet:tw-text-lg tw-text-secondary">My technical level</p>
            </div>
            <div className={`tw-flex tw-flex-row tw-justify-center tw-transition-all tw-duration-[1000ms] ${isCollapsed ? "tw-h-[35rem]" : "tw-h-72"}`}>
                <div className="tw-mr-10">
                    <p className="laptop:tw-text-2xl tablet:tw-text-xl tw-text-primary tw-flex tw-items-center tw-cursor-pointer" onClick={handle_toggle_click}><VscCode className="laptop:tw-text-3xl tablet:tw-text-2xl tw-text-purple tw-pr-4" />Frontent Developer <BsChevronCompactDown className={`laptop:tw-text-3xl tablet:tw-text-2xl tw-text-purple tw-pl-4 tw-transition-all tw-duration-1000 tw-origin-custom-origin ${isCollapsed ? "tw-rotate-0" : "tw--rotate-180"}`} /></p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[2000ms] ${isCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>React.js</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[1200ms] ${isCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>Next.js</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[1400ms] ${isCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>Redux</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[1600ms] ${isCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>Zustand</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[1800ms] ${isCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>TypesScript</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[2000ms] ${isCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>JavaScript</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[2200ms] ${isCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>Cypress</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[2400ms] ${isCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>Jest & React testing library</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[2600ms] ${isCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>Firebase</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[2800ms] ${isCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>Tailwind CSS</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[3000ms] ${isCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>Material UI</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[3200ms] ${isCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>Styled Component</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[3400ms] ${isCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>HTML & CSS</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[3600ms] ${isCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>MVVM & MVC design patterns</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[3800ms] ${isCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>TDD & DDD developing approach</p>
                </div>
                <div className="tw-ml-10">
                    <p className="laptop:tw-text-2xl tablet:tw-text-xl tw-text-primary tw-flex tw-items-center tw-cursor-pointer" onClick={other_handle_toggle_click}><RiComputerLine className="laptop:tw-text-3xl tablet:tw-text-2xl tw-text-purple tw-pr-4" />Other Skills <BsChevronCompactDown className={`laptop:tw-text-3xl tablet:tw-text-2xl tw-text-purple tw-pl-4 tw-transition-all tw-duration-1000 tw-origin-custom-origin ${otherisCollapsed ? "tw-rotate-0" : "tw--rotate-180"}`} /></p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-1000 ${otherisCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>Git</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[1200ms] ${otherisCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>GitHub</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[1400ms] ${otherisCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>GitLab</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[1600ms] ${otherisCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>Vercel</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[1800ms] ${otherisCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>Postman</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[2000ms] ${otherisCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>Jira</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[2200ms] ${otherisCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>Figma</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[2400ms] ${otherisCollapsed ? "tw-opacity-100" : "tw-opacity-0"}`}>Slack</p>
                </div>
            </div>
        </div>
    )
}


