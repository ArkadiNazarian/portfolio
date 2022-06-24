import { useCallback, useState } from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
export const Skills = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const handle_toggle_click = useCallback(() => {
        setIsCollapsed((isCollapsed) => !isCollapsed);
    }, []);
    const [otherisCollapsed, othersetIsCollapsed] = useState<boolean>(false);
    const other_handle_toggle_click = useCallback(() => {
        othersetIsCollapsed((otherisCollapsed) => !otherisCollapsed);
    }, []);
    return (
        <div>
            <div className="tw-text-center ">
                <p className="tw-text-4xl tw-text-secondary">Skills</p>
                <p className="tw-text-sm tw-text-third">My technocal level</p>
            </div>
            <div className="tw-grid tw-grid-cols-7">
                <div className="tw-col-start-3 ">
                    <div>
                        <div className="tw-flex" onClick={handle_toggle_click}>
                            <p className="tw-text-2xl tw-text-secondary">Frontent Developer</p>
                            <span className="tw-text-3xl tw-text-primary tw-pl-4 tw-pt-5">
                                {isCollapsed ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
                            </span>
                        </div>
                        <p className="tw-text-base tw-text-third">More than a year</p>
                    </div>
                    <div className="tw-pt-3">
                        <p className={isCollapsed ? "tw-flex tw-text-xs tw-text-secondary" : "tw-hidden"}>HTML & CSS</p>
                        <p className={isCollapsed ? "tw-flex tw-text-xs tw-text-secondary" : "tw-hidden"}>TypeScript</p>
                        <p className={isCollapsed ? "tw-flex tw-text-xs tw-text-secondary" : "tw-hidden"}>JavaScript</p>
                        <p className={isCollapsed ? "tw-flex tw-text-xs tw-text-secondary" : "tw-hidden"}>React</p>
                        <p className={isCollapsed ? "tw-flex tw-text-xs tw-text-secondary" : "tw-hidden"}>Tailwind CSS</p>
                    </div>
                </div>
                <div className="tw-col-start-5 ">
                <div>
                        <div className="tw-flex" onClick={other_handle_toggle_click}>
                            <p className="tw-text-2xl tw-text-secondary">Other Skills</p>
                            <span className="tw-text-3xl tw-text-primary tw-pl-4 tw-pt-5">
                                {otherisCollapsed ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
                            </span>
                        </div>
                        <p className="tw-text-base tw-text-third">More than a year</p>
                    </div>
                    <div className="tw-pt-3">
                        <p className={otherisCollapsed ? "tw-flex tw-text-xs tw-text-secondary" : "tw-hidden"}>Git</p>
                        <p className={otherisCollapsed ? "tw-flex tw-text-xs tw-text-secondary" : "tw-hidden"}>Github</p>
                        <p className={otherisCollapsed ? "tw-flex tw-text-xs tw-text-secondary" : "tw-hidden"}>Cypress</p>
                        <p className={otherisCollapsed ? "tw-flex tw-text-xs tw-text-secondary" : "tw-hidden"}>Python</p>
                        <p className={otherisCollapsed ? "tw-flex tw-text-xs tw-text-secondary" : "tw-hidden"}>Express.js</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


