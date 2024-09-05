import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy, Suspense, useState, useEffect } from "react"

import Error from "./components/Error"
import Preloader from "./components/Preloader"
import Loader from "./components/Loader"
import AppLayout from "./pages/AppLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import ProjectPage from "./components/Project/ProjectPage"

// const AppLayout = lazy(() => import("./pages/AppLayout"))
// const Home = lazy(() => import("./pages/Home"))
// const About = lazy(() => import("./pages/About"))
// const Blog = lazy(() => import("./pages/Blog"))
// const ProjectPage = lazy(() => import("./components/Project/ProjectPage"))

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path: "/about",
                element: <About />,
                errorElement: <Error />,
            },
            {
                path: "/blogs",
                element: <Blog />,
                errorElement: <Error />,
            },
            {
                path: "/project/:title",
                element: <ProjectPage />,
                errorElement: <Error />,
            },
        ],
    },
])

function App() {
    const name = `                                                                                                 
EEEEEEEEEEEEEEEEEEEEEE  iiii  kkkkkkkk           
E::::::::::::::::::::E i::::i k::::::k           
E::::::::::::::::::::E  iiii  k::::::k           
EE::::::EEEEEEEEE::::E        k::::::k           
  E:::::E       EEEEEEiiiiiii  k:::::k    kkkkkkk
  E:::::E             i:::::i  k:::::k   k:::::k 
  E::::::EEEEEEEEEE    i::::i  k:::::k  k:::::k  
  E:::::::::::::::E    i::::i  k:::::k k:::::k   
  E:::::::::::::::E    i::::i  k::::::k:::::k    
  E::::::EEEEEEEEEE    i::::i  k:::::::::::k     
  E:::::E              i::::i  k:::::::::::k     
  E:::::E       EEEEEE i::::i  k::::::k:::::k    
EE::::::EEEEEEEE:::::Ei::::::ik::::::k k:::::k   
E::::::::::::::::::::Ei::::::ik::::::k  k:::::k  
E::::::::::::::::::::Ei::::::ik::::::k   k:::::k 
EEEEEEEEEEEEEEEEEEEEEEiiiiiiiikkkkkkkk    kkkkkkk
                                                `
    console.log(name)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return <Preloader />
    }

    return (
        <Suspense fallback={<Loader />}>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export default App
