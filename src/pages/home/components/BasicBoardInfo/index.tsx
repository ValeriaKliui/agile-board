import { MembersSearch } from '@pages/home/components';
import { Form, Input } from 'antd';

const { Item } = Form;

export const BasicBoardInfo = () => {
  return (
    <>
      <Item name="title">
        <Input placeholder="My board" />
      </Item>
      <MembersSearch />
    </>
  );
};
