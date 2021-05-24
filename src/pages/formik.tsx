import { Input, Form, Button, Space } from "antd";

const FormItem = Form.Item;

interface IForm {
  username: string;
  password: string;
}

export default function FormikTest() {
  // TODO: make form work with formik , pass handleSubmit for onSubmit of formik
  // BONUS: adding validation has extra points
  // Resource: https://formik.org/docs/tutorial

  const handleSubmit = (values: IForm) => {
    console.log(values);
  };

  return (
    <div>
      <div>Simple Formik With Antd Inputs :: Edit src/pages/formik.tsx</div>
      <hr />
      {/* TODO: use Formik */}
      <form>
        {/* TODO: make this inputs work with formik i suggest make it a reusable component like FormikInput */}
        <FormItem label="Username" name="username">
          <Input />
        </FormItem>
        {/* TODO: make this inputs work with formik i suggest make it a reusable component like FormikInput */}
        <FormItem label="Password" name="password">
          <Input />
        </FormItem>
        <Space>
          <Button type="primary" htmlType="submit">
            submit
          </Button>
          <Button
            onClick={() => {
              // TODO: reset form with fork
            }}
          >
            reset
          </Button>
        </Space>
      </form>
    </div>
  );
}
