import { FormikErrors } from 'formik';

export interface IFormValues {
    email?: string;
    message?: string;
}

export interface IProps {
    loading: boolean;
    action_submit: () => void,
    form_data: IFormValues,
    form_errors: FormikErrors<IFormValues>,
    handleChange: (e: any) => void,
    form: any;
}