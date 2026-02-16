import { cn } from "@/lib/utils";

export const AnimatedShinyText = ({ children, className }) => {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
};