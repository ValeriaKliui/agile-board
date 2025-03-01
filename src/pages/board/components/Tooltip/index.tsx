import { TooltipTrigger } from './Trigger';
import { Tooltip as TooltipAntd, TooltipProps } from 'antd';
import { PropsWithChildren } from 'react';

export const Tooltip = ({ children, ...tooltipProps }: PropsWithChildren<TooltipProps>) => {
    return (
        <TooltipAntd {...tooltipProps}>
            <TooltipTrigger>{children}</TooltipTrigger>
        </TooltipAntd>
    );
};
