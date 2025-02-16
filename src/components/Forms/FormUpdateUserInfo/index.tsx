import { Button } from "@components/Button";
import { FormUpdateUserInfoProps } from "@components/Forms/FormUpdateUserInfo/interfaces";
import { Input } from "@components/Forms/FormUpdateUserInfo/styled";
import { Col, Form, Row, Spin, Typography } from "antd";
import { useState } from "react";

const { Text } = Typography;
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
        <Row gutter={[16, 16]}>
          {fields?.map((name) => (
            <Col xs={24} sm={12}>
              <Text strong className="capitalize">
                {name}
              </Text>
              <Item name={name} key={name}>
                <Input $isEditable={isEditing} />
              </Item>
            </Col>
          ))}
        </Row>

        {!isEditing && (
          <Button
            type="dashed"
            onClick={toggleEditing}
            disabled={false}
            htmlType="submit"
          >
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
