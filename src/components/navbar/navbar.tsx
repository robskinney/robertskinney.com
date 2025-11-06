import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Button } from "~/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => setIsSticky(y > 8));
    return () => unsubscribe();
  }, [scrollY]);

  // Optional: smooth animation for the progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.3,
  });

  return (
    <nav
      className={`fixed w-full bg-sidebar/85 backdrop-blur-xl border-b mx-auto transition-all duration-500 z-50
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

      {/* Progress bar using Framer Motion */}
      {isSticky && (
        <motion.div
          className="h-[2px] absolute bottom-0 left-0 w-full bg-transparent overflow-hidden"
          style={{ scaleX, originX: 0 }}
        >
          <div className="h-full bg-primary w-full" />
        </motion.div>
      )}

      {/* Sticky detection */}
      {/* <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ top: 0 }}
      >
        <ScrollObserver setIsSticky={setIsSticky} />
      </div> */}
    </nav>
  );
};

export default Navbar;
