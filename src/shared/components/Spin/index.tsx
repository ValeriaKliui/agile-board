import { Centered } from '@shared/components';
import { Spin as SpinStyled } from 'antd';

import { SpinProps } from './types';

export const Spin = ({ ...props }: SpinProps) => {
  return (
    <Centered>
      <SpinStyled size="large" {...props} />
    </Centered>
  );
};
