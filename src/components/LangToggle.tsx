import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getRelativeLocaleUrl } from "astro:i18n";
import { Globe } from "lucide-react";

interface LangToggleProps {
  currentURL: string;
}

export const LangToggle: React.FC<LangToggleProps> = ({ currentURL }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="" />
          <span className="sr-only">Toggle Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <a
          href={getRelativeLocaleUrl("en", currentURL.slice(3))}
          className="cursor-pointer"
        >
          <DropdownMenuItem className="justify-center">
            English
          </DropdownMenuItem>
        </a>
        <a
          href={getRelativeLocaleUrl("ar", currentURL.slice(3))}
          className="cursor-pointer"
        >
          <DropdownMenuItem className="justify-center">
            العربية
          </DropdownMenuItem>
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
