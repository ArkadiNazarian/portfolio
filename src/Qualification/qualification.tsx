import { MdSchool, MdWorkOutline } from "react-icons/md";

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
            </div>
        </div>

    )
}