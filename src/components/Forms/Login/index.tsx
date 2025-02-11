import { EmailInput } from "@components/Forms/Fields/Email";
import { PasswordInput } from "@components/Forms/Fields/Password";
import { FormAuthValues } from "@components/Forms/types";
import { loginUser } from "@utils/auth/loginUser";
import { Button, Form } from "antd";
import Item from "antd/es/list/Item";
import { getAuth, } from "firebase/auth";

export const LoginForm = () => {
    const [form] = Form.useForm<FormAuthValues>();

    const auth = getAuth();

    const onFinish = async ({ email, password }: FormAuthValues) => {
        const { result, error } = await loginUser({ auth, email, password })
        if (result === 'error') console.log(error)
    };


    return <Form form={form} name="login" onFinish={onFinish} scrollToFirstError>
        <EmailInput />
        <PasswordInput />

        <Item>
            <Button type="primary" htmlType="submit">
                Log in
            </Button>
        </Item>
        <Item>
            <Button type="default" >
                ForgotPassword
            </Button>
        </Item>
    </Form>
}