import { Button } from '@shared/components';
import { Col, Flex, Form, FormInstance, Input, Row, Spin, Typography } from 'antd';

import { Container, } from './styled';
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
  const onFinish = (values: TFormValues) => {
    onSubmit(values);
  };

  if (isLoading) return <Spin />;

  return (
    <Container vertical align='center' >
      <Form
        variant='underlined'
        form={form}
        labelCol={{ xs: 24, sm: 8 }}
        wrapperCol={{ xs: 24, sm: 22 }}
        layout="horizontal"
        onFinish={onFinish}
      >
        <Row gutter={[16, 16]} >
          {fields?.map((name) => (
            <Col xs={24} sm={12} key={name}>
              <Flex vertical gap='small'>
                <Text strong className="capitalize">
                  {name}
                </Text>
                <Item name={name}   >
                  <Input />
                </Item>
              </Flex>
            </Col>
          ))}
        </Row>
        <Button type="primary" centered size='large' htmlType="submit">
          Save Info
        </Button>
      </Form>
    </Container >
  );
};
