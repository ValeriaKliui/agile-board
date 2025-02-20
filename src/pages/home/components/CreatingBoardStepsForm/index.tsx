import { BasicBoardInfo,MembersRolesAssigning } from '@pages/home/components';
import { StepPanel } from '@shared/components';
import { Form } from 'antd';
import { useState } from 'react';

export const CreatingBoardStepsForm: React.FC = () => {
  const [stepForm] = Form.useForm();
  const [membersOptions, MembersOptions] = useState([]);

  const handleValuesChange = (changedValues) => {
    if (changedValues.membersChoosen) {
      MembersOptions(changedValues.membersChoosen);
    }
  };
  const steps: StepType[] = [
    { title: 'Initial info', content: <BasicBoardInfo /> },
    { title: 'Assign roles', content: <MembersRolesAssigning members={membersOptions} /> },
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
