import { FileRo } from "../../utils/types"
import { File } from "./file"

export interface SidebarProps {
    data: FileRo[]
}

export const Sidebar: React.FC<SidebarProps> = ({
    data,
}) => {
    return (
        <div className="min-w-[300px] py-4 px-4 overflow-y-auto">
            <ul className="ml-4">
                {
                    data.map(file => (
                        <File key={file.id} data={file}/>
                    ))
                }
            </ul>
        </div>
    )
}