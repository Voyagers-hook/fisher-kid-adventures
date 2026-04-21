import { forwardRef } from "react";
import logo from "@/assets/logo.png";

export const Logo = forwardRef<HTMLImageElement, { className?: string }>(
  ({ className = "w-12 h-12" }, ref) => (
    <img ref={ref} src={logo} alt="Little Voyagers Project — The Voyagers Chronicle" className={className} />
  )
);
Logo.displayName = "Logo";
