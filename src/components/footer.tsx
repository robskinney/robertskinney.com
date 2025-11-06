import { Link } from "@tanstack/react-router";
import { Logo } from "./navbar/logo";
import MaxWidthWrapper from "./max-width-wrapper";
import { ThemeSwitcher } from "./ui/shadcn-io/theme-switcher";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

interface MenuItem {
  title: string;
  links: {
    isExternal: boolean;
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    icon: React.ReactNode;
    alt: string;
  };
  menuItems?: MenuItem[];
  copyright?: string;
}

const Footer = ({
  logo = {
    icon: <Logo />,
    alt: "Robert Kinney Logo",
  },
  menuItems = [
    {
      title: "Social",
      links: [
        {
          isExternal: true,
          text: "GitHub",
          url: "https://github.com/robskinney",
        },
        {
          isExternal: true,
          text: "LinkedIn",
          url: "https://www.linkedin.com/in/robertskinney",
        },
      ],
    },
    {
      title: "Navigation",
      links: [
        { isExternal: false, text: "Home", url: "/" },
        { isExternal: false, text: "Blog", url: "/blog" },
        { isExternal: false, text: "Projects", url: "/projects" },
      ],
    },
  ],
  copyright = "© 2025 robertskinney.com. All rights reserved.",
}: FooterProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <footer
      className="pb-10 pt-20 bg-bottom"
      style={{
        backgroundImage: `linear-gradient(to bottom, var(--bg-overlay-fade), var(--bg-overlay-light)), var(--bg-image)`,
      }}
    >
      <MaxWidthWrapper className="container">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center col-span-2 pb-5 sm:pb-0 sm:block sm:col-span-2 space-y-2">
            <div className="flex flex-row items-center gap-1 font-semibold">
              {logo.icon}
              {`Robert Kinney`}
            </div>
            <a href="/Kinney_Robert_Resume.pdf" download>
              <Button size="sm" className="text-xs" variant="outline">
                <Download />
                Download Resume
              </Button>
            </a>
          </div>
          {menuItems.map((section, sectionIdx) => (
            <div className="text-center sm:text-right" key={sectionIdx}>
              <h3 className="mb-4 mt-1 font-bold">{section.title}</h3>
              <ul className="text-muted-foreground space-y-4">
                {section.links.map((link, linkIdx) =>
                  link.isExternal ? (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </a>
                    </li>
                  ) : (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <Link to={link.url}>{link.text}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 mt-6 text-muted-foreground border-t text-sm font-medium">
          <p>{copyright}</p>
          <ThemeSwitcher
            defaultValue="system"
            onChange={setTheme}
            value={theme as "light" | "dark" | "system"}
          />
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export { Footer };
