import { MdSchool, MdWorkOutline } from "react-icons/md";
import { FaCalendarAlt,FaLaptopCode } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FaBuilding } from "react-icons/fa";
export const Qualification = () => {
    return (
        <div className="tw-pt-20">
            <div className="tw-text-center ">
                <p className="tw-text-4xl tw-text-primary">Qualification</p>
                <p className="tw-text-xl tw-text-secondary">My personal journey</p>
            </div>
            <div className="tw-grid tw-grid-cols-7">
                <div className="tw-flex tw-items-center tw-col-start-3">
                    <span className="tw-text-purple tw-text-3xl tw-mr-3">
                        <MdSchool />
                    </span>
                    <p className="tw-text-2xl tw-text-purple  tw-mr-5">Education</p>
                </div>
               
                <div className="tw-flex tw-items-center tw-col-start-5">
                    <span className="tw-text-purple tw-text-3xl tw-mr-3">
                        <MdWorkOutline />
                    </span>
                    <p className="tw-text-2xl tw-text-purple ">Work</p>
                </div>
                <div className="tw-flex tw-flex-col tw-col-start-3">
                    <p className="tw-text-base tw-text-primary">Computer Engineering</p><br/>
                    <p className="tw-text-sm tw-text-secondary"><FaCalendarAlt className="tw-text-purple"/>  2021 - present</p>
                </div>
                
                <div className="tw-flex tw-flex-col tw-col-start-5">
                    <p className="tw-text-base tw-text-primary">FullStack Web Developer </p><br/>
                    <p className="tw-text-base tw-text-secondary"><FaBuilding className="tw-text-purple"/>  TeamHive </p><br/>
                    <p className="tw-text-base tw-text-secondary"><FaLaptopCode className="tw-text-purple"/>  TypeScript , React.js , Node.js , Express.js </p><br/>
                    <p className="tw-text-sm tw-text-secondary"><FaCalendarAlt className="tw-text-purple"/>  2021 - present</p><br/>
                    <p className="tw-text-sm tw-text-secondary"><ImLocation className="tw-text-purple"/>  Helsinki - Finland</p>
                </div>
                <div className="tw-flex tw-flex-col tw-col-start-3">
                    <p className="tw-text-base tw-text-primary">Math and Physics Diploma</p><br/>
                    <p className="tw-text-sm tw-text-secondary"><FaCalendarAlt className="tw-text-purple"/>  2018 - 2021</p>
                </div>
                <div className="tw-flex tw-flex-col tw-col-start-5 tw-col-end-7">
                    <p className="tw-text-base tw-text-primary">QA Automation Tester</p><br/>
                    <p className="tw-text-base tw-text-secondary"><FaBuilding className="tw-text-purple"/>  TeamHive </p><br/>
                    <p className="tw-text-base tw-text-secondary"><FaLaptopCode className="tw-text-purple"/>  Cypress </p><br/>
                    <p className="tw-text-sm tw-text-secondary"><FaCalendarAlt className="tw-text-purple"/>  2021 - present</p><br/>
                    <p className="tw-text-sm tw-text-secondary"><ImLocation className="tw-text-purple"/>  Helsinki - Finland</p>
                </div>
            </div>
        </div>

    )
}