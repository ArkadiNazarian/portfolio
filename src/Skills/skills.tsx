import { useCallback, useState } from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { VscCode } from "react-icons/vsc";
import { RiComputerLine } from "react-icons/ri";
export const Skills = () => {

    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
    const handle_toggle_click = useCallback(() => {
        setIsCollapsed((isCollapsed) => !isCollapsed);
    }, []);
    const [otherisCollapsed, othersetIsCollapsed] = useState<boolean>(false);
    const other_handle_toggle_click = useCallback(() => {
        othersetIsCollapsed((otherisCollapsed) => !otherisCollapsed);
    }, []);

    return (
        <div className="tw-pt-20">
            <div className="tw-text-center ">
                <p className="laptop:tw-text-4xl tablet:tw-text-3xl tw-text-primary">Skills</p>
                <p className="laptop:tw-text-xl tablet:tw-text-lg tw-text-secondary">My technical level</p>
            </div>
            <div className="tw-flex tw-flex-row tw-justify-center">
                <div className="tw-mr-10">
                    <p className="laptop:tw-text-2xl tablet:tw-text-xl tw-text-primary tw-flex tw-items-center" onClick={handle_toggle_click}><VscCode className="laptop:tw-text-3xl tablet:tw-text-2xl tw-text-purple tw-pr-4"/>Frontent Developer {isCollapsed ? <BsChevronCompactDown className="laptop:tw-text-3xl tablet:tw-text-2xl tw-text-purple tw-pl-4 "/> : <BsChevronCompactUp className="laptop:tw-text-3xl tablet:tw-text-2xl tw-text-purple tw-pl-4 "/>}</p>
                    <p className={isCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>HTML & CSS</p>
                    <p className={isCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>TypeScript</p>
                    <p className={isCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>JavaScript</p>
                    <p className={isCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>React.js</p>
                    <p className={isCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>Redux.js</p>
                    <p className={isCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>Tailwind CSS</p>
                    <p className={isCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>Cypress</p>
                    <p className={isCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>Jest & React testing library</p>
                </div>
                <div className="tw-ml-10">
                    <p className="laptop:tw-text-2xl tablet:tw-text-xl tw-text-primary tw-flex tw-items-center" onClick={other_handle_toggle_click}><RiComputerLine className="laptop:tw-text-3xl tablet:tw-text-2xl tw-text-purple tw-pr-4"/>Other Skills {otherisCollapsed ? <BsChevronCompactDown className="laptop:tw-text-3xl tablet:tw-text-2xl tw-text-purple tw-pl-4 "/> : <BsChevronCompactUp className="laptop:tw-text-3xl tablet:tw-text-2xl tw-text-purple tw-pl-4 "/>}</p>
                    <p className={otherisCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>Git & GitHub</p>
                    <p className={otherisCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>Jira</p>
                    <p className={otherisCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>Figma</p>
                </div>
            </div>
        </div>
    )
}


