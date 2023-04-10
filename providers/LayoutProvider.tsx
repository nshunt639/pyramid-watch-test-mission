import React, {
    Dispatch,
    ReactNode,
    SetStateAction,
    useCallback,
    useContext,
    useState,
} from "react"

interface LayoutContext {
    backgroundCoverVisible: boolean
    setBackgroundCoverVisible: Dispatch<SetStateAction<boolean>>
    showBackgroundCover: () => void
    hideBackgroundCover: () => void
}

const LayoutContext: React.Context<LayoutContext> =
    React.createContext<LayoutContext>({
        backgroundCoverVisible: false,
        setBackgroundCoverVisible: () => {},
        showBackgroundCover: () => {},
        hideBackgroundCover: () => {},
    })

interface LayoutProvider {
    children: ReactNode
}

export function LayoutProvider({ children }: LayoutProvider) {
    const [backgroundCoverVisible, setBackgroundCoverVisible] =
        useState<boolean>(false)

    const showBackgroundCover = useCallback(
        () => setBackgroundCoverVisible(true),
        [setBackgroundCoverVisible]
    )
    const hideBackgroundCover = useCallback(
        () => setBackgroundCoverVisible(false),
        [setBackgroundCoverVisible]
    )

    return (
        <LayoutContext.Provider
            value={{
                backgroundCoverVisible,
                setBackgroundCoverVisible,
                showBackgroundCover,
                hideBackgroundCover,
            }}
        >
            {children}
        </LayoutContext.Provider>
    )
}

export const useLayout = (): LayoutContext => {
    const context = useContext<LayoutContext>(LayoutContext)
    return context
}
