import { Breadcrumbs } from '@components/Breadcrumbs';
import { useBreadcrumbs } from '@hooks';

export const BreadcrumbsContainer = () => {
  const breadcrumbItems = useBreadcrumbs();

  return <Breadcrumbs items={breadcrumbItems} />;
};
