/// <reference types="vite/client" />
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles/app.css?url";
import { ThemeProvider } from "~/components/theme-provider";
import Navbar from "~/components/navbar/navbar";
import MaxWidthWrapper from "~/components/max-width-wrapper";
import { Footer } from "~/components/footer";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Robert Kinney",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      // Preload the main hero image to improve LCP
      { rel: "preload", as: "image", href: "/robert-ny.webp" },
      { rel: "icon", href: "/favicon.svg" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />

          <MaxWidthWrapper className="flex-1 mt-[8rem]">
            {children}
          </MaxWidthWrapper>

          <Footer />

          {/* <TanStackRouterDevtools position="bottom-right" /> */}
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}
