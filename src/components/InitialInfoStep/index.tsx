import { MembersSearch } from '@containers/MembersSearch';
import { Form, Input } from 'antd';

const { Item } = Form;

export const InitialInfoStep = () => {
  return (
    <>
      <Item name="title" required>
        <Input placeholder="My board" />
      </Item>
      <MembersSearch />
    </>
  );
};
