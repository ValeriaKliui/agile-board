import { BasicBoardInfo, MembersRolesAssigning } from '@pages/home/components';
import { StepFormValues } from '@pages/home/components/CreatingBoardStepsForm/types';
import { StepPanel } from '@shared/components';
import { MemberRoleType, StepType } from '@shared/types';
import { Form } from 'antd';
import { useState } from 'react';

export const CreatingBoardStepsForm: React.FC = () => {
  const [stepForm] = Form.useForm();
  const [membersOptions, setMembersOptions] = useState<MemberRoleType[]>([]);

  const handleValuesChange = (changedValues: StepFormValues) => {
    if (changedValues.membersChoosen) {
      setMembersOptions(changedValues.membersChoosen);
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
