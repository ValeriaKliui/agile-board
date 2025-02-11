import { Button, Checkbox, Form, Input } from "antd";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const { Item } = Form;

export default function Register() {
  const [form] = Form.useForm();

  const onFinish = () => {
    console.log("Received values of form: ");
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, "email@gmail.com", "sdfsdf")
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <Form form={form} name="register" onFinish={onFinish} scrollToFirstError>
        <Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input autoComplete="email" />
        </Item>

        <Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            { min: 8, message: "Password must be more than 8 symbols" },
          ]}
          hasFeedback
        >
          <Input.Password autoComplete="password" />
        </Item>

        <Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password autoComplete="password" />
        </Item>

        <Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("You need to accept agreement")),
            },
          ]}
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
