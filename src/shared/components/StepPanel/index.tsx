import { Button, Flex, Steps } from 'antd';
import { useCallback, useMemo, useState } from 'react';

import { Content } from './styled';
import { StepsPanelProps } from './types';

export const StepPanel = ({ steps, isNextAllowed }: StepsPanelProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = useCallback(() => setActiveStep((curr) => curr + 1), []);
  const handlePrev = useCallback(() => setActiveStep((curr) => curr - 1), []);

  const stepsList = useMemo(
    () => steps.map((item) => <Steps.Step key={item.title} title={item.title} />),
    [steps],
  );

  return (
    <>
      <Steps current={activeStep}>{stepsList}</Steps>

      <Content>{steps[activeStep].content}</Content>
      <Flex gap='middle'>
        {activeStep < steps.length - 1 && (
          <Button type="primary" onClick={handleNext} disabled={!isNextAllowed}>
            Next
          </Button>
        )}
        {activeStep === steps.length - 1 && (
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        )}
        {activeStep > 0 && <Button onClick={handlePrev}>Previous</Button>}
      </Flex>
    </>
  );
};
