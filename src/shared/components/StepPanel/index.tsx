import { Button, Steps } from 'antd';
import { useState } from 'react';

import { StepsPanelProps } from './types';
import { Content } from './styled';

export const StepPanel = ({ steps }: StepsPanelProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    setActiveStep((curr) => curr + 1);
  };

  const prev = () => {
    setActiveStep((curr) => curr - 1);
  };

  return (
    <>
      <Steps current={activeStep} style={{ width: 400 }}>
        {steps.map((item) => (
          <Steps.Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <Content >{steps[activeStep].content}</Content>
      <div>
        {activeStep < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {activeStep === steps.length - 1 && (
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        )}
        {activeStep > 0 && <Button onClick={() => prev()}>Previous</Button>}
      </div>
    </>
  );
};
