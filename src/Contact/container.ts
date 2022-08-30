import *as yup from 'yup';
import { useRef } from 'react';
import { useFormik } from 'formik';
import { IFormValues, IProps } from './model';
import emailjs from '@emailjs/browser';

export const useContainer = (): IProps => {

    const form = useRef();

    const initial_values: IFormValues = {
        message: "",
        email:""
    };

    const validation_schema = yup.object().shape({
        message: yup.string().required(),
        email: yup.string().required()
    });

    const action_submit = () => {
        emailjs.sendForm(
            'service_r6qjz17',
            'template_qsj6hph',
            form.current!,
            '4ORvd-8AMaOYw_8Rg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
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
        form
    };
};