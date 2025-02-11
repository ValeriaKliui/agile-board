import { getEmailRules } from "@utils/antd/antd";
import { Form, Input } from "antd";

const { Item } = Form;

export const EmailInput = () => {
    const emailRules = getEmailRules()

    return <Item
        name="email"
        label="E-mail"
        rules={emailRules}
    >
        <Input autoComplete="email" />
    </Item>

}