import { useSelector } from "react-redux";
import css from "./Navigation.module.css"
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router";
import clsx from "clsx";

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={css.nav}>
            <NavLink to="/" className={({ isActive }) => clsx(css.link, isActive && css.active)}>Home</NavLink>                
            {isLoggedIn && (
                <NavLink to="/contacts" className={({isActive}) => clsx(css.link, isActive && css.active)}>Contacts</NavLink>
            )}
        </nav>
    )
}