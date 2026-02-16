import { cn } from "@/lib/utils";

export const BorderBeam = ({ 
  size = 200, 
  duration = 15, 
  delay = 0,
  className 
}) => {
  return (
    <div
      style={{
        "--size": size,
        "--duration": duration,
        "--delay": delay,
      }}
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--size)*1px)_solid_transparent]",
        "[background:linear-gradient(to_right,var(--gdg-blue),var(--gdg-red),var(--gdg-yellow),var(--gdg-green))_border-box] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)]",
        "![mask-composite:subtract] [animation:border-beam_calc(var(--duration)*1s)_infinite_linear] [animation-delay:calc(var(--delay)*1s)]",
        className
      )}
    />
  );
};