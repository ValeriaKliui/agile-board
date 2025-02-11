import { EmailInput } from "@components/Forms/Fields/Email";
import { PasswordInput } from "@components/Forms/Fields/Password";
import { FormAuthValues } from "@components/Forms/types";
import { getConfirmPasswordRules, } from "@utils/antd/antd";
import { registerUser } from "@utils/auth/registerUser";
import { Button, Form, Input } from "antd";
import { getAuth } from "firebase/auth";

const { Item } = Form;

export const FormRegister = () => {
    const [form] = Form.useForm<FormAuthValues>();
    const confirmPasswordRules = getConfirmPasswordRules()

    const auth = getAuth();

    const onFinish = async ({ email, password }: FormAuthValues) => {
        const { result, error } = await registerUser({ auth, email, password })
        if (result === 'error') console.log(error)
    };

    return (
        <Form form={form} name="register" onFinish={onFinish} scrollToFirstError>
            <EmailInput />
            <PasswordInput />

            <Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={confirmPasswordRules}
            >
                <Input.Password autoComplete="password" />
            </Item>

            <Item>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Item>
        </Form>
    );
}
