import { NavLink } from "react-router"
import css from "./AuthNav.module.css"
import clsx from "clsx"

export default function AuthNav() {
    return (
        <>
            <NavLink to="/register" className={({isActive}) => clsx(css.link, isActive && css.active)}>Register</NavLink>
            <NavLink to="/login" className={({isActive}) => clsx(css.link, isActive && css.active)}>Log In</NavLink>
        </>
    )
}