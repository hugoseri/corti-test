export enum EFileType {
    image = 'image',
    folder = 'folder',
    doc = 'doc',
}

export type TreeRo = {
    data: FileRo[]
}

export type FileRo = {
    id: string
    type: EFileType
    name: string
    children?: FileRo[]
}