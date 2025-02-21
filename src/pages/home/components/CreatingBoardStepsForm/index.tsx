import { BasicBoardInfo, MembersRolesList } from '@pages/home/components';
import { getRolesOptions } from '@pages/home/utils';
import { StepPanel } from '@shared/components';
import { MemberRoleType, StepType } from '@shared/types';
import { boardsStore } from '@store/boards';
import { Form, FormInstance } from 'antd';
import { useState } from 'react';

import { CreatingBoardStepsFormModal, StepFormValues } from './types';
import { userStore } from '@store/user';

export const CreatingBoardStepsForm = <TForm extends FormInstance<StepFormValues> | undefined>({
  stepForm,
  onSubmit
}: CreatingBoardStepsFormModal<TForm>) => {
  const [membersOptions, setMembersOptions] = useState<MemberRoleType[]>([]);
  const [isNextAllowed, setIsNextAllowed] = useState(false);
  const rolesOptions = getRolesOptions()

  const handleValuesChange = (changedValues: StepFormValues) => {
    if ('membersChoosen' in changedValues) {
      setMembersOptions(changedValues.membersChoosen);
    }

    const { title, membersChoosen } = stepForm?.getFieldsValue(true) ?? {};
    setIsNextAllowed(!!title && Array.isArray(membersChoosen) && membersChoosen.length > 0);
  };
  const steps: StepType[] = [
    { title: 'Initial info', content: <BasicBoardInfo /> },
    { title: 'Assign roles', content: <MembersRolesList members={membersOptions} roles={rolesOptions} /> },
  ];

  const onFormSubmit = async () => {
    const { title = '', roles } = stepForm?.getFieldsValue(true) ?? {}
    await boardsStore.createBoard({ title, owner: userStore.userID, members: roles })
    onSubmit()
  };

  return (
    <Form form={stepForm} onFinish={onFormSubmit} onValuesChange={handleValuesChange} clearOnDestroy>
      <StepPanel steps={steps} isNextAllowed={isNextAllowed} />
    </Form>
  );
};
