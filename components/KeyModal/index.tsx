import { Transition } from "@headlessui/react"
import Image from "next/image"
import keyDialogImage from "public/images/key-modal.png"
import { Fragment } from "react"

interface KeyModalProps {
    show?: boolean
}

export default function KeyModal({ show = false }: KeyModalProps) {
    return (
        <Transition appear show={show} as={Fragment}>
            <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="flex h-full w-full items-end justify-center">
                    <Image
                        src={keyDialogImage}
                        alt="Key dialog"
                        className="mb-32"
                    />
                </div>
            </Transition.Child>
        </Transition>
    )
}
