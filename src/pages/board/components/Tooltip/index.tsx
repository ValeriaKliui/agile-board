import { Tooltip as TooltipAntd, TooltipProps } from 'antd';
import { forwardRef, PropsWithChildren } from 'react';

const CustomTrigger = forwardRef<HTMLDivElement, PropsWithChildren>(
    ({ children, ...props }, ref) => (
        <div ref={ref} {...props}>
            {children}
        </div>
    ),
);

export const Tooltip = ({ children, ...tooltipProps }: PropsWithChildren<TooltipProps>) => {
    return (
        <TooltipAntd {...tooltipProps}>
            <CustomTrigger>{children}</CustomTrigger>
        </TooltipAntd>
    );
};
