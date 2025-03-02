import { StepFormValues } from '@pages/home/types';
import { MemberRoleType } from '@shared/types';
import { getRolesOptions } from '@shared/utils';
import { boardStore, userStore } from '@store';
import { FormInstance } from 'antd';
import { useCallback, useState } from 'react';

export const useCreatingBoardForm = <TForm extends FormInstance<StepFormValues> | undefined>(
  stepForm: TForm,
  onSubmit: () => void,
) => {
  const [membersOptions, setMembersOptions] = useState<MemberRoleType[]>([]);
  const [isNextAllowed, setIsNextAllowed] = useState(false);
  const rolesOptions = getRolesOptions();

  const handleValuesChange = useCallback(
    (changedValues: StepFormValues) => {
      if ('selectedMembers' in changedValues) {
        setMembersOptions(changedValues.selectedMembers);
      }

      const { title, selectedMembers } = stepForm?.getFieldsValue(true) ?? {};
      setIsNextAllowed(!!title && Array.isArray(selectedMembers) && selectedMembers.length > 0);
    },
    [stepForm],
  );

  const onFormSubmit = useCallback(async () => {
    const { title = '', members, template } = stepForm?.getFieldsValue(true) ?? {};
    const { userID } = userStore.user ?? {};

    if (userID) {
      await boardStore.createBoard({ title, owner: userID, members, template });
      onSubmit();
    }
  }, [stepForm, onSubmit]);

  return {
    rolesOptions,
    membersOptions,
    isNextAllowed,
    handleValuesChange,
    onFormSubmit,
  };
};
