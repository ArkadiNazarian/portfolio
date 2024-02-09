import { MdSchool, MdWorkOutline } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FaBuilding } from "react-icons/fa";
export const Qualification = () => {
    return (
        <div className="tw-pt-20">
            <div className="tw-text-center ">
                <p className="laptop:tw-text-4xl tablet:tw-text-3xl mobile:tw-text-2xl tw-text-primary">Qualification</p>
                <p className="laptop:tw-text-xl tablet:tw-text-lg mobile:tw-text-base tw-text-secondary">My personal journey</p>
            </div>
            <div className="tw-flex tw-flex-row tw-justify-center tw-gap-[8vw]">
                <div className="tw-flex tw-flex-col">
                    <p className="laptop:tw-text-2xl tablet:tw-text-xl mobile:tw-text-lg tw-text-purple tw-mr-5 tw-flex tw-items-center"><MdSchool className="tw-text-purple laptop:tw-text-3xl tablet:tw-text-2xl mobile:tw-text-xl tw-mr-3" />Education</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-primary">Computer Engineering</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><FaCalendarAlt className="tw-text-purple" />  2021 - present</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-primary">Math and Physics Diploma</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><FaCalendarAlt className="tw-text-purple" />  2018 - 2021</p>
                </div>
                <div className="tw-flex tw-flex-col">
                    <p className="laptop:tw-text-2xl tablet:tw-text-xl mobile:tw-text-lg tw-text-purple tw-flex tw-items-center"><MdWorkOutline className="tw-text-purple laptop:tw-text-3xl tablet:tw-text-2xl mobile:tw-text-xl tw-mr-3" />Work</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-primary">Frontend Developer </p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-secondary"><FaBuilding className="tw-text-purple" />  TeamHive </p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><FaCalendarAlt className="tw-text-purple" /> Nov. 2021 - Apr. 2023</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><ImLocation className="tw-text-purple" />  Helsinki - Finland</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-primary">Frontend Developer </p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-secondary"><FaBuilding className="tw-text-purple" />  Layers Technologies INC. </p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><FaCalendarAlt className="tw-text-purple" /> May. 2023 - Jan. 2024</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><ImLocation className="tw-text-purple" />  Vancouver - Canada</p>
                </div>
            </div>
        </div>

    )
}