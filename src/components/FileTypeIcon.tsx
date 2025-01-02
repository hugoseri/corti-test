import { EFileType } from "../utils/types";
import { FileIcon, FolderIcon, ImageIcon, LucideProps } from "lucide-react"

export type FileTypeIconProps = {
    type: EFileType
} & LucideProps;


export const FileTypeIcon: React.FC<FileTypeIconProps> = ({
    type,
    ...props
}) => {
    switch (type) {
        case EFileType.doc: {
            return <FileIcon {...props}/>
        }
        case EFileType.folder: {
            return <FolderIcon {...props}/>
        }
        case EFileType.image: {
            return <ImageIcon {...props}/>
        }
    }
}