import { PATHS } from '@constants';
import { Button } from '@shared/components';
import { Result } from 'antd';

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
