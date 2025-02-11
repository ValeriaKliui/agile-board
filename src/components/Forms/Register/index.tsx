import { Button, Checkbox, Form, Input } from "antd";
import { getCheckboxRules, getConfirmPasswordRules, getEmailRules, getPasswordRules } from "@utils/antd";
import { getAuth } from "firebase/auth";
import { registerUser } from "@utils/auth";
import { FormRegisterValues } from "@components/Forms/Register/types";

const { Item } = Form;

export const FormRegister = () => {
    const [form] = Form.useForm<FormRegisterValues>();
    const emailRules = getEmailRules()
    const passwordRules = getPasswordRules()
    const confirmPasswordRules = getConfirmPasswordRules()
    const acceptanceRules = getCheckboxRules('You need to accept agreement')

    const auth = getAuth();

    const onFinish = ({ email, password }: FormRegisterValues) => {
        registerUser({ auth, email, password })
    };

    return (
        <div>
            <Form form={form} name="register" onFinish={onFinish} scrollToFirstError>
                <Item
                    name="email"
                    label="E-mail"
                    rules={emailRules}
                >
                    <Input autoComplete="email" />
                </Item>

                <Item
                    name="password"
                    label="Password"
                    rules={passwordRules}
                    hasFeedback
                >
                    <Input.Password autoComplete="password" />
                </Item>

                <Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={confirmPasswordRules}
                >
                    <Input.Password autoComplete="password" />
                </Item>

                <Item
                    name="agreement"
                    valuePropName="checked"
                    rules={acceptanceRules}
                >
                    <Checkbox>
                        I have read the{" "}
                        <a href="" target="_blank">
                            agreement
                        </a>
                    </Checkbox>
                </Item>
                <Item>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Item>
            </Form>
        </div>
    );
}
