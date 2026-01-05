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
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-primary">Math and Physics Diploma</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><FaCalendarAlt className="tw-text-purple" />  2018 - 2021</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-primary">Sofware Engineering Bachelor's degree</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><FaCalendarAlt className="tw-text-purple" />  2021 - 2025</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-primary">Sofware Engineering Master's degree</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><FaCalendarAlt className="tw-text-purple" />  2025 - Present</p>
                </div>
                <div className="tw-flex tw-flex-col">
                    <p className="laptop:tw-text-2xl tablet:tw-text-xl mobile:tw-text-lg tw-text-purple tw-flex tw-items-center"><MdWorkOutline className="tw-text-purple laptop:tw-text-3xl tablet:tw-text-2xl mobile:tw-text-xl tw-mr-3" />Work</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-primary">Frontend Developer </p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-secondary"><FaBuilding className="tw-text-purple" />  TeamHive </p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><FaCalendarAlt className="tw-text-purple" /> Nov. 2021 - Apr. 2023</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><ImLocation className="tw-text-purple" />  Helsinki - Finland</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-primary">Frontend Developer </p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-secondary"><FaBuilding className="tw-text-purple" />  Layers Technologies INC. </p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><FaCalendarAlt className="tw-text-purple" /> May. 2023 - Apr. 2024</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><ImLocation className="tw-text-purple" />  Vancouver - Canada</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-primary">Frontend Developer </p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-secondary"><FaBuilding className="tw-text-purple" />  Bazaar</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><FaCalendarAlt className="tw-text-purple" /> Apr. 2024 - Apr. 2025</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><ImLocation className="tw-text-purple" />  Queensland - Autralia</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-primary">Frontend Developer </p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-secondary"><FaBuilding className="tw-text-purple" />  Bazaarsazan Naminet</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><FaCalendarAlt className="tw-text-purple" /> Jan. 2025 - Present</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><ImLocation className="tw-text-purple" />  Tehran - Iran</p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-primary">Frontend Developer </p>
                    <p className="laptop:tw-text-base tablet:tw-text-sm mobile:tw-text-xs tw-text-secondary"><FaBuilding className="tw-text-purple" />  M.IT Group</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><FaCalendarAlt className="tw-text-purple" /> Aug. 2025 - Present</p>
                    <p className="laptop:tw-text-sm tablet:tw-text-xs mobile:tw-text-xs tw-text-secondary"><ImLocation className="tw-text-purple" />  Tehran - Iran</p>
                </div>
            </div>
        </div>

    )
}