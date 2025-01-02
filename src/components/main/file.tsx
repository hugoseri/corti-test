import { useContext } from "react";
import { FileRo } from "../../utils/types";
import { FileTypeIcon } from "../FileTypeIcon";
import { FilesContext } from "../../contexts/files";

export interface FileProps {
    data: FileRo,
    iconSize: 'small' | 'big'
}

export const File: React.FC<FileProps> = ({
    data,
    iconSize
}) => {
    const { setActiveFile } = useContext(FilesContext);
    return (
        <div 
            className="flex flex-col h-full gap-4 items-center justify-center"
            onClick={() => setActiveFile(data)}
        >
            <FileTypeIcon type={data.type} size={iconSize === 'small' ? 32 : 64}/>
            <span>{data.name}</span>
        </div>
    )
}