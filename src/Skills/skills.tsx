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
            <div className="tw-flex tw-flex-row tw-justify-center">
                <div className="tw-mr-10">
                    <p className="laptop:tw-text-2xl tablet:tw-text-xl tw-text-primary tw-flex tw-items-center tw-cursor-pointer" onClick={handle_toggle_click}><VscCode className="laptop:tw-text-3xl tablet:tw-text-2xl tw-text-purple tw-pr-4" />Frontent Developer <BsChevronCompactDown className={`laptop:tw-text-3xl tablet:tw-text-2xl tw-text-purple tw-pl-4 tw-transition-all tw-duration-1000 tw-origin-custom-origin ${isCollapsed ? "tw-rotate-0" : "tw--rotate-180"}`} /></p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-1000 ${isCollapsed ? "tw-scale-100" : "tw-scale-0"}`}>HTML & CSS</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[1500ms] ${isCollapsed ? "tw-scale-100" : "tw-scale-0"}`}>TypeScript</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[2000ms] ${isCollapsed ? "tw-scale-100" : "tw-scale-0"}`}>JavaScript</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[2500ms] ${isCollapsed ? "tw-scale-100" : "tw-scale-0"}`}>React.js</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[3000ms] ${isCollapsed ? "tw-scale-100" : "tw-scale-0"}`}>Redux.js</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[3500ms] ${isCollapsed ? "tw-scale-100" : "tw-scale-0"}`}>Tailwind CSS</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[4000ms] ${isCollapsed ? "tw-scale-100" : "tw-scale-0"}`}>Cypress</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[4500ms] ${isCollapsed ? "tw-scale-100" : "tw-scale-0"}`}>Jest & React testing library</p>
                </div>
                <div className="tw-ml-10">
                    <p className="laptop:tw-text-2xl tablet:tw-text-xl tw-text-primary tw-flex tw-items-center tw-cursor-pointer" onClick={other_handle_toggle_click}><RiComputerLine className="laptop:tw-text-3xl tablet:tw-text-2xl tw-text-purple tw-pr-4" />Other Skills <BsChevronCompactDown className={`laptop:tw-text-3xl tablet:tw-text-2xl tw-text-purple tw-pl-4 tw-transition-all tw-duration-1000 tw-origin-custom-origin ${otherisCollapsed ? "tw-rotate-0" : "tw--rotate-180"}`} /></p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-1000 ${otherisCollapsed ? "tw-scale-100" : "tw-scale-0"}`}>Git & GitHub</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[1500ms] ${otherisCollapsed ? "tw-scale-100" : "tw-scale-0"}`}>Jira</p>
                    <p className={`tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple tw-transition-all tw-duration-[2000ms] ${otherisCollapsed ? "tw-scale-100" : "tw-scale-0"}`}>Figma</p>
                </div>
            </div>
        </div>
    )
}


