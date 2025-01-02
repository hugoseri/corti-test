import { Frown } from "lucide-react";

export const Fallback: React.FC = () => {
    return (
        <div className="flex flex-col h-full gap-4 items-center justify-center">
            <Frown/>
            <span>No file or folder selected</span>
        </div>
    )
}