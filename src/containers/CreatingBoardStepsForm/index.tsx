import { StepPanel } from '@components/StepPanel';
import { MembersRolesAssigning } from '@containers/MembersRolesAssigning';
import { CreatingBoardInfo } from '@containers/CreatingBoardInfo';
import { Form } from 'antd';
import { StepType } from '@components/StepPanel/interfaces';

const { Item } = Form;

export const CreatingBoardStepsForm = () => {
  const [stepForm] = Form.useForm();

  const steps: StepType[] = [
    {
      title: 'Initial info',
      content: <CreatingBoardInfo />,
    },
    {
      title: 'Assign roles',
      content: (
        <Item name="roles" label="Assign Roles">
          <MembersRolesAssigning getData={() => stepForm.getFieldValue('membersChoosen')} />
        </Item>
      ),
    },
  ];

  const onFinish = () => {
    const formData = stepForm.getFieldsValue(true);

    console.log(formData);
  };

  return (
    <Form form={stepForm} onFinish={onFinish}>
      <StepPanel steps={steps} />
    </Form>
  );
};
