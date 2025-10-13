"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const navItems = [
  { to: "/", label: "Home", exact: true },
  { to: "/blog", label: "Blog", exact: false },
  { to: "/projects", label: "Projects", exact: false },
];

export const NavMenu = (props: NavigationMenuProps) => {
  const { location } = useRouterState();

  return (
    <NavigationMenu
      {...props}
      // className="data-[orientation=vertical]:items-start"
    >
      <NavigationMenuList className="relative gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:align-top data-[orientation=vertical]:ml-5">
        {navItems.map(({ to, label, exact }) => {
          const isActive = exact
            ? location.pathname === to
            : location.pathname.startsWith(to);

          return (
            <NavigationMenuItem key={to} className="relative gap-2">
              {/* <NavigationMenuLink className="hover:color-none" asChild>
                <Link
                  className="text-foreground bg-none bg-transparent hover:bg-transparent hover:text-foreground aria-selected:bg-none"
                  to={to}
                >
                  {label}
                </Link>
              </NavigationMenuLink> */}
              {/* <Button variant="ghost" asChild>
                
              </Button> */}

              <Link to={to}>
                <div className="p-1">{label}</div>
              </Link>

              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-current"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
