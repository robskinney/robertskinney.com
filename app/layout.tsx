import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-repeat-y bg-top bg-auto font-sans antialiased",
          fontSans.variable
        )}
        style={{
          backgroundImage: `linear-gradient(var(--bg-overlay-light), var(--bg-overlay-fade)), var(--bg-image)`,
        }}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="container mx-auto w-full pt-4 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center space-x-3 py-3 pb-8">
              <Link
                isExternal
                aria-label="LinkedIn"
                href={siteConfig.links.linkedin}
              >
                <LinkedInIcon className="text-black dark:text-white hover:scale-110 transition-all" />
              </Link>
              <Link
                isExternal
                aria-label="Github"
                href={siteConfig.links.github}
              >
                <GithubIcon className="text-black dark:text-white hover:scale-110 transition-all" />
              </Link>
              <ThemeSwitch />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
