import { PropsWithChildren, createContext, useState } from "react"

export type FilesContextType = {
    activeFileId: string | undefined
    setActiveFileId: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const initialFilesContext: FilesContextType = {
    activeFileId: undefined,
    setActiveFileId: () => void(0),
}

export const FilesContext = createContext<FilesContextType>(initialFilesContext);

/**
 * Provider to handle files state
 */
export const FilesProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [activeFileId, setActiveFileId] = useState<string | undefined>();
    /**
     * Display app content when user is connected
     */
    return (
        <FilesContext.Provider value={{
            activeFileId,
            setActiveFileId,
        }}>
            {children}
        </FilesContext.Provider>
    )
} 

export default FilesProvider