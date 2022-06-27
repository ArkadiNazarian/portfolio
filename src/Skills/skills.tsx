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
                <p className="tw-text-4xl tw-text-primary">Skills</p>
                <p className="tw-text-xl tw-text-secondary">My technical level</p>
            </div>
            <div className="tw-grid tw-grid-cols-5">
                <div className="tw-col-start-2 tw-col-end-4">
                    <div>
                        <div className="tw-flex tw-items-center tw-cursor-pointer" onClick={handle_toggle_click}>
                            <div className="tw-text-3xl tw-text-purple tw-pr-4 ">
                                <VscCode />
                            </div>
                            <p className="tw-text-2xl tw-text-primary">Frontent Developer</p>
                            <span className="tw-text-3xl tw-text-purple tw-pl-4 ">
                                {isCollapsed ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
                            </span>
                        </div>
                        <p className="tw-text-base tw-text-secondary">More than a year</p>
                    </div>
                    <div className="tw-pt-3">
                        <p className={isCollapsed ? "tw-flex tw-text-base tw-text-purple" : "tw-hidden"}>HTML & CSS</p>
                        <p className={isCollapsed ? "tw-flex tw-text-base tw-text-purple" : "tw-hidden"}>TypeScript</p>
                        <p className={isCollapsed ? "tw-flex tw-text-base tw-text-purple" : "tw-hidden"}>JavaScript</p>
                        <p className={isCollapsed ? "tw-flex tw-text-base tw-text-purple" : "tw-hidden"}>React.js</p>
                        <p className={isCollapsed ? "tw-flex tw-text-base tw-text-purple" : "tw-hidden"}>Tailwind CSS</p>
                    </div>
                </div>
                <div className="tw-col-start-4">
                    <div>
                        <div className="tw-flex tw-items-center tw-cursor-pointer" onClick={other_handle_toggle_click}>
                        <div className="tw-text-3xl tw-text-purple tw-pr-4 ">
                                <RiComputerLine />
                            </div>
                            <p className="tw-text-2xl tw-text-primary">Other Skills</p>
                            <span className="tw-text-3xl tw-text-purple tw-pl-4 ">
                                {otherisCollapsed ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
                            </span>
                        </div>
                        <p className="tw-text-base tw-text-secondary">More than a year</p>
                    </div>
                    <div className="tw-pt-3">
                        <p className={otherisCollapsed ? "tw-flex tw-text-base tw-text-purple" : "tw-hidden"}>Git</p>
                        <p className={otherisCollapsed ? "tw-flex tw-text-base tw-text-purple" : "tw-hidden"}>Github</p>
                        <p className={otherisCollapsed ? "tw-flex tw-text-base tw-text-purple" : "tw-hidden"}>Cypress</p>
                        <p className={otherisCollapsed ? "tw-flex tw-text-base tw-text-purple" : "tw-hidden"}>Python</p>
                        <p className={otherisCollapsed ? "tw-flex tw-text-base tw-text-purple" : "tw-hidden"}>Express.js</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


