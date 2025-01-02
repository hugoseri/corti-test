import { FileRo } from "../../utils/types";
import { FileTypeIcon } from "../FileTypeIcon";

export interface FileProps {
    data: FileRo,
    iconSize: 'small' | 'big'
}

export const File: React.FC<FileProps> = ({
    data,
    iconSize
}) => {

    return (
        <div className="flex flex-col h-full gap-4 items-center justify-center">
            <FileTypeIcon type={data.type} size={iconSize === 'small' ? 32 : 64}/>
            <span>{data.name}</span>
        </div>
    )
}