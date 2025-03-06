import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css"
import { Button } from "@mui/material";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function UserMenu() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return (
        <>
            <h2 className={css.link}>{ `Welcome, ${user.email}`}</h2>
            <Button type="button" variant="contained" color="primary" className={css.button} onClick={() =>
                dispatch(logout())
                    .unwrap()
                    .then(() => {
                    toast.success(`Goodbye`)
                    navigate('/', { replace: true })
            })
            .catch((error) => {
                toast.error(error.message);
            })}>Log Out</Button>
        </>
    )
}