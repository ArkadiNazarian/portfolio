import { MdSchool, MdWorkOutline } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FaBuilding } from "react-icons/fa";
export const Qualification = () => {
    return (
        <div>
            <div className="tw-text-center ">
                <p className="tw-text-4xl tw-text-secondary">Qualification</p>
                <p className="tw-text-sm tw-text-third">My personal journey</p>
            </div>
            <div className="tw-grid tw-grid-cols-7">
                <div className="tw-flex tw-items-center tw-col-start-3">
                    <span className="tw-text-primary tw-text-3xl tw-mr-3">
                        <MdSchool />
                    </span>
                    <p className="tw-text-2xl tw-text-primary  tw-mr-5">Education</p>
                </div>
               
                <div className="tw-flex tw-items-center tw-col-start-5">
                    <span className="tw-text-primary tw-text-3xl tw-mr-3">
                        <MdWorkOutline />
                    </span>
                    <p className="tw-text-2xl tw-text-primary ">Work</p>
                </div>
                <div className="tw-flex tw-flex-col tw-col-start-3">
                    <p className="tw-text-base tw-text-secondary">Computer Engineering</p><br/>
                    <p className="tw-text-sm tw-text-third"><FaCalendarAlt/>  2021 - present</p>
                </div>
                
                <div className="tw-flex tw-flex-col tw-col-start-5">
                    <p className="tw-text-base tw-text-secondary">Frenotend Web Developer </p><br/>
                    <p className="tw-text-base tw-text-third"><FaBuilding/>  TeamHive </p><br/>
                    <p className="tw-text-sm tw-text-third"><FaCalendarAlt/>  2021 - present</p><br/>
                    <p className="tw-text-sm tw-text-third"><ImLocation/>  Helsinki-Finland</p>
                </div>
                <div className="tw-flex tw-flex-col tw-col-start-3">
                    <p className="tw-text-base tw-text-secondary">Math and Physics Diploma</p><br/>
                    <p className="tw-text-sm tw-text-third"><FaCalendarAlt/>  2018 - 2021</p>
                </div>
                <div className="tw-flex tw-flex-col tw-col-start-5 tw-col-end-7">
                    <p className="tw-text-base tw-text-secondary">QA Autiomation Testing with Cypress</p><br/>
                    <p className="tw-text-base tw-text-third"><FaBuilding/>  TeamHive </p><br/>
                    <p className="tw-text-sm tw-text-third"><FaCalendarAlt/>  2021 - present</p><br/>
                    <p className="tw-text-sm tw-text-third"><ImLocation/>  Helsinki-Finland</p>
                </div>
            </div>
        </div>

    )
}