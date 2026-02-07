import { Button } from "@/components/ui/button";
import { Logo } from "../../components/ui/logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-background sticky top-0 isolate z-50 border-b py-3.5 md:py-4">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-5 md:flex">
          <div className="flex flex-col gap-1 md:flex-row">
            <Link href="#features">
              <Button variant="ghost" className="w-full md:w-auto">
                Features
              </Button>
            </Link>
            <Link href="#about">
              <Button variant="ghost" className="w-full md:w-auto">
                About
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="ghost" className="w-full md:w-auto">
                Contact
              </Button>
            </Link>
          </div>
          <Link href="#pricing">
            <Button>Try for free</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            <div className="flex flex-col gap-1 md:flex-row">
              <Link href="#features">
                <Button variant="ghost" className="w-full md:w-auto">
                  Features
                </Button>
              </Link>
              <Link href="#about">
                <Button variant="ghost" className="w-full md:w-auto">
                  About
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="ghost" className="w-full md:w-auto">
                  Contact
                </Button>
              </Link>
            </div>
            <Link href="#pricing">
              <Button className="w-full">Try for free</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export const headerSettingsSchema = [
  // { id: "title", label: "Heading", type: "text", default: "Welcome" },
  { id: "subtitle", label: "Subheading", type: "text" },
  { id: "content", label: "Body", type: "richtext" },
  { id: "background_image", label: "Background image", type: "image_picker" },
  { id: "background_color", label: "Background color", type: "color" },
];
