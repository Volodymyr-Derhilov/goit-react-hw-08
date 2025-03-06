import css from "./Home.module.css"
import { IoIosContacts } from "react-icons/io";

export default function Home() {
    return (
        <div className={css.block}>
            <IoIosContacts className={ css.icon} />
            <h2 className={css.text}>Welcome <br />to your personal contact's book application!</h2>
            <p>There you can make all CRUD operations with your contacts and be sure they are in safety and won't be lost.</p>
            </div>
    )
}