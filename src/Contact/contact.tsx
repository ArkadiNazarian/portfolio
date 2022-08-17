import { MdPersonPin } from "react-icons/md";
import { RiPhoneLine } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

export const Contact = () => {
    return (
        <div className="tw-pt-20">
            <div className="tw-text-center ">
                <p className="tw-text-4xl tw-text-primary">Contact Me</p>
                <p className="tw-text-xl tw-text-secondary">Get in touch</p>
            </div>
            <div className="tw-grid tw-grid-cols-3">
            <div className="tw-flex tw-items-center tw-col-start-1">
                    <span className="tw-text-purple tw-text-3xl tw-mr-3">
                        <MdPersonPin />
                    </span>
                    <p className="tw-text-2xl tw-text-primary tw-mr-5">Arkadi</p>
                </div>
                <div className="tw-flex tw-items-center tw-col-start-2">
                    <span className="tw-text-purple tw-text-3xl tw-mr-3">
                        <RiPhoneLine />
                    </span>
                    <p className="tw-text-2xl tw-text-primary tw-mr-5">+989366057725</p>
                </div>

                <div className="tw-flex tw-items-center tw-col-start-3">
                    <span className="tw-text-purple tw-text-3xl tw-mr-3">
                        <SiGmail />
                    </span>
                    <p className="tw-text-2xl tw-text-primary ">nazarianarkadi@gmail.com</p>
                </div>
            </div>
        </div>
    )
}