import { StepPanel } from '@components/StepPanel';
import { Form } from 'antd';
import { StepType } from '@components/StepPanel/interfaces';
import { useState } from 'react';
import { InitialInfoStep } from '@components/InitialInfoStep';
import { AssignRolesStep } from '@components/AssignRolesStep';

export const CreatingBoardStepsForm: React.FC = () => {
  const [stepForm] = Form.useForm();
  const [membersOptions, MembersOptions] = useState([]);

  const handleValuesChange = (changedValues) => {
    if (changedValues.membersChoosen) {
      MembersOptions(changedValues.membersChoosen);
    }
  };
  const steps: StepType[] = [
    { title: 'Initial info', content: <InitialInfoStep /> },
    { title: 'Assign roles', content: <AssignRolesStep members={membersOptions} /> },
  ];

  const onFinish = () => {
    console.log(stepForm.getFieldsValue(true));
  };

  return (
    <Form form={stepForm} onFinish={onFinish} onValuesChange={handleValuesChange}>
      <StepPanel steps={steps} />
    </Form>
  );
};
