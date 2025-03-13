import { Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css"
import { TextField } from "formik-mui";
import { Button } from '@mui/material';
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const initialValues = {
        email: "",
        password: "",
    }

    const handleSubmit = (values, options) => {
        dispatch(login(values))
            .unwrap()
            .then(res => {
            toast.success(`Welcome, ${res.user.name}`)
                navigate('/contacts', { replace: true })
                options.resetForm();
            })
            .catch((error) => {
                toast.error("Invalid data")
            }
            );
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
                Log In
            </Button>
            </Form>
        )}
        </Formik>
    )
}