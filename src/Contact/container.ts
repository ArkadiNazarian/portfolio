import *as yup from 'yup';
import { useRef, useState } from 'react';
import { useFormik } from 'formik';
import { IFormValues, IProps } from './model';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export const useContainer = (): IProps => {

    const form = useRef();
    const [loading, set_loading] = useState(false);

    const initial_values: IFormValues = {
        message: "",
        email: ""
    };

    const validation_schema = yup.object().shape({
        message: yup.string().required(),
        email: yup.string().required()
    });

    const action_submit = () => {
        set_loading(true);
        emailjs.sendForm(
            'service_r6qjz17',
            'template_qsj6hph',
            form.current!,
            '4ORvd-8AMaOYw_8Rg')
            .then(() => {
                set_loading(false)
                toast.success('Message was sent to Arkadi', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }, () => {
                set_loading(false)
                toast.error('Please try again', {
                    position: toast.POSITION.TOP_RIGHT
                });
            });

    };

    const formik = useFormik({
        initialValues: initial_values,
        validationSchema: validation_schema,
        onSubmit: action_submit
    });



    return {
        action_submit: formik.handleSubmit,
        form_data: formik.values,
        form_errors: formik.errors,
        handleChange: formik.handleChange,
        form,
        loading
    };
};