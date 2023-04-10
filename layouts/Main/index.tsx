import { useLayout } from "providers/LayoutProvider"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

const Main = ({ children }) => {
    const { backgroundCoverVisible } = useLayout()

    return (
        <div className={`relative flex h-screen w-full flex-row`}>
            <div className="background absolute inset-0 -z-20"></div>
            <div
                className={`absolute inset-0 -z-10 transition ease-out duration-300 ${
                    backgroundCoverVisible ? "backdrop-blur-[40px]" : "backdrop-blur-none"
                }`}
            ></div>
            <Sidebar />
            <div className="flex h-full flex-1 flex-col">
                <main className="flex h-full flex-1 flex-col">{children}</main>
                <Footer />
            </div>
        </div>
    )
}

export default Main
