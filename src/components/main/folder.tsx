import { useMemo } from "react";
import { FileRo } from "../../utils/types";
import { File } from "./file";

export interface FolderProps {
    data: FileRo
}

export const Folder: React.FC<FolderProps> = ({
    data,
}) => {
    /**
     * Children should be ordered alphabetically
     */
    const children = useMemo(() => {
        if (!data.children) return [];
        return data.children.sort((a, b) => a.name.localeCompare(b.name));
    }, [data.children])

    return (
        <div className="w-full max-h-full py-4 px-8 flex flex-col gap-4">
            <h1 className="font-bold text-lg">{data.name}</h1>
            <div className="grid grid-cols-4 gap-10">
                {children.map(file => (
                    <File key={file.id} data={file} iconSize="small"/>
                ))}
            </div>
        </div>
    )
}