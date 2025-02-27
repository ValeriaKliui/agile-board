import { PATHS } from '@constants';
import { Result } from 'antd';

import { Button } from '../Button';

export const ErrorFallback = () => {
  return (
    <>
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={
          <Button type="primary" href={PATHS.HOME}>
            Back Home
          </Button>
        }
      />
    </>
  );
};
