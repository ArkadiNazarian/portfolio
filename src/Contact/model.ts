import { FormikErrors } from 'formik';

export interface IFormValues {
    message?: string;
}

export interface IProps {
    action_submit: () => void,
    form_data: IFormValues,
    form_errors: FormikErrors<IFormValues>,
    handleChange: (e: any) => void,
    form: any;
}