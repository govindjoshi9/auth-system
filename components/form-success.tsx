import { CheckCircleIcon } from "lucide-react";

interface FromSuccessProp {
  message: string;
}

export const FormSuccess = ({ message }: FromSuccessProp) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-emerald-500">
      <CheckCircleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
