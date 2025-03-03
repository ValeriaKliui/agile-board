import { forwardRef, PropsWithChildren } from "react";

export const TooltipTrigger = forwardRef<HTMLDivElement, PropsWithChildren>(
    ({ children, ...props }, ref) => (
        <div ref={ref} {...props}>
            {children}
        </div>
    ),
);