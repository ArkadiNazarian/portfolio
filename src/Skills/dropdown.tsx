import { useState } from "react";

export interface IProps {
    classname: string
}

export interface IFormProps {
    class: string;
    action_set:()=>void
}
export const Dropdown = () => {
    const [current_class, set_current_class] = useState(" ")

    const action_set_classname = () => {
        set_current_class("tw-flex")
    }



    return {
        action_set:action_set_classname,
        class: current_class
    } as IFormProps
}