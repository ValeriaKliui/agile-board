import { Button, Col, Form, FormInstance, Row, Spin, Typography } from 'antd';
import { useState } from 'react';

import { Input } from './styled';
import { UpdateUserInfoFormProps } from './types';

const { Text } = Typography;
const { Item } = Form;

export const UpdateUserInfoForm = <
  TForm extends FormInstance<TFormValues> | undefined,
  TFormValues,
>({
  onSubmit,
  isLoading,
  form,
  fields,
}: UpdateUserInfoFormProps<TForm, TFormValues>) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const onFinish = (values: TFormValues) => {
    onSubmit(values);
    setIsEditing(false);
  };

  if (isLoading) return <Spin />;

  return (
    <>
      <Form
        form={form}
        labelCol={{ xs: 24, sm: 8 }}
        wrapperCol={{ xs: 24, sm: 16 }}
        layout="horizontal"
        disabled={!isEditing}
        onFinish={onFinish}
      >
        <Row gutter={[16, 16]}>
          {fields?.map((name) => (
            <Col xs={24} sm={12} key={name}>
              <Text strong className="capitalize">
                {name}
              </Text>
              <Item name={name}>
                <Input $isEditable={isEditing} placeholder={isEditing ? '' : '-'} />
              </Item>
            </Col>
          ))}
        </Row>

        {!isEditing && (
          <Button type="dashed" onClick={toggleEditing} disabled={false} htmlType="submit">
            Update Info
          </Button>
        )}

        {isEditing && (
          <Button type="primary" htmlType="submit">
            Save Info
          </Button>
        )}
      </Form>
    </>
  );
};
