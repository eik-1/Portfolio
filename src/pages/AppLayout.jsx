import { Outlet, useNavigation } from "react-router-dom"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Loader from "../components/Loader"

function AppLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === "loading"
    return (
        <>
            {isLoading && <Loader />}
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default AppLayout
