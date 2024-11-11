import { forwardRef, type HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import contacts from "@/content/site/contacts.jsx";

const SocialNavVariants = cva(
  "inline-flex gap-3 hover:[&_svg]:scale-110 [&_svg]:transition-all flex-col md:flex-row",
  {
    variants: {
      variant: {
        default:
          "[&_svg]:fill-indigo-800 [&_svg]:dark:fill-indigo-300 hover:[&_svg]:fill-indigo-700 hover:dark:[&_svg]:fill-indigo-200 hover:[&_svg]:drop-shadow-[1px_1px_2px_##4338ca22] hover:dark:[&_svg]:drop-shadow-[1px_1px_2px_##c7d2fe66]",
        white: "[&_svg]:fill-white",
      },
      size: {
        sm: "[&_svg]:size-5",
        md: "[&_svg]:size-6",
        lg: "[&_svg]:size-7",
        xl: "[&_svg]:size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  },
);

export interface SocialNavProps
  extends HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof SocialNavVariants> {
  asChild?: boolean;
}

const SocialNavLinks = forwardRef<HTMLUListElement, SocialNavProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "ul";
    return (
      <nav aria-label="Social media links">
        <Comp
          className={cn(SocialNavVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {contacts.map(({ name, url, icon }) => (
            <li key={name} title={name}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name}`}
                className="flex items-center justify-center gap-3"
              >
                <svg
                  role="img"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {icon}
                </svg>
                <span className="md:sr-only">{name} &#8599;</span>
              </a>
            </li>
          ))}
        </Comp>
      </nav>
    );
  },
);
export default SocialNavLinks;
