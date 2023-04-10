import { useState, useCallback } from "react"

import revealImage from "public/images/reveal.png"
import Image from "next/image"
import { useLayout } from "providers/LayoutProvider"
import crossImage from "public/images/cross.png"
import crossHoverImage from "public/images/cross-hover.png"
import KeyModal from "components/KeyModal"

export default function Entry() {
    const { setBackgroundCoverVisible } = useLayout()

    const [keyModalVisible, setKeyModalVisible] = useState<boolean>(false)

    const handleRevealClick = useCallback(() => {
        const visible = !keyModalVisible
        setKeyModalVisible(visible)
        setBackgroundCoverVisible(visible)
    }, [keyModalVisible, setBackgroundCoverVisible, setKeyModalVisible])

    const handleCloseClick = useCallback(() => {
        if (!keyModalVisible) return

        setKeyModalVisible(false)
        setBackgroundCoverVisible(false)
    }, [keyModalVisible, setBackgroundCoverVisible, setKeyModalVisible])

    
    return (
        <div className="flex h-full w-full flex-1 flex-col">
            <div className="flex h-[57px] w-full justify-between">
                <div className="flex h-full items-center justify-center px-16">
                    <div className="relative h-[15px] w-[93px] whitespace-nowrap">
                        <span
                            className={`absolute left-0 transition-opacity duration-500 ease-in-out ${
                                keyModalVisible ? "opacity-0" : ""
                            }`}
                        >
                            Entry Test_
                        </span>
                        <span
                            className={`absolute left-0 transition-opacity duration-500 ease-in-out ${
                                keyModalVisible ? "" : "opacity-0"
                            }`}
                        >
                            Exercise 01_
                        </span>
                    </div>
                </div>
                <div className="flex h-full">
                    <div className="flex h-full items-center justify-center px-16 text-white/40">
                        C:\EXERCISE\PROGRAMS\01.EXE
                    </div>
                    <div className="flex h-[57px]">
                        <button className={`group h-full bg-white px-16 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ${!keyModalVisible && 'cursor-default'}`} onClick={handleCloseClick}>
                            <div className="relative flex h-[19px] w-[19px] items-center justify-center">
                                <Image
                                    src={crossImage}
                                    alt="Close"
                                    className="transition duration-300 ease-in-out scale-100 group-hover:opacity-0 group-hover:scale-200"
                                />
                                <Image
                                    src={crossHoverImage}
                                    alt="Close"
                                    className="absolute scale-50 opacity-0 transition duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <KeyModal show={keyModalVisible} />
            </div>
            <div className="flex justify-center p-4">
                <button
                    className="group rounded-full px-44 py-7 text-[13px] font-bold"
                    onClick={handleRevealClick}
                >
                    <Image
                        src={revealImage}
                        alt="Reveal"
                        className="mr-8 transition duration-300 ease-in-out group-hover:invert"
                    />
                    <div className="relative h-[20px] w-[108px] whitespace-nowrap">
                        <span
                            className={`absolute left-0 transition-opacity duration-500 ease-in-out ${
                                keyModalVisible ? "opacity-0" : ""
                            }`}
                        >
                            Reveal Now
                        </span>
                        <span
                            className={`absolute left-[6px] transition-opacity duration-500 ease-in-out ${
                                keyModalVisible ? "" : "opacity-0"
                            }`}
                        >
                            Back Home
                        </span>
                    </div>
                </button>
            </div>
        </div>
    )
}
