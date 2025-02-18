import { Breadcrumbs } from '@components/Breadcrumbs';
import { useBreadcrumbs } from '@hooks/useBreadcrumbs';

export const BreadcrumbsContainer = () => {
  const breadcrumbItems = useBreadcrumbs();

  return <Breadcrumbs items={breadcrumbItems} />;
};
