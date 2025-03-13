import { Outlet } from "react-router"
import AppBar from "../AppBar/AppBar "
import css from "./Layout.module.css"
import { Suspense } from "react"

export default function Layout({ children }) {
    return (
        <>
            <AppBar />
            <Suspense fallback={null}>{ children }</Suspense>
        </>
    )
}