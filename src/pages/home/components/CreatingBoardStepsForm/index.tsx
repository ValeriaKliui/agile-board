import { BasicBoardInfo, MembersRolesAssigning } from '@pages/home/components';
import { StepPanel } from '@shared/components';
import { MemberRoleType, StepType } from '@shared/types';
import { Form, FormInstance } from 'antd';
import { useState } from 'react';

import { CreatingBoardStepsFormModal, StepFormValues } from './types';

export const CreatingBoardStepsForm = <TForm extends FormInstance<StepFormValues> | undefined>({
  stepForm,
}: CreatingBoardStepsFormModal<TForm>) => {
  const [membersOptions, setMembersOptions] = useState<MemberRoleType[]>([]);
  const [isNextAllowed, setIsNextAllowed] = useState(false);

  const handleValuesChange = (changedValues: StepFormValues) => {
    if ('membersChoosen' in changedValues) {
      setMembersOptions(changedValues.membersChoosen);
    }

    const { title, membersChoosen } = stepForm?.getFieldsValue(true) ?? {};
    setIsNextAllowed(!!title && Array.isArray(membersChoosen) && membersChoosen.length > 0);
  };
  const steps: StepType[] = [
    { title: 'Initial info', content: <BasicBoardInfo /> },
    { title: 'Assign roles', content: <MembersRolesAssigning members={membersOptions} /> },
  ];

  const onFinish = () => {
    console.log(stepForm?.getFieldsValue(true) ?? {});
  };

  return (
    <Form form={stepForm} onFinish={onFinish} onValuesChange={handleValuesChange} clearOnDestroy>
      <StepPanel steps={steps} isNextAllowed={isNextAllowed} />
    </Form>
  );
};
