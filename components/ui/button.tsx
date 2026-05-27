import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-sm font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A972] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#F5F1E8] text-[#0B0B0B] shadow-[0_18px_60px_rgba(198,169,114,0.18)] hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(198,169,114,0.28)]",
        ghost:
          "border border-[#F5F1E8]/15 bg-white/[0.03] text-[#F5F1E8] backdrop-blur-xl hover:border-[#C6A972]/50 hover:bg-[#C6A972]/10",
        gold:
          "border border-[#C6A972]/40 bg-[#C6A972]/15 text-[#F5F1E8] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] hover:bg-[#C6A972]/25"
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
