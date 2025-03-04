import { PATHS } from '@constants';
import { BREADCRUMBS_MAP } from '@shared/constants/ui';
import { JSX } from 'react';
import { Link, useLocation } from 'react-router';

export const useBreadcrumbs = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(Boolean);

  const breadcrumbItems = pathSnippets
    .map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}` as keyof typeof BREADCRUMBS_MAP;
      const title = BREADCRUMBS_MAP[url];

      return title ? { title: <Link to={url}>{title}</Link> } : undefined;
    })
    .filter((item): item is { title: JSX.Element } => item !== undefined);

  return [
    {
      title: <Link to={PATHS.HOME}>{BREADCRUMBS_MAP[PATHS.HOME]}</Link>,
    },
    ...breadcrumbItems,
  ];
};
