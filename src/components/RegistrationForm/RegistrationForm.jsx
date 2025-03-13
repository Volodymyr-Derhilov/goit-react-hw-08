import css from "./RegistrationForm.module.css"
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { Button } from '@mui/material';
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function RegistrationForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        name: "",
        email: "",
        password: "",
    }

    const handleSubmit = (values, options) => {
        console.log(values)
        dispatch(register(values))
            .unwrap()
            .then(res => {
                toast.success(`Welcome, ${res.user.name}`)
                navigate('/contacts', { replace: true })
                options.resetForm();
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        >
        {() => (
            <Form className={css.form}>
                <Field
                    component={TextField}
                    name="name"
                    label="Name"
                    variant="outlined"
                    className={css.field}
                />
                <Field
                    component={TextField}
                    name="email"
                    label="Email"
                    variant="outlined"
                    className={css.field}
                />
                <Field
                    component={TextField}
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    className={css.field}
                />
                <Button type="submit" variant="contained" color="primary" className={css.button}>
                    Submit
                </Button>                    
            </Form>
        )}
        </Formik>
    )
}