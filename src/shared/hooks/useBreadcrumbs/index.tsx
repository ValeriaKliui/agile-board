import { PATHS } from '@constants';
import { BREADCRUMBS_MAP } from '@shared/constants/ui';
import { Link, useLocation } from 'react-router';

export const useBreadcrumbs = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(Boolean);

  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}` as keyof typeof BREADCRUMBS_MAP;

    return {
      key: url,
      title: BREADCRUMBS_MAP[url] && <Link to={url}>{BREADCRUMBS_MAP[url]}</Link>,
    };
  });

  return [
    { key: PATHS.HOME, title: <Link to={PATHS.HOME}>{BREADCRUMBS_MAP[PATHS.HOME]}</Link> },
    ...breadcrumbItems,
  ];
};
