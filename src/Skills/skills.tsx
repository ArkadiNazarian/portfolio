import { useCallback, useState } from "react";
import { Dropdown, IFormProps } from "./dropdown"
import { BsFillArrowDownSquareFill,BsFillArrowUpSquareFill } from "react-icons/bs";
export const Skills = (props: IFormProps) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
    const handle_toggle_click = useCallback(() => {
        setIsCollapsed((isCollapsed) => !isCollapsed);
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
                        <button className="tw-text-xl tw-bg-background tw-text-secondary tw-border-none"
                            onClick={handle_toggle_click}
                        >Frontent Developer</button>
                        <p className="tw-text-sm tw-text-third">More than a year</p>
                        <div>
                        {isCollapsed ? <BsFillArrowDownSquareFill /> : <BsFillArrowUpSquareFill />}
                        </div>
                    </div>
                    <div>
                        <p className= {isCollapsed?"tw-flex":"tw-hidden"}>html</p>
                    </div>
                </div>
                <div className="tw-col-start-5 ">
                    <div>
                        <button className="tw-text-xl tw-text-secondary">Other Skills</button>
                        <p className="tw-text-sm tw-text-third">More than a year</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function setIsCollapsed(arg0: (isCollapsed: any) => boolean) {
    throw new Error("Function not implemented.");
}
