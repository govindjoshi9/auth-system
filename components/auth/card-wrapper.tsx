"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "@/components/auth/Header";
import { Social } from "@/components/auth/Social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLable: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLable,
  backButtonHref,
  backButtonLabel,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLable} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social/>
        </CardFooter>
      )}
    </Card>
  );
};
