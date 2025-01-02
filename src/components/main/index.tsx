import { useContext } from "react"
import { FilesContext } from "../../contexts/files"
import { Fallback } from "./fallback";
import { EFileType } from "../../utils/types";
import { File } from "./file";
import { Folder } from "./folder";

export const Main: React.FC = () => {
    const { activeFile } = useContext(FilesContext);

    return (
        <div className="w-full h-full py-4 px-8 overflow-y-auto">
            {
                !activeFile ?
                <Fallback/>
                :
                activeFile.type === EFileType.folder ?
                <Folder data={activeFile}/>
                :
                <File data={activeFile} iconSize="big"/>
            }
        </div>
    )
}