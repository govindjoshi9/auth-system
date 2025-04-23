import { AlertTriangleIcon } from "lucide-react";

interface FromErrorProp {
    message : string,
};

export const FormError = ({ message }: FromErrorProp) => {
    if (!message) return null;

    return (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-destructive">
            <AlertTriangleIcon className="h-4 w-4" />
            <p>{message}</p>
        </div>
    )
}