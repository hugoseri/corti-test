import { useCallback, useContext, useMemo, useState } from "react"
import { FileRo, EFileType } from "../../utils/types"
import { Play } from "lucide-react"
import { Button } from "@radix-ui/themes"
import { FilesContext } from "../../contexts/files"

export interface FileProps {
    data: FileRo
}

export const File: React.FC<FileProps> = ({
    data,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { activeFileId, setActiveFileId } = useContext(FilesContext);

    const isActive = useMemo(() => {
        return data.id === activeFileId;
    }, [activeFileId])

    const isFolder = useMemo(() => {
        return data.type === EFileType.folder;
    }, [data.type])

    /**
     * Children should be ordered alphabetically
     */
    const children = useMemo(() => {
        if (!data.children) return [];
        return data.children.sort((a, b) => a.name.localeCompare(b.name));
    }, [data.children])

    const handleClick = useCallback(() => {
        setIsExpanded(old => !old);
        setActiveFileId(data.id);
    }, [data.id, isExpanded, activeFileId, setIsExpanded, setActiveFileId])

    return (
        <li>
            <Button 
                variant="ghost"
                className={`flex flex-row gap-2 items-start max-w-[30vw] ${isActive ? "text-red-500" : ''}`}
                onClick={handleClick}
                color={isActive ? "indigo" : "gray"}
            >
                {
                    isFolder && (
                        <Play 
                            size={14}
                            className={`transition-all ${isExpanded ? 'rotate-90' : ''}`}
                        />
                    )
                }
                {data.name}
            </Button>
            {
                isFolder && isExpanded && (
                    <ul className="ml-4">
                        {children.map(file => (
                            <File key={file.id} data={file}/>
                        ))}
                    </ul>
                )
            }
        </li>
    )
};