import css from "./AppBar.module.css"
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors"
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    

    return (
        <div className={css.AppBar}>
            <nav className={css.links}>
                <Navigation />
                
                <div className={css.regist}>
                    {!isLoggedIn ? <AuthNav /> : <UserMenu />}
                </div>
            </nav>
        </div>
    )
}