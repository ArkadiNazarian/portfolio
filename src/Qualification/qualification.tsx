import { MdSchool, MdWorkOutline } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FaBuilding } from "react-icons/fa";
export const Qualification = () => {
    return (
        <div className="tw-pt-20">
            <div className="tw-text-center ">
                <p className="laptop:tw-text-4xl tablet:tw-text-3xl tw-text-primary">Qualification</p>
                <p className="laptop:tw-text-xl tablet:tw-text-lg tw-text-secondary">My personal journey</p>
            </div>
            <div className="tw-flex tw-flex-row tw-justify-center">
                <div className="tw-w-96 tw-flex tw-flex-col">
                    <p className="laptop:tw-text-2xl tablet:tw-text-xl tw-text-purple tw-mr-5 tw-flex tw-items-center"><MdSchool className="tw-text-purple laptop:tw-text-3xl tablet:tw-text-2xl tw-mr-3" />Education</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm tw-text-primary">Computer Engineering</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs tw-text-secondary"><FaCalendarAlt className="tw-text-purple" />  2021 - present</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm tw-text-primary">Math and Physics Diploma</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs tw-text-secondary"><FaCalendarAlt className="tw-text-purple" />  2018 - 2021</p>
                </div>
                <div className="tw-flex tw-flex-col">
                    <p className="laptop:tw-text-2xl tablet:tw-text-xl tw-text-purple tw-flex tw-items-center"><MdWorkOutline className="tw-text-purple laptop:tw-text-3xl tablet:tw-text-2xl tw-mr-3" />Work</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm tw-text-primary">Frontend Web Developer </p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm tw-text-secondary"><FaBuilding className="tw-text-purple" />  TeamHive </p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs tw-text-secondary"><FaCalendarAlt className="tw-text-purple" />  2021 - present</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs tw-text-secondary"><ImLocation className="tw-text-purple" />  Helsinki - Finland</p>
                </div>
            </div>
        </div>

    )
}