"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation"; // Import usePathname hook

import { siteConfig } from "@/config/site";
import ContactForm from "./ContactForm";

export const Navbar = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="flex basis-1/5 sm:basis-full justify-between items-center">
        <NavbarContent className="sm:hidden basis-1" justify="start">
          <NavbarMenuToggle />
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink className="flex items-center" href="/">
              {/* <Logo /> */}
              <p className="font-bold text-inherit">&lt;Robert_Kinney /&gt;</p>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <ul className="hidden sm:flex gap-4 ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  pathname === item.href
                    ? "text-secondary font-medium" // Active styles
                    : "text-foreground" // Inactive styles
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
        <span className="ml-auto">
          <ContactForm />
        </span>
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={pathname === item.href ? "secondary" : "foreground"} // Active color
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
