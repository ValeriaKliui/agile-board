import { TooltipProps } from 'antd';
import { PropsWithChildren } from 'react';

import { TooltipTrigger } from './Trigger';

export const Tooltip = ({ children, ...tooltipProps }: PropsWithChildren<TooltipProps>) =>
    <TooltipTrigger {...tooltipProps}>  {children}</TooltipTrigger>