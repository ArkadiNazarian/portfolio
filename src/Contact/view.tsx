import { BiSend } from "react-icons/bi";
import { GridLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import { IProps } from "./model";

export const View = (props: IProps) => {
    return (
        <div className="tw-pt-20 tw-pb-20">
            <div className="tw-text-center">
                <p className="laptop:tw-text-4xl tablet:tw-text-3xl  mobile:tw-text-2xl tw-text-primary ">Contact Me</p>
                <p className="laptop:tw-text-xl tablet:tw-text-lg mobile:tw-text-base tw-text-secondary">Get in touch</p>
            </div>
            <form ref={props.form} onSubmit={props.action_submit} className="laptop:tw-flex laptop:tw-flex-row laptop:tw-justify-center laptop:tw-items-center laptop:tw-gap-[2vw] tablet:tw-flex tablet:tw-flex-row tablet:tw-justify-center tablet:tw-items-center tablet:tw-gap-[4vw] mobile:tw-flex mobile:tw-flex-col mobile:tw-justify-center mobile:tw-items-center mobile:tw-gap-4">
                <div>
                    <input
                        placeholder="Your Email"
                        className="tw-pl-2 laptop:tw-text-xl tw-outline-none tablet:tw-text-lg mobile:tw-text-base focus:tw-border-2 focus:tw-border-purple tw-placeholder-background tw-bg-secondary tw-border-2 tw-min-w-[12vw]  tw-rounded-md tw-min-h-[2.2vw]"
                        name="email"
                        type="email"
                        value={props.form_data.email}
                        onChange={props.handleChange}
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Message"
                        className="laptop:tw-text-2xl tablet:tw-text-xl mobile:tw-text-lg tw-outline-none focus:tw-border-2 focus:tw-border-purple tw-placeholder-background tw-pt-2 tw-pl-1 tw-bg-secondary tw-border-2 tw-min-w-[24vw] tw-rounded-md tw-min-h-[2vw]"
                        name="message"
                        value={props.form_data.message}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="tw-flex tw-flex-row tw-items-center tw-group">
                    <button type="submit" className=" tw-transition-all hover:tw-scale-110 tw-cursor-pointer tw-rounded-md laptop:tw-h-14 tablet:tw-h-12 mobile:tw-h-10 tw-w-32 laptop:tw-text-xl tablet:tw-text-lg mobile:tw-text-base tw-flex tw-justify-center tw-items-center tw-bg-purple tw-text-primary">Send <BiSend className="tw-pl-2 laptop:tw-text-2xl tablet:tw-text-xl mobile:tw-text-lg tw-transition-all group-hover:tw-translate-x-2" /> </button>
                    <GridLoader color="#9382E8" className="tw-ml-2" loading={props.loading} size={5} />
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}