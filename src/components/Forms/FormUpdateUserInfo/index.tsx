import { Button } from '@components/Button';
import { FormUpdateUserInfoProps } from '@components/Forms/FormUpdateUserInfo/interfaces';
import { Form, Input, Spin } from 'antd';
import { useState } from 'react';

const { Item } = Form;

export const FormUpdateUserInfo = <TForm, TFormValues>({
  onFormSubmit,
  isLoading,
  form,
  fields,
}: FormUpdateUserInfoProps<TForm, TFormValues>) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const onFinish = (values: TFormValues) => {
    onFormSubmit(values);
    setIsEditing(false);
  };

  if (isLoading) return <Spin />;

  return (
    <>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={!isEditing}
        onFinish={onFinish}
      >
        {fields?.map((name) => (
          <Item label={name} name={name} key={name}>
            <Input />
          </Item>
        ))}

        {!isEditing && (
          <Button
            type="dashed"
            onClick={toggleEditing}
            disabled={false}
          >
            Edit Info
          </Button>
        )}

        {isEditing && (
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginLeft: 10 }}
          >
            Update
          </Button>
        )}
      </Form>
    </>
  );
};
