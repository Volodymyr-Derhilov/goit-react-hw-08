import { Outlet } from "react-router"
import AppBar from "../AppBar/AppBar "
import css from "./Layout.module.css"

export default function Layout() {
    return (
        <>
            <AppBar />
            <Outlet />
        </>
    )
}