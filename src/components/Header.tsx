import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ModeToggle";
import Logo from "@/components/Logo";
import NavItems from "@/content/site/NavItems";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { getRelativeLocaleUrl } from "astro:i18n";
import { LangToggle } from "@/components/LangToggle";
import SocialNavLinks from "@/components/SocialNav";

interface HeaderProps {
  lang: "en" | "ar";
  currentURL: string;
}

const Header: React.FC<HeaderProps> = ({ lang, currentURL }) => {
  return (
    <header className="container absolute left-0 right-0 top-0 z-50 mx-auto flex items-center justify-between gap-6 px-4 py-6 text-primary">
      <div className="flex cursor-pointer gap-2 hover:text-indigo-700/90 [&_svg]:fill-indigo-700 [&_svg]:hover:fill-indigo-700/90">
        <a href={getRelativeLocaleUrl(lang)}>
          <Logo height={24} className="w-32 lg:w-[276px]" />
          <span className="sr-only">Bishoy Gamal</span>
        </a>
      </div>

      <ul className="hidden items-center gap-10 lg:flex">
        {NavItems[lang].map((item) => (
          <li
            className={cn(
              "font-medium capitalize transition hover:text-indigo-700/90",
              currentURL === item.url
                ? "text-indigo-700 dark:text-indigo-400"
                : "",
            )}
            key={item.name}
          >
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-1">
        <div className="flex items-center gap-2 lg:hidden">
          <Sheet>
            <SheetTrigger>
              <span className="inline-flex h-9 w-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                <Menu className="h-5 w-5 rotate-0 scale-100" />
              </span>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle>
                <span className="sr-only">Main Menu</span>
              </SheetTitle>
              <SheetDescription>
                <span className="sr-only">
                  You can navigate between pages and click on social media links
                  to reach out to me on diffent social media platforms
                </span>
              </SheetDescription>
              <div className="flex h-full flex-col items-center justify-between">
                <ul className="mt-8 flex flex-col items-center gap-4 lg:hidden">
                  {NavItems[lang].map((item) => (
                    <li
                      className={cn(
                        "font-medium capitalize transition hover:text-indigo-700/90",
                        currentURL === item.url
                          ? "text-indigo-700 dark:text-indigo-400"
                          : "",
                      )}
                      key={item.name}
                    >
                      <a href={item.url}>{item.name}</a>
                    </li>
                  ))}
                </ul>
                <SocialNavLinks size="sm" className="p-2" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <SocialNavLinks size="sm" className="hidden p-2 lg:inline-flex" />
        <LangToggle currentURL={currentURL} />
        <ModeToggle />
      </div>
    </header>
  );
};
export default Header;
