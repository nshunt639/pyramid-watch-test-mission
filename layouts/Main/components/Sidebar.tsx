import Image from "next/image"
import logo from "public/logo.png"
import { useLayout } from "providers/LayoutProvider"

export default function Sidebar() {
    const { backgroundCoverVisible } = useLayout()

    return (
        <div
            className={`flex h-full w-[92px] flex-col items-center justify-between transition ease-out duration-300 bg-[rgba(255,255,255,0.09)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[4px]`}
        >
            <div className="flex h-[57px] w-full items-center justify-center bg-white">
                <Image src={logo} alt="The Modern Company" height={21} />
            </div>
            <div className={`whitespace-nowrap text-white/40 flex-1 w-full flex justify-center items-center border-r-2 ${backgroundCoverVisible ? 'border-[rgba(153,153,153,0.3)]' : 'border-transparent'}`}>
                <h1 className="-rotate-90 ">// The Modern Company</h1>
            </div>
            <div className={`py-10 w-full flex justify-center items-center border-r-2 ${backgroundCoverVisible ? 'border-[rgba(153,153,153,0.3)]' : 'border-transparent'}`}>001</div>
        </div>
    )
}
