import { useState } from 'react';
import { Button, Steps } from 'antd';
import { StepsPanelProps } from '@components/StepPanel/interfaces';

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
      <div>{steps[activeStep].content}</div>
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
