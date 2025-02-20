import { BREADCRUMBS_MAP } from '@constants';
import { useLocation } from 'react-router';

export const useBreadcrumbs = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}` as keyof typeof BREADCRUMBS_MAP;

    return {
      key: url,
      title: BREADCRUMBS_MAP[url],
    };
  });

  return breadcrumbItems;
};
