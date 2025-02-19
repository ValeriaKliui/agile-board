import { useBreadcrumbs } from '@hooks';
import { Breadcrumbs } from '@shared/components';

export const BreadcrumbsContainer = () => {
  const breadcrumbItems = useBreadcrumbs();

  return <Breadcrumbs items={breadcrumbItems} />;
};
