import { useBreadcrumbs } from '@shared/hooks';
import { Breadcrumb, } from 'antd';

export const Breadcrumbs = () => {
  const items = useBreadcrumbs();

  return <Breadcrumb items={items} />;
};
