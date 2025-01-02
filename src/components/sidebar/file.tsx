import { useMemo } from "react"
import { FileRo, EFileType } from "../../utils/types"
import { Play } from "lucide-react"

export interface FileProps {
    data: FileRo
}

export const File: React.FC<FileProps> = ({
    data,
}) => {
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

    return (
        <li>
            <div className="flex flex-row gap-2 items-center max-w-[30vw]">
                {
                    isFolder && (
                        <Play size={14}/>
                    )
                }
                {data.name}
            </div>
            {
                isFolder && (
                    <ul className="ml-4">
                        {children.map(file => (
                            <File key={file.id} data={file}/>
                        ))}
                    </ul>
                )
            }
        </li>
    )
}