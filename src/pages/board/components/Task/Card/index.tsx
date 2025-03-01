import { forwardRef } from 'react';

import { CardStyled } from './styled';
import { TaskCardProps } from './types';

export const TaskCard = forwardRef<HTMLDivElement, TaskCardProps>(({ x, y, description, ...cardProps }, ref) => (
    <CardStyled size="small" hoverable ref={ref} $transformX={x} $transformY={y} {...cardProps}>
        {description}
    </CardStyled>
));
