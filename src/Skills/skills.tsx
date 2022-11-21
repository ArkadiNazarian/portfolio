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
            <div className="tw-grid tw-grid-cols-11 tw-ml-8">
                <div className="tw-col-start-2 tw-col-end-7">
                    <div>
                        <div className="tw-flex tw-items-center tw-cursor-pointer" onClick={handle_toggle_click}>
                            <div className="laptop:tw-text-3xl tablet:tw-text-2xl tw-text-purple tw-pr-4 ">
                                <VscCode />
                            </div>
                            <p className="laptop:tw-text-2xl tablet:tw-text-xl tw-text-primary">Frontent Developer</p>
                            <span className="laptop:tw-text-3xl tablet:tw-text-lg tw-text-purple tw-pl-4 ">
                                {isCollapsed ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
                            </span>
                        </div>
                        <p className="laptop:tw-text-base tablet:tw-text-sm tw-text-secondary">More than a year</p>
                    </div>
                    <div className="tw-pt-3">
                        <p className={isCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>HTML & CSS</p>
                        <p className={isCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>TypeScript</p>
                        <p className={isCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>JavaScript</p>
                        <p className={isCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>React.js</p>
                        <p className={isCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>Tailwind CSS</p>
                    </div>
                </div>
                <div className="tw-col-start-7 tw-col-span-4">
                    <div>
                        <div className="tw-flex tw-items-center tw-cursor-pointer" onClick={other_handle_toggle_click}>
                        <div className="laptop:tw-text-3xl tablet:tw-text-2xl tw-text-purple tw-pr-4 ">
                                <RiComputerLine />
                            </div>
                            <p className="laptop:tw-text-2xl tablet:tw-text-xl tw-text-primary">Other Skills</p>
                            <span className="laptop:tw-text-3xl tablet:tw-text-2xl tw-text-purple tw-pl-4 ">
                                {otherisCollapsed ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
                            </span>
                        </div>
                        <p className="laptop:tw-text-base tablet:tw-text-sm tw-text-secondary">More than a year</p>
                    </div>
                    <div className="tw-pt-3">
                        <p className={otherisCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>Git & GitHub</p>
                        <p className={otherisCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>Node.js</p>
                        <p className={otherisCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>Express.js</p>
                        <p className={otherisCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>Cypress</p>
                        <p className={otherisCollapsed ? "tw-flex laptop:tw-text-base tablet:tw-text-sm tw-text-purple" : "tw-hidden"}>Python</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


