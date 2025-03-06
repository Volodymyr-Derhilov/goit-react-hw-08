import { NavLink } from "react-router";
import css from "./NotFound.module.css"
import { MdError } from "react-icons/md";
import Home from "../../components/Home/Home";

export default function NotFound() {
    return (
        <div className={css.block}>
            <MdError  className={ css.icon} />
            <h2 className={css.text}>Ooops! This page doesn't exist!</h2>
            <NavLink to="/" element={<Home />} className={css.link}>Go Home</NavLink>
            </div>
    )
}