import { CreatingBoardSteps } from '@pages/home/components';
import { useCreatingBoardForm } from '@pages/home/hooks';
import { StepFormValues } from '@pages/home/types';
import { Form, FormInstance } from 'antd';

import { CreatingBoardStepsFormModal } from './types';

export const CreatingBoardStepsForm = <TForm extends FormInstance<StepFormValues> | undefined>({
  stepForm,
  onSubmit,
}: CreatingBoardStepsFormModal<TForm>) => {
  const {
    membersOptions,
    isNextAllowed,
    handleValuesChange,
    onFormSubmit
  } = useCreatingBoardForm(stepForm, onSubmit);

  return (
    <Form
      form={stepForm}
      onFinish={onFormSubmit}
      onValuesChange={handleValuesChange}
      initialValues={{ template: 'custom' }}
    >
      <CreatingBoardSteps
        membersOptions={membersOptions}
        isNextAllowed={isNextAllowed}
      />
    </Form>
  );
};
