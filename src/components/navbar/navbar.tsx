import { useState, useEffect, useRef } from "react";
import { Button } from "~/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          const progress = scrolled / height;

          // update sticky state
          if (isSticky !== scrolled > 15) {
            setIsSticky(scrolled > 15);
          }

          // update CSS variable directly
          if (progressRef.current) {
            progressRef.current.style.setProperty(
              "--scroll-progress",
              progress.toString()
            );
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky]);

  return (
    <nav
      className={`fixed w-full bg-sidebar backdrop-blur-xl border-b mx-auto transition-all duration-500 z-50
        ${isSticky ? "h-16 shadow-md" : "h-24 my-auto"}
      `}
    >
      <div className="h-full flex items-center justify-between px-4">
        <Link to="/">
          <Logo className="transition-all hover:rotate-45" />
        </Link>

        <NavMenu className="hidden sm:block" />

        <div className="flex items-center gap-3">
          <a href="mailto:robertskinney@outlook.com?Subject=Inquiry to Robert Kinney">
            <Button variant="default" size="sm" className="rounded-full">
              <Mail />
              Contact Me
            </Button>
          </a>

          <div className="sm:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>

      {/* Progress bar (CSS-driven, GPU accelerated) */}
      {isSticky && (
        <div
          ref={progressRef}
          className="h-[2px] absolute bottom-0 left-0 w-full bg-transparent overflow-hidden"
        >
          <div className="h-full bg-primary origin-left scale-x-[var(--scroll-progress,0)] transition-transform duration-500 ease-out" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
