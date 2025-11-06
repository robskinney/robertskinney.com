import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import React from "react";

export const NavigationSheet = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col h-full">
        <SheetHeader>
          <Logo />
        </SheetHeader>
        <div className="flex flex-col h-full items-start justify-items-start align-top">
          <NavMenu orientation="vertical" className="mt-4" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
