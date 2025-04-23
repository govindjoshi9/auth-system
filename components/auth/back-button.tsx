"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
interface BackButtonOProps {
  herf: string;
  label: string;
}
export const BackButton = ({ herf, label }: BackButtonOProps) => {
  return (
    <Button variant={"link"} className="font-normal w-full" size={"sm"} asChild>
      <Link href={herf}>{label}</Link>
    </Button>
  );
};
