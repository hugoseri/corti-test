import { PropsWithChildren, createContext, useState } from "react"
import { FileRo } from "../utils/types"

export type FilesContextType = {
    activeFile: FileRo | undefined
    setActiveFile: React.Dispatch<React.SetStateAction<FileRo | undefined>>
}

export const initialFilesContext: FilesContextType = {
    activeFile: undefined,
    setActiveFile: () => void(0),
}

export const FilesContext = createContext<FilesContextType>(initialFilesContext);

/**
 * Provider to handle files state
 */
export const FilesProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [activeFile, setActiveFile] = useState<FileRo | undefined>();
    /**
     * Display app content when user is connected
     */
    return (
        <FilesContext.Provider value={{
            activeFile,
            setActiveFile,
        }}>
            {children}
        </FilesContext.Provider>
    )
} 

export default FilesProvider